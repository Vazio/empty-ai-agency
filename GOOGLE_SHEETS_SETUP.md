# 📊 Google Sheets Contact Form Integration - Setup Guide

## Overview

The contact form on Empty AI Agency website is integrated with Google Sheets to automatically save all submissions. This guide will walk you through the complete setup process.

---

## ✅ Current Status

- ✅ API route created (`app/api/contact/route.ts`)
- ✅ Client-side form component (`components/ContactForm.tsx`)
- ✅ Form validation (name, email, message required)
- ✅ Loading states and error handling
- ✅ Success/error messages
- ⚠️ **Google Sheets credentials NOT configured** (logs to console for now)

---

## 📝 Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com/)
2. Create a new spreadsheet
3. Name it: **"Empty AI Agency - Contacts"**
4. Set up the following columns in Row 1:

| Column A | Column B | Column C | Column D | Column E | Column F | Column G | Column H |
|----------|----------|----------|----------|----------|----------|----------|----------|
| Timestamp | Name | Email | Company | Project Type | Message | Locale | IP |

5. **Copy the Spreadsheet ID** from the URL:
   ```
   https://docs.google.com/spreadsheets/d/SPREADSHEET_ID_HERE/edit
                                          ^^^^^^^^^^^^^^^^
                                          Copy this part
   ```

---

## 🔑 Step 2: Create Google Service Account

### 2.1 Go to Google Cloud Console

1. Visit: https://console.cloud.google.com/
2. Create a new project or select existing project
   - Project name: **"Empty AI Agency"**

### 2.2 Enable Google Sheets API

1. In the Cloud Console, go to **APIs & Services** > **Library**
2. Search for **"Google Sheets API"**
3. Click on it and click **"Enable"**

### 2.3 Create Service Account

1. Go to **APIs & Services** > **Credentials**
2. Click **"Create Credentials"** > **"Service Account"**
3. Fill in details:
   - **Service account name:** `empty-ai-contact-form`
   - **Service account ID:** (auto-generated)
   - **Description:** "Service account for Empty AI Agency contact form submissions"
4. Click **"Create and Continue"**
5. **Grant permissions:** Select role **"Editor"** (or **"Viewer"** if you only need read access)
6. Click **"Continue"** > **"Done"**

### 2.4 Create Service Account Key

1. In **Credentials**, find your new service account in the list
2. Click on the service account email
3. Go to the **"Keys"** tab
4. Click **"Add Key"** > **"Create new key"**
5. Select **JSON** format
6. Click **"Create"**
7. **A JSON file will download** - keep it safe! ⚠️ **Never commit this file to Git**

The JSON file will look like this:
```json
{
  "type": "service_account",
  "project_id": "your-project-id",
  "private_key_id": "...",
  "private_key": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n",
  "client_email": "empty-ai-contact-form@your-project.iam.gserviceaccount.com",
  "client_id": "...",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  ...
}
```

---

## 🔐 Step 3: Share Google Sheet with Service Account

1. Open your Google Sheet: **"Empty AI Agency - Contacts"**
2. Click the **"Share"** button (top right)
3. Enter the **service account email** (from the JSON file):
   ```
   empty-ai-contact-form@your-project.iam.gserviceaccount.com
   ```
4. Set permission: **Editor**
5. **Uncheck "Notify people"**
6. Click **"Share"**

✅ The service account now has access to write to your sheet!

---

## ⚙️ Step 4: Configure Environment Variables

### 4.1 Create `.env.local` file

In the website root directory, create `.env.local`:

```bash
cd /path/to/empty-ai-agency/website
touch .env.local
```

### 4.2 Add credentials to `.env.local`

Open `.env.local` and add the following (using values from your JSON file):

```env
# Google Sheets API Configuration
GOOGLE_CLIENT_EMAIL=empty-ai-contact-form@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p
```

