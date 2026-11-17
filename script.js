/**
 * BERNADETTE | EXECUTIVE & PROFESSIONAL PORTFOLIO
 * Interactive Client Script
 * Features: Project Filtering, Modal Case Studies, Contact Validation,
 * Stat Counters, Clipboard Tools, and Navigation State Management.
 */

// ==========================================================================
// 1. Case Studies Comprehensive Data Repository
// ==========================================================================
const CASE_STUDIES = {
  1: {
    category: "Architecture & Systems Engineering",
    title: "Aegis Enterprise Microservices Transformation",
    timeline: "2025 – 2026",
    role: "Lead Systems Architect & Technical Director",
    client: "Global Logistics & Fintech Consortium",
    metrics: [
      { num: "-64%", label: "Latency Reduction" },
      { num: "99.99%", label: "Uptime Reliability" },
      { num: "3.2M", label: "Daily Transactions" }
    ],
    challenge: "The institution's legacy monolithic core suffered from escalating deployment friction, systemic failure propagation during peak trading windows, and intolerable maintenance overhead across multi-region deployments.",
    solution: "Architected a zero-downtime, event-driven microservices architecture using gRPC, Kubernetes, and Apache Kafka. Established rigorous domain-driven boundaries, automated Canary releases with cryptographic verification, and distributed tracing via OpenTelemetry.",
    results: "System latency plummeted by 64%, while release velocity increased from monthly fragile deployments to multiple automated daily updates. The infrastructure maintained 99.99% uptime across all major market fluctuations.",
    technologies: ["Distributed Systems", "Kubernetes", "gRPC", "Apache Kafka", "Go", "OpenTelemetry", "Terraform", "PostgreSQL HA"]
  },
  2: {
    category: "Strategy & Capital Modernization",
    title: "Global Capital Allocation & Modernization Blueprint",
    timeline: "2024 – 2025",
    role: "Principal Strategic Advisor",
    client: "Tier-1 Sovereign Wealth & Asset Management Group",
    metrics: [
      { num: "$18.4M", label: "Direct Capital Saved" },
      { num: "8 Mos", label: "Delivery Horizon" },
      { num: "7 to 1", label: "System Consolidation" },
    ],
    challenge: "Seven independent regional departments utilized isolated proprietary tooling for portfolio risk evaluation, resulting in fragmented exposure views, regulatory reporting delays, and redundant license expenditures.",
    solution: "Designed and steered a board-level consolidation blueprint. Created a centralized portfolio computation engine with real-time exposure matrices, consolidated cloud vendor negotiations, and guided change management across 350+ investment managers.",
    results: "Delivered unified reporting in 8 months—4 months ahead of board mandate. Achieved $18.4M in consolidated licensing and operational cost reductions over 3 years.",
    technologies: ["Executive Advisory", "Fintech Systems", "Risk Modeling", "Python / NumPy", "Snowflake", "PowerBI Executive", "Governance Frameworks"]
  },
  3: {
    category: "Operations & Predictive Analytics",
    title: "Precision Supply Chain Telemetry Engine",
    timeline: "2023 – 2024",
    role: "Director of Analytics & Solution Design",
    client: "International Cold-Chain Logistics Corporation",
    metrics: [
      { num: "91.4%", label: "Prediction Precision" },
      { num: "-38%", label: "Spoilage & Losses" },
      { num: "72 Hrs", label: "Pre-Warning Window" }
    ],
    challenge: "Perishable high-value pharmaceutical cargo suffered from unpredictable transport bottlenecks, cold-chain temperature violations, and delayed maritime customs clearance.",
    solution: "Constructed an automated IoT telemetry ingestion stream combined with machine learning anomaly detection. Integrated environmental sensor arrays with predictive maritime harbor congestion data to autonomously reroute shipments prior to customs hold-ups.",
    results: "Reduced temperature failure incidents by 38%, yielding multi-million dollar annual savings and ensuring 100% regulatory audit compliance with international health bodies.",
    technologies: ["Predictive Analytics", "IoT Pipeline", "Time-Series Databases", "AWS IoT Core", "Python", "Grafana Enterprise", "Docker"]
  },
  4: {
    category: "Governance & Institutional Compliance",
    title: "Institutional Sovereign Data Sovereignty Audit",
    timeline: "2022 – 2023",
    role: "Governance & Security Practice Lead",
    client: "Pan-European Healthcare & Research Network",
    metrics: [
      { num: "100%", label: "Regulatory Compliance" },
      { num: "0", label: "Audit Non-Conformities" },
      { num: "14", label: "Jurisdictions Standardized" }
    ],
    challenge: "Expanding operations across 14 sovereign jurisdictions created an intricate matrix of conflicting data localization laws (GDPR, Swiss FADP, HIPAA), exposing the client to existential regulatory penalties.",
    solution: "Formulated a unified Data Sovereignty & Cryptographic Retention Standard. Deployed automated data classification pipelines, tokenization vaults, and zero-knowledge storage topologies that ensure data remains resident within sovereign boundaries.",
    results: "Achieved flawless certifications across all 14 statutory bodies with zero audit findings, providing a clear competitive differentiator for public tenders.",
    technologies: ["Data Sovereignty", "GDPR / HIPAA", "Hardware Security Modules", "HashiCorp Vault", "Zero-Knowledge Proofs", "Legal-Tech Protocol"]
  },
  5: {
    category: "Architecture & Verification",
    title: "High-Assurance Financial Reconciliation Fabric",
    timeline: "2021 – 2022",
    role: "Chief Systems Architect",
    client: "Cross-Border Settlement Network",
    metrics: [
      { num: "100%", label: "Reconciliation Fidelity" },
      { num: "-95%", label: "Manual Overhead" },
      { num: "$850M", label: "Monthly Reconciled Volume" }
    ],
    challenge: "Manual ledger discrepancy checks caused settlement windows to extend beyond T+3, creating significant counterparty liquidity risk during high-volatility events.",
    solution: "Architected a mathematically proven double-entry reconciliation pipeline utilizing formal verification techniques and immutable audit logs. Automated multi-currency balance clearing and discrepancy alerting in near-real-time.",
    results: "Reduced settlement cycle to T+0 (instantaneous clearing) while slashing manual auditing hours by 95% and eliminating reconciliation discrepancies entirely.",
    technologies: ["Formal Verification", "Immutable Ledgers", "PostgreSQL", "Rust", "Apache Flink", "Automated Auditing", "ISO 20022"]
  },
  6: {
    category: "Strategy & M&A Harmonization",
    title: "Post-Merger IT Consolidation & Operational Harmonization",
    timeline: "2020 – 2021",
    role: "Integration Director & Principal Consultant",
    client: "Global Industrial Conglomerate",
    metrics: [
      { num: "14 Wks", label: "Ahead of Schedule" },
      { num: "$7.2M", label: "Annual Synergies" },
      { num: "100%", label: "Master Data Integrity" }
    ],
    challenge: "Following a $1.2B cross-border acquisition, conflicting ERP platforms, duplicate IT contracts, and mismatched reporting hierarchies stalled operational synergies.",
    solution: "Devised and directed a phased 12-month harmonization roadmap. Standardized master data records, migrated core services to a unified cloud tenant, and mediated executive stakeholder priorities.",
    results: "Completed technical synthesis 14 weeks ahead of projections, capturing $7.2M in annual licensing and administrative synergies without disrupting ongoing factory production.",
    technologies: ["M&A Integration", "ERP Consolidation", "Master Data Management", "SAP S/4HANA", "Change Governance", "Executive Roadmapping"]
  }
};

