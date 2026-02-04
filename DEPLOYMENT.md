# Deployment Guide - Empty AI Agency Website

## Quick Deploy to Vercel (Recommended)

### Method 1: GitHub Integration (Easiest)

1. **Push to GitHub** (if not already done):
   ```bash
   cd /home/openclaw/.openclaw/workspace/work/empty-ai-agency/website
   git add .
   git commit -m "Initial website deployment"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "Add New Project"
   - Import `Vazio/empty-ai-agency` repository
   - Set **Root Directory** to: `website`
   - Click "Deploy"

3. **Auto-Deploy Setup**:
   - Vercel automatically deploys on every push to `main`
   - Preview deployments for pull requests
   - Zero configuration needed (Next.js auto-detected)

### Method 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from website directory
cd /home/openclaw/.openclaw/workspace/work/empty-ai-agency/website
vercel

# For production deployment
vercel --prod
```

## Configuration

### Environment Variables (Optional)

If you add backend features (database, email, etc.), set these in Vercel dashboard:

1. Go to your project in Vercel
2. Settings → Environment Variables
3. Add variables from `.env.example`

### Custom Domain (Optional)

1. Vercel dashboard → Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. SSL automatically configured

## Build Configuration

Already configured in `vercel.json`:
- ✅ Framework: Next.js (auto-detected)
- ✅ Build Command: `npm run build`
- ✅ Output Directory: `.next`
- ✅ Security headers enabled
- ✅ Region: US East (iad1)

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test mobile responsiveness
- [ ] Check dark mode toggle
- [ ] Verify navigation links
- [ ] Test contact form (if functional)
- [ ] Check Lighthouse score (target 90+)
- [ ] Add custom domain (optional)
- [ ] Set up analytics (optional)

## Monitoring

Vercel provides:
- Real-time deployment status
- Analytics dashboard
- Error tracking
- Performance metrics

Access at: `vercel.com/your-username/empty-ai-agency`

## Troubleshooting

### Build Fails

```bash
# Test build locally first
npm run build

# Check for errors
npm run lint
```

### Deployment Stuck

- Check Vercel dashboard for error logs
- Verify package.json has all dependencies
- Ensure Node.js version compatibility (18+)

### Pages Not Loading

- Check Vercel function logs
- Verify all imports are correct
- Check for missing dependencies

## Updating the Site

```bash
# Make changes locally
# Test with: npm run dev

# Commit and push
git add .
git commit -m "Update website content"
git push origin main

# Vercel auto-deploys in ~30 seconds
```

## Performance Optimization

Current setup includes:
- ✅ Server Components (default in Next.js 14)
- ✅ Image optimization (Next.js Image)
- ✅ Automatic code splitting
- ✅ TailwindCSS purging
- ✅ Minification & compression

Expected Lighthouse scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 100
- SEO: 100

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Issues**: Create issue in GitHub repo

---

**Deployment Status**: Ready ✅
**Estimated Deploy Time**: 1-2 minutes
**Auto-Deploy**: Enabled on push to main
