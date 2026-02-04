import { google } from 'googleapis';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, project, message, locale } = body;
    
    // Validate required fields
    if (!name || !email || !message) {
      return Response.json(
        { error: 'Missing required fields: name, email, message' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Get IP address for logging
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';

    // Check if Google Sheets credentials are configured
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY;
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!clientEmail || !privateKey || !sheetId) {
      // Credentials not configured - log to console and return success
      console.log('='.repeat(80));
      console.log('📧 CONTACT FORM SUBMISSION (Google Sheets pending configuration)');
      console.log('='.repeat(80));
      console.log('Timestamp:', new Date().toISOString());
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Company:', company || 'N/A');
      console.log('Project Type:', project || 'N/A');
      console.log('Message:', message);
      console.log('Locale:', locale || 'pt');
      console.log('IP:', ip);
      console.log('='.repeat(80));
      console.log('⚠️  TODO: Configure Google Sheets credentials to save to spreadsheet');
      console.log('   Set: GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET_ID');
      console.log('='.repeat(80));

      return Response.json({
        success: true,
        message: 'Contact form submitted successfully',
        note: 'Logged to console - Google Sheets integration pending configuration'
      });
    }

    // Google Sheets credentials are configured - save to sheet
    try {
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: clientEmail,
          private_key: privateKey.replace(/\\n/g, '\n'),
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      const sheets = google.sheets({ version: 'v4', auth });

      // Append row to sheet
      await sheets.spreadsheets.values.append({
        spreadsheetId: sheetId,
        range: 'Sheet1!A:H',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [[
            new Date().toISOString(),
            name,
            email,
            company || '',
            project || '',
            message,
            locale || 'pt',
            ip
          ]],
        },
      });

      console.log('✅ Contact form saved to Google Sheets:', { name, email, locale });

      return Response.json({
        success: true,
        message: 'Contact form submitted successfully'
      });
    } catch (sheetsError) {
      console.error('❌ Google Sheets API Error:', sheetsError);
      
      // Log to console as fallback
      console.log('='.repeat(80));
      console.log('📧 CONTACT FORM SUBMISSION (Sheets API error - logged to console)');
      console.log('='.repeat(80));
      console.log('Timestamp:', new Date().toISOString());
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Company:', company || 'N/A');
      console.log('Project Type:', project || 'N/A');
      console.log('Message:', message);
      console.log('Locale:', locale || 'pt');
      console.log('IP:', ip);
      console.log('='.repeat(80));

      return Response.json({
        success: true,
        message: 'Contact form submitted successfully',
        note: 'Logged to console - Google Sheets API error (check server logs)'
      });
    }
  } catch (error) {
    console.error('❌ Contact form submission error:', error);
    return Response.json(
      { error: 'Internal server error', message: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}
