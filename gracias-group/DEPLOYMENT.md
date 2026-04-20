# 🚀 Vercel Deployment Guide - Gracias Group

Complete step-by-step guide to deploy your website to Vercel.

## Prerequisites

Before deploying, you'll need:
1. **GitHub Account** - To host your code repository
2. **Vercel Account** - Free account at [vercel.com](https://vercel.com)
3. **Git** - Installed on your computer
4. **Node.js** - Already installed

## Step 1: Push Code to GitHub

### 1.1 Create a GitHub Repository
1. Go to [github.com](https://github.com)
2. Click **"New repository"** (+ icon in top right)
3. Name it: `gracias-group`
4. Add description: "Professional Gracias Group Website"
5. Choose **Public** or **Private**
6. Click **"Create repository"**

### 1.2 Initialize Git in Your Project
```bash
cd c:\Users\PyanaMwambaSymphorie\Desktop\new\gracias-group
git init
git add .
git commit -m "Initial commit: Gracias Group website"
```

### 1.3 Connect to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/gracias-group.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

---

## Step 2: Deploy to Vercel

### 2.1 Connect Vercel to GitHub
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click **"New Project"**
3. Click **"Import Git Repository"**
4. Authorize Vercel to access your GitHub account
5. Find and select **`gracias-group`** repository
6. Click **"Import"**

### 2.2 Configure Project
The following settings will appear:

- **Framework Preset**: Select "Other"
- **Root Directory**: Leave as `.`
- **Build Command**: Leave empty (not needed)
- **Output Directory**: Leave empty
- **Install Command**: `npm install`
- **Development Command**: Leave empty

Click **"Environment Variables"** and add:
```
PORT = 3000
NODE_ENV = production
```

### 2.3 Deploy
Click **"Deploy"** button and wait for the deployment to complete.

Your site will be available at: `https://gracias-group.vercel.app`

---

## Step 3: Custom Domain (Optional)

### 3.1 Add Your Domain
1. Go to your Vercel project settings
2. Click **"Domains"**
3. Add your custom domain (e.g., `graciasgroup.com`)
4. Follow Vercel's DNS configuration instructions
5. Update your domain's nameservers to Vercel's

---

## Step 4: Continuous Deployment

Your site will **automatically redeploy** whenever you:
1. Push code to the `main` branch
2. Update environment variables
3. Modify project settings

### Workflow:
```bash
# Make changes to your code
git add .
git commit -m "Update features"
git push origin main

# Vercel automatically deploys!
```

---

## Environment Variables

### Set Environment Variables in Vercel:

1. Go to Project Settings
2. Click **"Environment Variables"**
3. Add variables as needed:

```
PORT = 3000
NODE_ENV = production
SMTP_HOST = smtp.gmail.com (optional, for email)
SMTP_PORT = 587 (optional)
SMTP_USER = your-email@gmail.com (optional)
SMTP_PASS = your-app-password (optional)
RECIPIENT_EMAIL = info@graciasgroup.com (optional)
```

---

## Troubleshooting

### Issue: Build fails
**Solution**: 
1. Check the build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Verify `server.js` exports the app correctly

### Issue: Site returns 502 Bad Gateway
**Solution**:
1. Check that `PORT` is set to 3000
2. Verify all routes are working locally
3. Check server logs in Vercel dashboard

### Issue: Static files not loading
**Solution**:
1. Ensure files are in the `public/` directory
2. Check file paths use `/public/` prefix
3. Verify paths are relative, not absolute

### Issue: Environment variables not working
**Solution**:
1. Redeploy after adding environment variables
2. Clear browser cache (Ctrl + Shift + Delete)
3. Check variable names match your code

---

## Performance Optimization

### 1. Enable Gzip Compression
Already handled by Vercel automatically.

### 2. Optimize Images
- Use WebP format for images
- Compress before uploading
- Use responsive image sizes

### 3. Minify CSS/JS
Already optimized by Vercel.

### 4. Set Cache Headers
Add to `vercel.json`:
```json
"headers": [
  {
    "source": "/public/(.*)",
    "headers": [
      {
        "key": "Cache-Control",
        "value": "public, max-age=31536000, immutable"
      }
    ]
  }
]
```

---

## Monitoring & Analytics

### 1. View Analytics
1. Go to Vercel dashboard
2. Select your project
3. Click **"Analytics"** tab
4. View traffic, performance metrics

### 2. Monitor Errors
1. Click **"Functions"** tab
2. View server-side logs
3. Check error rates and response times

### 3. Check Deployments
1. Click **"Deployments"** tab
2. View history of all deployments
3. Rollback to previous versions if needed

---

## Enable Advanced Features

### 1. Auto-Scaling (Free)
Already enabled by default.

### 2. DDoS Protection (Free)
Included with Vercel.

### 3. SSL/TLS (Free)
Automatic HTTPS enabled.

### 4. Analytics (Paid)
Available in Pro plan.

---

## Updating Your Site

### Method 1: Git Push (Recommended)
```bash
cd c:\Users\PyanaMwambaSymphorie\Desktop\new\gracias-group
git add .
git commit -m "Update description of changes"
git push origin main
# Automatically deploys to Vercel!
```

### Method 2: Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from command line
vercel
```

---

## Security Best Practices

1. ✅ **Never commit `.env`** - Use `.env.example` instead
2. ✅ **Validate all inputs** - Especially form submissions
3. ✅ **Use HTTPS** - Automatic with Vercel
4. ✅ **Keep dependencies updated** - Run `npm audit` regularly
5. ✅ **Set environment variables** - For sensitive data
6. ✅ **Enable CORS** - If needed, configure in server.js

---

## Rollback to Previous Deployment

If something goes wrong:

1. Go to Vercel dashboard
2. Click **"Deployments"**
3. Find the working version
4. Click the **three dots (...)** menu
5. Select **"Rollback"**

---

## Support & Resources

- 📖 **Vercel Docs**: https://vercel.com/docs
- 💬 **Vercel Community**: https://github.com/vercel/vercel
- 🆘 **Help**: https://vercel.com/help
- 📧 **Email**: support@vercel.com

---

## Summary

Your Gracias Group website is now ready for production! 🎉

**Quick Checklist:**
- ✅ `vercel.json` created
- ✅ `.env` file configured
- ✅ Code pushed to GitHub
- ✅ Project deployed on Vercel
- ✅ Domain configured (optional)
- ✅ Environment variables set

**Your Live URL**: https://gracias-group.vercel.app

---

**Happy Deploying! 🚀**