// ==========================================================================
// 2. Initialization & DOM Ready Handling
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Populate dynamic elements
  initYear();
  initHeaderScroll();
  initMobileNav();
  initScrollSpy();
  initPortfolioFiltering();
  initCaseStudyModal();
  initStatCounters();
  initEmailCopyUtility();
  initContactForm();
  initBackToTop();
});

// Dynamic Copyright Year
function initYear() {
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// ==========================================================================
// 3. Navigation & Header Behavior
// ==========================================================================
function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

function initMobileNav() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const mainNav = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!toggleBtn || !mainNav) return;

  const toggleMenu = () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    document.body.classList.toggle('mobile-nav-open');
    mainNav.classList.toggle('open');
  };

  toggleBtn.addEventListener('click', toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mainNav.classList.contains('open')) {
        toggleMenu();
      }
    });
  });
}

function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

// ==========================================================================
// 4. Portfolio Filter System
// ==========================================================================
function initPortfolioFiltering() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

// ==========================================================================
// 5. Case Study Modal System
// ==========================================================================
function initCaseStudyModal() {
  const modalOverlay = document.getElementById('caseStudyModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalContentArea = document.getElementById('modalContentArea');
  const caseStudyButtons = document.querySelectorAll('.view-case-study-btn');

  if (!modalOverlay || !modalContentArea) return;

  const openModal = (projectId) => {
    const study = CASE_STUDIES[projectId];
    if (!study) return;

    modalContentArea.innerHTML = `
      <div class="modal-category-tag">${study.category}</div>
      <h2 class="modal-title" id="modalTitle">${study.title}</h2>
      
      <div class="modal-meta-bar">
        <span><strong>Role:</strong> ${study.role}</span>
        <span>&bull;</span>
        <span><strong>Timeline:</strong> ${study.timeline}</span>
        <span>&bull;</span>
        <span><strong>Sponsor:</strong> ${study.client}</span>
      </div>

      <div class="modal-metrics-callout">
        ${study.metrics.map(m => `
          <div class="modal-metric-box">
            <span class="modal-metric-num">${m.num}</span>
            <span class="modal-metric-sub">${m.label}</span>
          </div>
        `).join('')}
      </div>

      <h4 class="modal-section-h4"><i data-lucide="alert-circle" class="inline-icon"></i> The Architectural Challenge</h4>
      <p class="modal-text">${study.challenge}</p>

      <h4 class="modal-section-h4"><i data-lucide="check-circle" class="inline-icon"></i> Strategic Solution & Implementation</h4>
      <p class="modal-text">${study.solution}</p>

      <h4 class="modal-section-h4"><i data-lucide="bar-chart-2" class="inline-icon"></i> Quantified Outcomes & Enterprise Value</h4>
      <p class="modal-text">${study.results}</p>

      <h4 class="modal-section-h4"><i data-lucide="layers" class="inline-icon"></i> Core Competencies Applied</h4>
      <div class="modal-pill-list">
        ${study.technologies.map(t => `<span class="modal-pill">${t}</span>`).join('')}
      </div>

      <div style="margin-top: 30px; display: flex; gap: 14px; flex-wrap: wrap;">
        <a href="#contact" class="btn btn-primary btn-sm modal-inquire-btn" onclick="document.getElementById('caseStudyModal').classList.remove('open')">
          <span>Inquire Concerning Similar Architecture</span>
          <i data-lucide="arrow-right" class="btn-icon"></i>
        </a>
      </div>
    `;

    modalOverlay.classList.add('open');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Re-initialize icons in modal
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  };

  const closeModal = () => {
    modalOverlay.classList.remove('open');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  caseStudyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-target-modal');
      openModal(projectId);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
      closeModal();
    }
  });
}

