# Google Sheets Integration Setup

## Overview

The contact form is configured to save submissions to Google Sheets. The integration requires a Google Cloud service account with Sheets API access.

**Spreadsheet Details:**
- **Name:** Empty AI Agency - Contacts
- **ID:** `16WKtLBq04BJTBuJE38m4y8u9XABv-E6LwK1M3N0fqyY`
- **URL:** https://docs.google.com/spreadsheets/d/16WKtLBq04BJTBuJE38m4y8u9XABv-E6LwK1M3N0fqyY/edit
- **Owner:** empty.vl.angola@gmail.com

**Sheet Columns:**
1. Timestamp (auto-generated)
2. Name
3. Email
4. Message
5. Language (PT/EN)
6. User Agent

---

## 🔧 Setup Instructions

### Step 1: Create Google Cloud Service Account

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project or create a new one
3. Enable the **Google Sheets API**:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click "Enable"

4. Create a service account:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "Service Account"
   - Name: `empty-ai-agency-sheets`
   - Description: "Contact form submissions to Google Sheets"
   - Click "Create and Continue"
   - Skip role assignment (optional)
   - Click "Done"

5. Create a service account key:
   - Click on the newly created service account
   - Go to the "Keys" tab
   - Click "Add Key" > "Create New Key"
   - Select "JSON" format
   - Download the JSON key file

### Step 2: Share Google Sheet with Service Account

1. Open the downloaded JSON key file
2. Find the `client_email` field (looks like: `xxx@xxx.iam.gserviceaccount.com`)
3. Open the Google Sheet: https://docs.google.com/spreadsheets/d/16WKtLBq04BJTBuJE38m4y8u9XABv-E6LwK1M3N0fqyY/edit
4. Click "Share" button
5. Add the service account email with "Editor" permissions
6. **Important:** Uncheck "Notify people" before sharing
7. Click "Share"

### Step 3: Configure Environment Variables

#### Local Development (.env.local)

Create `.env.local` in the project root:

```env
GOOGLE_CLIENT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=16WKtLBq04BJTBuJE38m4y8u9XABv-E6LwK1M3N0fqyY
```

**Important:**
- Copy `client_email` from the JSON key file
- Copy `private_key` from the JSON key file (keep the `\n` characters)
- Keep the sheet ID as shown above

#### Vercel Production Deployment

1. Go to your Vercel project settings: https://vercel.com/[your-project]/settings/environment-variables

2. Add these environment variables:

   **GOOGLE_CLIENT_EMAIL**
   - Value: `[service-account-email]@[project].iam.gserviceaccount.com`
   
   **GOOGLE_PRIVATE_KEY**
   - Value: Full private key from JSON (including `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`)
   - **Note:** The `\n` characters must be preserved as literal `\n` (not converted to newlines)
   
   **GOOGLE_SHEET_ID**
   - Value: `16WKtLBq04BJTBuJE38m4y8u9XABv-E6LwK1M3N0fqyY`

3. After adding variables, redeploy the project:
   ```bash
   vercel --prod
   ```

---

## 🧪 Testing

### Test Locally

1. Ensure `.env.local` is configured
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Navigate to http://localhost:3000/en/contact or http://localhost:3000/pt/contact
4. Submit the form
5. Check the Google Sheet for the new entry

### Test in Production

1. Deploy to Vercel with environment variables configured
2. Visit your production site's contact page
3. Submit a test form
4. Verify the entry appears in the Google Sheet

---

## 🔄 Fallback Behavior

The contact form API has built-in fallback mechanisms:

**If credentials are not configured:**
- ✅ Form still works (user sees success message)
- 📋 Submissions are logged to server console
- ⚠️ Console shows configuration reminder

**If Sheets API fails:**
- ✅ Form still works (user sees success message)
- 📋 Submissions are logged to server console as backup
- 🚨 Error is logged for debugging

This ensures the contact form never "breaks" for users, even if Google Sheets has issues.

---

## 📊 Monitoring

**Check Google Sheet:**
https://docs.google.com/spreadsheets/d/16WKtLBq04BJTBuJE38m4y8u9XABv-E6LwK1M3N0fqyY/edit

**Check Server Logs:**
- Vercel: https://vercel.com/[your-project]/logs
- Local: Check terminal output when running `npm run dev`

---

## 🔐 Security Notes

1. **Never commit `.env.local`** - It's already in `.gitignore`
2. **Service account JSON key** - Store securely, don't commit to git
3. **Private key in Vercel** - Only store in environment variables, not in code
4. **Sheet permissions** - Only share with service account email (Editor role)
5. **Rotate credentials** - If compromised, create new service account key

---

## 🎯 Current Status

- ✅ Google Sheet created and structured
- ✅ API route implemented with Sheets integration
- ✅ Contact form component updated with submission logic
- ✅ Fallback logging implemented
- ⏳ **Pending:** Service account creation and credential configuration
- ⏳ **Pending:** Local testing with credentials
- ⏳ **Pending:** Vercel environment variable setup
- ⏳ **Pending:** Production deployment and testing

---

## 📝 Quick Reference

**Sheet ID:** `16WKtLBq04BJTBuJE38m4y8u9XABv-E6LwK1M3N0fqyY`

**API Endpoint:** `/api/contact`

**Method:** POST

**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (required, validated)",
  "company": "string (optional)",
  "project": "string (optional)",
  "message": "string (required)",
  "locale": "string (pt|en)"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Contact form submitted successfully"
}
```

**Response (Error):**
```json
{
  "error": "Error message",
  "message": "Detailed error description"
}
```

---

## ❓ Troubleshooting

### "Missing required fields" error
- Ensure name, email, and message are provided
- Check form validation

### "Invalid email format" error
- Email must match pattern: `xxx@xxx.xxx`

### Submissions not appearing in sheet
1. Check if service account email has Editor access to sheet
2. Verify environment variables are set correctly
3. Check `GOOGLE_PRIVATE_KEY` has proper `\n` characters
4. Check Vercel logs for API errors
5. Verify sheet ID matches: `16WKtLBq04BJTBuJE38m4y8u9XABv-E6LwK1M3N0fqyY`

### Google Sheets API errors
- Check if Sheets API is enabled in Google Cloud Console
- Verify service account has necessary permissions
- Check quota limits (shouldn't be an issue for contact forms)

---

## 🚀 Next Steps

1. **Create service account** following Step 1 above
2. **Download JSON key** and extract credentials
3. **Share sheet** with service account email
4. **Configure `.env.local`** for local testing
5. **Test locally** to verify integration works
6. **Configure Vercel** environment variables
7. **Deploy to production** and test live
8. **Monitor** submissions in Google Sheet

---

For questions or issues, check the Vercel logs or contact the development team.