**Important notes:**
- ✅ **Keep the quotes around `GOOGLE_PRIVATE_KEY`**
- ✅ **Keep the `\n` characters** (they represent line breaks)
- ✅ **Do NOT commit `.env.local` to Git** (it's already in `.gitignore`)
- ✅ Copy the entire `private_key` value from the JSON file (including `-----BEGIN` and `-----END`)

### 4.3 Verify `.gitignore`

Make sure `.env.local` is in `.gitignore`:

```
.env.local
.env
```

---

## 🚀 Step 5: Deploy to Vercel

### 5.1 Add Environment Variables to Vercel

1. Go to your Vercel project: https://vercel.com/your-username/empty-ai-agency
2. Go to **Settings** > **Environment Variables**
3. Add all three variables:

| Key | Value | Environment |
|-----|-------|-------------|
| `GOOGLE_CLIENT_EMAIL` | (service account email) | Production, Preview, Development |
| `GOOGLE_PRIVATE_KEY` | (full private key with quotes) | Production, Preview, Development |
| `GOOGLE_SHEET_ID` | (spreadsheet ID) | Production, Preview, Development |

**For `GOOGLE_PRIVATE_KEY`:**
- Keep the quotes: `"-----BEGIN...-----END PRIVATE KEY-----\n"`
- Make sure all `\n` characters are preserved

### 5.2 Redeploy

After adding environment variables:
1. Go to **Deployments**
2. Click on the latest deployment
3. Click **"Redeploy"** or push a new commit to trigger auto-deployment

---

## ✅ Step 6: Test the Integration

### 6.1 Local Testing

1. Start the dev server:
   ```bash
   npm run dev
   ```

2. Open: http://localhost:3000/en/contact

3. Fill out the form and submit

4. **Check the Google Sheet** - you should see a new row!

5. Check server console for logs:
   ```
   ✅ Contact form saved to Google Sheets: { name: 'Test User', email: 'test@example.com', locale: 'en' }
   ```

### 6.2 Production Testing

1. Open: https://empty-ai-agency.vercel.app/en/contact
2. Submit a test form
3. Check the Google Sheet for the new entry

### 6.3 If Credentials Are NOT Configured

The form will still work! It will:
- ✅ Validate inputs
- ✅ Show success message
- ✅ Log to server console
- ⚠️ **But won't save to Google Sheets**

Console output will show:
```
================================================================================
📧 CONTACT FORM SUBMISSION (Google Sheets pending configuration)
================================================================================
Timestamp: 2026-02-04T09:30:00.000Z
Name: John Doe
Email: john@example.com
Company: Acme Corp
Project Type: web-app
Message: I need a website
Locale: en
IP: 192.168.1.1
================================================================================
⚠️  TODO: Configure Google Sheets credentials to save to spreadsheet
   Set: GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET_ID
================================================================================
```

---

## 🐛 Troubleshooting

### Error: "Failed to submit"

**Check:**
1. Environment variables are set correctly in Vercel
2. Private key has proper quotes and `\n` characters
3. Service account has Editor access to the sheet
4. Google Sheets API is enabled in Cloud Console

**View logs:**
- **Vercel:** Go to your deployment > **Functions** > Click on `/api/contact`
- **Local:** Check terminal console

### Error: "Invalid credentials"

**Solution:**
- Double-check `GOOGLE_CLIENT_EMAIL` matches the service account email
- Verify `GOOGLE_PRIVATE_KEY` is copied exactly from JSON (with `\n` and quotes)

### Error: "Permission denied"

**Solution:**
- Make sure you shared the Google Sheet with the service account email
- Grant **Editor** permission (not Viewer)

### Form submits but no data in sheet

**Check:**
1. `GOOGLE_SHEET_ID` is correct (copy from URL)
2. Sheet is named `Sheet1` (or update range in API route)
3. Check Vercel function logs for errors

---

## 📊 Viewing Submissions

Once configured, all contact form submissions will appear in your Google Sheet:

**Google Sheet:** [Empty AI Agency - Contacts](https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit)

### Data Captured

- **Timestamp:** When the form was submitted (ISO 8601 format)
- **Name:** User's name
- **Email:** User's email address
- **Company:** Company name (optional)
- **Project Type:** Selected project type (optional)
- **Message:** User's message
- **Locale:** Website language (en/pt)
- **IP:** User's IP address (for spam prevention)

### Additional Features You Can Add

- **Slack notifications:** Use Google Apps Script to send notifications
- **Auto-reply emails:** Set up Gmail automation
- **Data analysis:** Create charts and pivot tables
- **Export to CRM:** Use Zapier or Make.com integrations

---

## 🔒 Security Best Practices

1. ✅ **Never commit** `.env.local` or service account JSON to Git
2. ✅ **Restrict service account permissions** to only what's needed
3. ✅ **Enable IP restrictions** in Google Cloud Console (optional)
4. ✅ **Rotate credentials** periodically
5. ✅ **Monitor usage** in Google Cloud Console for suspicious activity
6. ✅ **Add rate limiting** to API route (optional, to prevent spam)

---

## 📚 Additional Resources

- [Google Sheets API Documentation](https://developers.google.com/sheets/api)
- [Google Cloud Console](https://console.cloud.google.com/)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)

---

## 🎉 You're Done!

Your contact form is now fully integrated with Google Sheets! Every submission will be automatically saved and you'll have a centralized place to view all inquiries.

**Questions?** Email: empty.vl.angola@gmail.com

---

**Built with pride in Angola 🇦🇴**