// ==========================================================================
// 6. Metric Counters Animation
// ==========================================================================
function initStatCounters() {
  const metricElements = document.querySelectorAll('.metric-number[data-target]');
  if (!metricElements.length) return;

  let hasAnimated = false;

  const animateCounters = () => {
    if (hasAnimated) return;

    metricElements.forEach(el => {
      const target = parseFloat(el.getAttribute('data-target'));
      const suffix = el.textContent.replace(/[0-9.]/g, '');
      const duration = 1600; // ms
      const startTime = performance.now();

      const updateCount = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing function: easeOutExpo
        const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentVal = (easeOut * target).toFixed(target % 1 === 0 ? 0 : 1);
        
        el.textContent = currentVal + suffix;

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          el.textContent = target + suffix;
        }
      };

      requestAnimationFrame(updateCount);
    });

    hasAnimated = true;
  };

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      animateCounters();
      observer.disconnect();
    }
  }, { threshold: 0.4 });

  const heroMetrics = document.querySelector('.hero-metrics-strip');
  if (heroMetrics) {
    observer.observe(heroMetrics);
  }
}

// ==========================================================================
// 7. Clipboard Email Tool
// ==========================================================================
function initEmailCopyUtility() {
  const copyBtn = document.getElementById('copyEmailBtn');
  const emailDisplay = document.getElementById('displayEmail');

  if (!copyBtn || !emailDisplay) return;

  copyBtn.addEventListener('click', async () => {
    const emailToCopy = emailDisplay.textContent.trim();

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(emailToCopy);
      } else {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = emailToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }

      const copyStatus = copyBtn.querySelector('.copy-status');
      if (copyStatus) copyStatus.textContent = "Copied";
      copyBtn.style.backgroundColor = "var(--light-blue-400)";
      copyBtn.style.color = "var(--navy-950)";

      showToast("Email address copied to clipboard: " + emailToCopy);

      setTimeout(() => {
        if (copyStatus) copyStatus.textContent = "Copy";
        copyBtn.style.backgroundColor = "";
        copyBtn.style.color = "";
      }, 2500);

    } catch (err) {
      showToast("Unable to automatically copy. Please select and copy manually.");
    }
  });
}

