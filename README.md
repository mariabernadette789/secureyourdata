# Bernadette — Executive & Professional Portfolio

A classy, formal, clean, and precise executive portfolio website tailored specifically with a refined color palette of **Navy Blue**, **White**, and **Light Blue**.

Designed for senior strategists, executive leaders, systems architects, and discerning professionals who require an elevated digital presence.

---

## 🎨 Color Palette & Design Tokens

* **Primary Deep Navy**: `#0a192f` & `#050e1d` (Provides gravitas, formal authority, and executive depth)
* **Elevated Navy Surface**: `#0d213f` & `#122b52` (Structured borders, card matrices, and headers)
* **Pristine White**: `#ffffff` (Crisp readability, high-contrast typography, and clean editorial sections)
* **Light Blue Accent**: `#38bdf8` & `#7dd3fc` (Precision highlights, interactive states, and glowing metrics)
* **Subtle Ice White Tint**: `#f0f7ff` & `#f8fafc` (Graceful light cards and dossier backgrounds)

---

## ✨ Features & Capabilities

1. **Executive Dossier Branding**:
   - Monogram insignia (`B`) enclosed in a tailored geometric frame.
   - Status badge indicating executive availability for advisory engagements.

2. **Hero Presentation**:
   - Compelling executive tagline with KaTeX-grade aesthetic balance.
   - Animated statistical counters (`12+ Years`, `98.5% Precision`, `45+ Engagements`).
   - Quick action triggers for portfolio review, consultation inquiries, and CV download.

3. **Curated Capabilities Matrix**:
   - Structured competency cards: Enterprise Systems Architecture, Strategic Roadmapping, Quantitative Analytics, and Governance & Compliance.

4. **Interactive Case Studies with Dynamic Modal**:
   - Filter by discipline: *Architecture*, *Strategy & Advisory*, *Operations & Analytics*, *Governance*.
   - Click "Review Case Dossier" on any project to launch an in-depth modal featuring the Challenge, Architectural Solution, and Quantifiable Metrics.

5. **Career Trajectory & Milestones**:
   - Formal vertical chronological timeline detailing roles, organizations, and measurable impact.

6. **Accreditations & Endorsements**:
   - Academic degrees (Master's, Bachelor's) and global certifications (TOGAF, PMP®).
   - Executive client testimonial quotes.

7. **Consultation & Direct Contact Suite**:
   - One-click **Copy Email** utility with instant visual clipboard feedback.
   - Validated interactive consultation request form with optional Mutual NDA selector and simulated secure transmission.
   - Direct download of `Bernadette_CV.txt`.

8. **Fully Responsive & Zero Build Dependencies**:
   - Works immediately out-of-the-box by double-clicking `index.html` in any browser.
   - Zero compilation or build steps needed (pure vanilla HTML5, CSS3, ES6 JavaScript, and Lucide CDN).

---

## 🚀 How to View Locally

Simply open `index.html` in your web browser:
* Double-click `index.html` in File Explorer.
* Or right-click `index.html` &rarr; **Open with** &rarr; **Google Chrome** (or Edge / Firefox / Safari).

*(Optional)* If you prefer running a local development server:
```bash
# Using Python:
python -m http.server 8000

# Using Node / npx:
npx serve .
```
Then visit `http://localhost:8000` in your browser.

---

## ✏️ Customization Guide

### 1. Changing Your Name, Title, and Bio
* Open `index.html` in any text editor (VS Code, Notepad, etc.).
* Search for `Bernadette` and replace it with your full name if desired.
* Search for `Principal Consultant & Solutions Strategist` to adjust your specific professional role.
* Update `contact@bernadette-portfolio.com` with your real email address.

### 2. Updating Case Studies
* In `script.js`, edit the `CASE_STUDIES` object at the top of the file to modify project metrics, challenges, and solutions.
* In `index.html`, adjust the project cards under the `<div class="projects-grid">` section.

### 3. Modifying Color Values
* In `styles.css`, all colors are defined in the `:root` block at lines 10–50. You can tweak `--navy-900` or `--light-blue-400` to adjust shades to your exact preference.

---

## 🌐 Free 1-Click Deployment Options

* **GitHub Pages**: Push this directory to a GitHub repository and enable Pages in repository settings.
* **Netlify**: Drag and drop the `BERNADETTE` folder directly into [Netlify Drop](https://app.netlify.com/drop).
* **Vercel**: Run `npx vercel` inside this folder or import from GitHub.
