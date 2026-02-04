# 🔧 Empty AI Agency - Fixes & Improvements

**Reportado por:** Vasco Lima  
**Data:** 2026-02-04 08:42 UTC

## 🔴 CRITICAL ISSUES

### 1. Layout/Styling Problems
**Issue:** Texto a sair dos botões e demasiado encostado às margens

**Problemas identificados:**
- Padding insuficiente nos botões
- Margens laterais muito pequenas (especialmente mobile)
- Overflow de texto em componentes

**Fix needed:**
- [ ] Aumentar padding dos botões (px-6 py-3 → px-8 py-4)
- [ ] Adicionar margens laterais (container: px-4 md:px-6 lg:px-8)
- [ ] Verificar text truncation/overflow
- [ ] Testar em mobile, tablet, desktop

---

### 2. Contact Form - Google Sheets Integration
**Issue:** Formulário não está a registar em Google Sheets

**Current state:** Form é apenas display (não funcional)

**Fix needed:**
- [ ] Setup Google Sheets API
- [ ] Create sheet "Empty AI Agency - Contacts"
- [ ] Implement form submission endpoint
- [ ] POST to Google Sheets via API
- [ ] Add success/error feedback
- [ ] Email notification (opcional)

**Tech approach:**
- Next.js API route `/api/contact`
- Google Sheets API v4
- Service account credentials

---

### 3. Missing Portuguese Language
**Issue:** Site está apenas em inglês, falta português (mercado primário Angola)

**Fix needed:**
- [ ] Implement next-intl ou similar
- [ ] Create translations: pt.json + en.json
- [ ] Language switcher component (header)
- [ ] Translate all content:
  - Hero section
  - Services
  - Project descriptions
  - About page
  - Contact form
  - Footer
- [ ] Set PT as default language
- [ ] SEO: hreflang tags

---

### 4. Missing Dashboard Screenshot
**Issue:** Falta screenshot da home page do Dashboard Financeiro Angola

**Fix needed:**
- [ ] Gerar screenshot do Dashboard (http://localhost:5174)
- [ ] Optimize imagem (WebP, ~800px width)
- [ ] Add to `/public/images/dashboard-preview.png`
- [ ] Update Projects page + Case Study page
- [ ] Add alt text em PT/EN

---

## 📊 Priority Order

1. **HIGH:** Layout/styling fixes (impacta UX imediatamente)
2. **HIGH:** Portuguese language (mercado primário)
3. **MEDIUM:** Dashboard screenshot (visual credibility)
4. **LOW:** Google Sheets integration (pode usar email temporariamente)

---

## 🚀 Action Plan

**Opção A: Spawn sub-agent "website-fixes"**
- Fix all 4 issues
- Test thoroughly
- Push to GitHub → auto-deploy
- ETA: 30-45 min

**Opção B: Manual fixes (Vasco guidance)**
- EmptyBot guia passo-a-passo
- Vasco executa localmente
- Test + deploy

**Opção C: Incremental fixes**
- Fix layout ASAP (10 min)
- Portuguese + screenshot (20 min)
- Google Sheets later (30 min)

---

**Recomendação:** Opção A (sub-agent) para fixes completos e testados em uma iteração.

Aguardando decisão de Vasco.
