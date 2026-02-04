# Vercel Deployment - Environment Variables Setup

## 🚀 Quick Setup Guide

Your contact form is ready to integrate with Google Sheets! Follow these steps to complete the setup in production.

---

## ✅ What's Already Done

- ✅ Google Sheet created: [Empty AI Agency - Contacts](https://docs.google.com/spreadsheets/d/16WKtLBq04BJTBuJE38m4y8u9XABv-E6LwK1M3N0fqyY/edit)
- ✅ API route implemented with Google Sheets integration
- ✅ Contact form updated with submission logic
- ✅ Fallback logging (works even without credentials)
- ✅ Build passes with 0 errors
- ✅ Code committed and pushed to GitHub

---

## ⏳ Next Steps for Production

### 1. Create Google Cloud Service Account (10 minutes)

**Why needed:** The Sheets API requires a service account (OAuth2 won't work for server-side access).

**Steps:**

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. **Enable Google Sheets API:**
   - Navigation menu > "APIs & Services" > "Library"
   - Search "Google Sheets API"
   - Click "Enable"

4. **Create Service Account:**
   - Navigation menu > "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "Service Account"
   - Name: `empty-ai-agency-sheets`
   - Click "Create and Continue"
   - Skip optional steps, click "Done"

5. **Generate JSON Key:**
   - Click on the service account you just created
   - Go to "Keys" tab
   - Click "Add Key" > "Create New Key"
   - Format: JSON
   - Click "Create" (downloads automatically)

6. **Share Google Sheet with Service Account:**
   - Open the JSON key file
   - Copy the `client_email` (looks like: `xxx@xxx.iam.gserviceaccount.com`)
   - Open [your Google Sheet](https://docs.google.com/spreadsheets/d/16WKtLBq04BJTBuJE38m4y8u9XABv-E6LwK1M3N0fqyY/edit)
   - Click "Share" button
   - Paste the service account email
   - Set permission: "Editor"
   - **Uncheck "Notify people"**
   - Click "Share"

---

### 2. Configure Vercel Environment Variables (5 minutes)

**Go to Vercel Dashboard:**
https://vercel.com/[your-username]/empty-ai-agency/settings/environment-variables

**Add these 3 environment variables:**

#### Variable 1: GOOGLE_CLIENT_EMAIL
- **Key:** `GOOGLE_CLIENT_EMAIL`
- **Value:** Copy from JSON key file → `client_email` field
- **Example:** `empty-ai-agency-sheets@your-project.iam.gserviceaccount.com`
- **Environment:** Production, Preview, Development (select all)

#### Variable 2: GOOGLE_PRIVATE_KEY
- **Key:** `GOOGLE_PRIVATE_KEY`
- **Value:** Copy from JSON key file → `private_key` field
- **Important:** 
  - Include `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`
  - Keep the `\n` characters as literal `\n` (don't convert to actual newlines)
  - The value should be one long string with `\n` in it
- **Environment:** Production, Preview, Development (select all)

#### Variable 3: GOOGLE_SHEET_ID
- **Key:** `GOOGLE_SHEET_ID`
- **Value:** `16WKtLBq04BJTBuJE38m4y8u9XABv-E6LwK1M3N0fqyY`
- **Environment:** Production, Preview, Development (select all)

**Save all variables.**

---

### 3. Redeploy (Automatic)

Once you save the environment variables, Vercel will automatically redeploy your site. 

If not, trigger a manual redeployment:
- Go to "Deployments" tab
- Click "Redeploy" on the latest deployment

---

### 4. Test the Integration (2 minutes)

1. Visit your production site: https://empty-ai-agency.vercel.app/en/contact
2. Fill out the contact form
3. Submit
4. **Verify success:**
   - ✅ You see "Message sent successfully!"
   - ✅ Check [Google Sheet](https://docs.google.com/spreadsheets/d/16WKtLBq04BJTBuJE38m4y8u9XABv-E6LwK1M3N0fqyY/edit) for the new entry

---

## 🔍 Troubleshooting

### Form submits but data doesn't appear in sheet

**Check Vercel logs:**
1. Go to https://vercel.com/[your-username]/empty-ai-agency/logs
2. Filter by "Runtime Logs"
3. Look for Google Sheets API errors

**Common issues:**
- ❌ Service account email not shared with sheet → Re-share with Editor permissions
- ❌ Wrong `GOOGLE_SHEET_ID` → Verify it matches: `16WKtLBq04BJTBuJE38m4y8u9XABv-E6LwK1M3N0fqyY`
- ❌ `GOOGLE_PRIVATE_KEY` has actual newlines instead of `\n` → Re-paste as one line with `\n`
- ❌ Google Sheets API not enabled → Enable it in Google Cloud Console

### "Missing required fields" error
- The form validates name, email, and message
- Ensure all required fields are filled

### "Invalid email format" error
- Email must be valid format: `user@domain.com`

---

## 📊 Monitor Submissions

**Google Sheet (Real-time):**
https://docs.google.com/spreadsheets/d/16WKtLBq04BJTBuJE38m4y8u9XABv-E6LwK1M3N0fqyY/edit

**Vercel Logs (Debugging):**
https://vercel.com/[your-username]/empty-ai-agency/logs

---

## 🎯 Success Checklist

After completing all steps above:

- [ ] Google Cloud project created
- [ ] Google Sheets API enabled
- [ ] Service account created with JSON key downloaded
- [ ] Google Sheet shared with service account email (Editor)
- [ ] `GOOGLE_CLIENT_EMAIL` added to Vercel
- [ ] `GOOGLE_PRIVATE_KEY` added to Vercel
- [ ] `GOOGLE_SHEET_ID` added to Vercel
- [ ] Site redeployed automatically
- [ ] Test form submission successful
- [ ] Entry appears in Google Sheet

---

## 📝 Important Notes

**Security:**
- ✅ Never commit the service account JSON key to git
- ✅ Never share the private key publicly
- ✅ Only add credentials to Vercel environment variables
- ✅ `.env.local` is already in `.gitignore`

**Fallback:**
Even if credentials are not configured or Sheets API fails, the form will:
- ✅ Still accept submissions (users see success)
- 📋 Log to server console (backup)
- 🚨 Log errors for debugging

This ensures users never see a broken form!

---

## 🎉 Done!

Once all steps are complete, your contact form will automatically save all submissions to Google Sheets in real-time.

For detailed technical documentation, see [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md).

---

**Need help?** Check Vercel logs or the detailed setup guide.