// ==========================================================================
// 8. Contact Form Validation & Simulated Transmission
// ==========================================================================
function initContactForm() {
  const form = document.getElementById('contactForm');
  const alertBox = document.getElementById('formAlertBox');
  const submitBtn = document.getElementById('submitFormBtn');

  if (!form) return;

  const validateField = (input, errorEl, message) => {
    if (!input.value.trim()) {
      errorEl.textContent = message;
      input.style.borderColor = '#f87171';
      return false;
    } else {
      errorEl.textContent = '';
      input.style.borderColor = '';
      return true;
    }
  };

  const validateEmail = (input, errorEl) => {
    const emailVal = input.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailVal) {
      errorEl.textContent = 'Work email is required.';
      input.style.borderColor = '#f87171';
      return false;
    } else if (!emailRegex.test(emailVal)) {
      errorEl.textContent = 'Please provide a valid email format.';
      input.style.borderColor = '#f87171';
      return false;
    } else {
      errorEl.textContent = '';
      input.style.borderColor = '';
      return true;
    }
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('senderName');
    const emailInput = document.getElementById('senderEmail');
    const typeSelect = document.getElementById('inquiryType');
    const subjectInput = document.getElementById('senderSubject');
    const messageInput = document.getElementById('senderMessage');

    const nameErr = document.getElementById('nameError');
    const emailErr = document.getElementById('emailError');
    const typeErr = document.getElementById('inquiryTypeError');
    const subjectErr = document.getElementById('subjectError');
    const messageErr = document.getElementById('messageError');

    const isNameValid = validateField(nameInput, nameErr, 'Full name is required.');
    const isEmailValid = validateEmail(emailInput, emailErr);
    const isTypeValid = validateField(typeSelect, typeErr, 'Please select an engagement type.');
    const isSubjectValid = validateField(subjectInput, subjectErr, 'A subject line is required.');
    const isMessageValid = validateField(messageInput, messageErr, 'Please provide briefing details.');

    if (!isNameValid || !isEmailValid || !isTypeValid || !isSubjectValid || !isMessageValid) {
      showToast('Please complete all mandatory highlighted fields.');
      return;
    }

    // Process submission state
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Encrypting & Transmitting Inquiry...</span>`;
    }

    // Simulate enterprise secure transmission
    setTimeout(() => {
      if (alertBox) {
        alertBox.style.display = 'flex';
      }

      form.reset();

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<span>Inquiry Transmitted &bull; Send Another</span>`;
      }

      showToast('Formal inquiry successfully transmitted to Bernadette.');

      // Re-trigger icon rendering in alert
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }, 1400);
  });
}

// ==========================================================================
// 9. Back to Top Smooth Scroll
// ==========================================================================
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ==========================================================================
// 10. Toast Notification System
// ==========================================================================
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <i data-lucide="check-circle-2" style="width: 16px; height: 16px; color: var(--light-blue-400);"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(12px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => {
      if (toast.parentElement) {
        toast.parentElement.removeChild(toast);
      }
    }, 300);
  }, 3800);
}
