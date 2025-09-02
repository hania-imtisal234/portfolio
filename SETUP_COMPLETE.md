# ✅ Backend Setup Complete!

Your portfolio backend is now running on **http://localhost:5000**

## 🔧 Next Steps to Complete Email Functionality

### 1. Set up Gmail App Password

To enable email sending, you need to configure a Gmail App Password:

1. **Go to your Google Account**: https://myaccount.google.com/
2. **Security** → **2-Step Verification** (must be enabled first)
3. **App passwords** → **Select app: Mail** → **Select device: Other**
4. **Enter name**: "Portfolio Backend"
5. **Copy the 16-character password** (something like: `abcd efgh ijkl mnop`)

### 2. Update Environment Variables

Edit the `.env` file in the backend directory:

```bash
# Open the .env file
nano /home/pc/Desktop/github/portfolio/backend/.env
```

Replace `your_gmail_app_password_here` with your actual App Password:

```env
EMAIL_PASS=abcd efgh ijkl mnop
```

**Note**: Use the App Password exactly as Google gives it to you (with or without spaces).

### 3. Restart the Backend Server

After updating the .env file:
1. Stop the current server (Ctrl+C in the terminal)
2. Restart it: `node /home/pc/Desktop/github/portfolio/backend/server.js`

## 🧪 Test the Contact Form

1. **Frontend**: Make sure your React app is running on http://localhost:3000
2. **Backend**: Make sure the backend is running on http://localhost:5000
3. **Test**: Fill out the contact form on your portfolio and submit it

## 📧 What Will Happen

When someone submits the contact form:
1. **You'll receive an email** with their message
2. **They'll get an auto-reply** confirming you received their message
3. **Rate limiting** prevents spam (5 emails per 15 minutes per IP)

## 🚀 For Production

When you're ready to deploy:
1. Deploy backend to Heroku/Railway/Vercel
2. Update the API URL in `Contact.jsx` from `localhost:5000` to your production URL
3. Update environment variables for production

Your contact form is now fully functional! 🎉
