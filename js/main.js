let currentLang = 'it';
const PROJECTS_INITIAL_VISIBLE = 6;
const PROJECTS_STEP = 6;

let currentProjects = [];
let currentVisibleProjects = PROJECTS_INITIAL_VISIBLE;
let currentViewDetailsLabel = 'View details →';
let currentModalUI = {};
let currentPrimaryTagLabel = 'Primary';
let modalWired = false;
let projectControlsWired = false;

document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  setupNavToggle();
  setupLangSwitch();
  setupCarousel();
  setupProjectControls();

  currentLang = getStoredLang();
  renderAll(currentLang);

  setupHeroPhotoAnimation();
});

function getStoredLang() {
  try {
    return localStorage.getItem('lang') === 'en' ? 'en' : 'it';
  } catch (e) {
    return 'it';
  }
}

function setupNavToggle() {
  const header = document.querySelector('.site-header');
  const navToggle = document.querySelector('.nav-toggle');
  if (!navToggle || !header) return;

  navToggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  header.querySelectorAll('.main-nav a').forEach((link) => {
    link.addEventListener('click', () => {
      header.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function setupLangSwitch() {
  document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.langBtn;
      if (lang === currentLang) return;
      currentLang = lang;
      try {
        localStorage.setItem('lang', lang);
      } catch (e) {
        /* localStorage unavailable, language just won't persist */
      }
      closeModalIfOpen();
      renderAll(lang);
    });
  });
}

function updateLangButtons(lang) {
  document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.langBtn === lang);
  });
}

function closeModalIfOpen() {
  const overlay = document.getElementById('projectModal');
  if (overlay && overlay.classList.contains('open')) {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }
  const carousel = document.getElementById('screenCarousel');
  if (carousel && carousel.classList.contains('open')) {
    carousel.classList.remove('open');
    carousel.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }
}

function renderAll(lang) {
  const data = window.SITE_DATA && window.SITE_DATA[lang];
  if (!data) {
    console.error('window.SITE_DATA.' + lang + ' non trovato — controlla che assets/data.js sia incluso prima di main.js.');
    return;
  }
  document.documentElement.lang = lang;
  updateLangButtons(lang);
  renderUI(data.ui || {});
  renderSite(data);
  setupModal(data.projects || [], (data.ui && data.ui.modal) || {}, (data.ui && data.ui.stackSection && data.ui.stackSection.primaryTag) || 'Primary');
}

function setText(field, value) {
  const el = document.querySelector(`[data-field="${field}"]`);
  if (el) el.textContent = value || '';
}

function renderUI(ui) {
  if (!ui.nav) return;
  setText('navServices', ui.nav.services);
  setText('navProjects', ui.nav.projects);
  setText('navSkills', ui.nav.skills);
  setText('navExperience', ui.nav.experience);
  setText('navFormation', ui.nav.formation);
  setText('navHobbies', ui.nav.hobbies);
  setText('navContact', ui.nav.contact);

  setText('heroCtaWork', ui.hero.ctaWork);
  setText('heroCtaContact', ui.hero.ctaContact);

  setText('brandsLabel', ui.brandsLabel);

  setText('projectsEyebrow', ui.projectsSection.eyebrow);
  setText('projectsHeading', ui.projectsSection.heading);
  setText('projectsLead', ui.projectsSection.lead);

  setText('bringEyebrow', ui.bringSection.eyebrow);
  setText('bringHeading', ui.bringSection.heading);

  setText('experienceEyebrow', ui.experienceSection.eyebrow);
  setText('experienceHeading', ui.experienceSection.heading);

  setText('servicesEyebrow', ui.servicesSection.eyebrow);
  setText('servicesHeading', ui.servicesSection.heading);

  setText('stackEyebrow', ui.stackSection.eyebrow);
  setText('stackHeading', ui.stackSection.heading);

  setText('educationEyebrow', ui.educationSection.eyebrow);
  setText('educationHeading', ui.educationSection.heading);

  setText('hobbiesEyebrow', ui.hobbiesSection.eyebrow);
  setText('hobbiesHeading', ui.hobbiesSection.heading);

  setText('testimonialsEyebrow', ui.testimonialsSection.eyebrow);
  setText('testimonialsHeading', ui.testimonialsSection.heading);

  setText('contactHeading', ui.contactSection.heading);
  setText('contactLead', ui.contactSection.lead);

  setText('footerRights', ui.footer.rights);
  setText('footerLinkedin', ui.footer.linkedin);

  setText('modalStackHeading', ui.modal.stackHeading);
}

function renderSite(data) {
  currentProjects = data.projects || [];
  currentVisibleProjects = Math.min(PROJECTS_INITIAL_VISIBLE, currentProjects.length);
  currentViewDetailsLabel = (data.ui && data.ui.projectsSection && data.ui.projectsSection.viewDetails) || 'View details →';
  currentModalUI = (data.ui && data.ui.modal) || {};
  currentPrimaryTagLabel = (data.ui && data.ui.stackSection && data.ui.stackSection.primaryTag) || 'Primary';

  renderProfile(data.profile);
  renderBrands(data.brands);
  renderProjects(currentProjects, currentViewDetailsLabel, currentVisibleProjects);
  renderOfferings(data.offerings);
  renderExperience(data.experience);
  renderServices(data.services);
  renderStack(data.stack, currentPrimaryTagLabel);
  renderEducation(data.education);
  renderHobbies(data.hobbies);
  renderHighlights(data.highlights);
  renderTestimonials(data.testimonials);
  renderContact(data.profile, (data.ui && data.ui.contactSection) || {});
  renderFooter(data.profile);
}

function renderProfile(profile) {
  if (!profile) return;

  const logoEl = document.querySelector('[data-field="logo"]');
  if (logoEl) logoEl.innerHTML = `<span>${profile.name}</span>`;

  const roleEl = document.querySelector('[data-field="role"]');
  if (roleEl) roleEl.textContent = (profile.role || '').toUpperCase();

  const nameEl = document.querySelector('[data-field="name"]');
  if (nameEl) {
    const parts = profile.name.split(' ');
    const last = parts.pop();
    nameEl.innerHTML = `${parts.join(' ')}<br><span class="accent">${last}</span>`;
  }

  const taglineEl = document.querySelector('[data-field="tagline"]');
  if (taglineEl) taglineEl.textContent = profile.tagline || '';

  const photoEl = document.querySelector('[data-field="photo"]');
  if (photoEl) {
    if (profile.photo) {
      photoEl.src = profile.photo;
      photoEl.alt = `Ritratto di ${profile.name}`;
    } else {
      photoEl.closest('.hero-photo').classList.add('photo-fallback');
    }
  }
}

function renderBrands(brands) {
  const el = document.querySelector('[data-field="brands"]');
  if (!el || !brands) return;
  const item = (b, hidden) =>
    b.logo
      ? `<li${hidden ? ' aria-hidden="true"' : ''}><img src="${b.logo}" alt="${hidden ? '' : b.name}" loading="lazy"></li>`
      : `<li${hidden ? ' aria-hidden="true"' : ''}>${b.name}</li>`;
  // La lista viene duplicata per ottenere uno scroll infinito senza scatti (vedi .brands-marquee animation)
  el.innerHTML = brands.map((b) => item(b, false)).join('') + brands.map((b) => item(b, true)).join('');
}

const PROJECT_ICONS = {
  'WEB APP': '💻',
  LIBRARY: '📦',
  'CLI TOOL': '🖥️',
  SERVICE: '⚙️',
  MOBILE: '📱',
};

function projectIcon(tag) {
  const key = Object.keys(PROJECT_ICONS).find((k) => (tag || '').toUpperCase().includes(k));
  return PROJECT_ICONS[key] || '🔧';
}

function getProjectsLoadMoreLabel(remaining) {
  if (currentLang === 'it') {
    return `Carica altri ${remaining} ${remaining === 1 ? 'progetto' : 'progetti'}`;
  }
  return `Load ${remaining} more ${remaining === 1 ? 'project' : 'projects'}`;
}

function updateProjectsLoadMoreButton(projects, visibleCount) {
  const wrapEl = document.querySelector('[data-field="projectsLoadMoreWrap"]');
  const buttonEl = document.querySelector('[data-field="projectsLoadMore"]');
  if (!wrapEl || !buttonEl || !projects) return;

  const remaining = Math.max(projects.length - visibleCount, 0);
  wrapEl.hidden = remaining === 0;
  buttonEl.textContent = getProjectsLoadMoreLabel(remaining);
}

function renderProjects(projects, viewDetailsLabel, visibleCount = projects ? projects.length : 0) {
  const el = document.querySelector('[data-field="projects"]');
  if (!el || !projects) return;
  const visibleProjects = projects.slice(0, visibleCount);
  el.innerHTML = visibleProjects
    .map((p, i) => {
      const wideClass = p.size === 'wide' ? ' project-card--wide' : '';
      const thumb = p.screens && p.screens[0]
        ? `<img src="${p.screens[0]}" alt="">`
        : `<span class="thumb-icon">${projectIcon(p.tag)}</span>`;
      return `
        <article class="project-card${wideClass}">
          <div class="project-thumb">${thumb}</div>
          <p class="project-tag">${p.tag || ''}</p>
          <h3>${p.title}</h3>
          <p>${p.shortDescription || ''}</p>
          <button type="button" class="project-link" data-open-project="${i}">${viewDetailsLabel}</button>
        </article>`;
    })
    .join('');

  updateProjectsLoadMoreButton(projects, visibleCount);
}

function openProjectModal(project) {
  if (!project) return;

  document.querySelector('[data-field="modalTag"]').textContent = project.tag || '';
  document.querySelector('[data-field="modalTitle"]').textContent = project.title || '';
  document.querySelector('[data-field="modalShortDescription"]').textContent = project.shortDescription || '';

  const actionsEl = document.querySelector('[data-field="modalActions"]');
  const hasScreens = (project.screens || []).length > 0;
  const buttons = [];
  if (project.hasLiveLink && project.link) {
    buttons.push(`<a href="${project.link}" target="_blank" rel="noopener" class="btn btn-primary">${currentModalUI.visitSite || 'Visit the site →'}</a>`);
  }
  if (hasScreens) {
    const btnClass = project.hasLiveLink && project.link ? 'btn btn-ghost' : 'btn btn-primary';
    buttons.push(`<button type="button" class="${btnClass}" data-open-carousel>${currentModalUI.show || 'Show →'}</button>`);
  }
  actionsEl.innerHTML = buttons.join('');
  if (hasScreens) {
    actionsEl.querySelector('[data-open-carousel]').addEventListener('click', () => openCarousel(project.screens, project.title));
  }

  const descEl = document.querySelector('[data-field="modalDescription"]');
  const paragraphs = Array.isArray(project.description) ? project.description : [project.description];
  descEl.innerHTML = paragraphs.filter(Boolean).map((p) => `<p>${p}</p>`).join('');

  const stackSection = document.querySelector('[data-section="modalStack"]');
  const stackEl = document.querySelector('[data-field="modalStack"]');
  const stack = project.stack || [];
  stackSection.style.display = stack.length ? '' : 'none';
  stackEl.innerHTML = stack.map((s) => stackItemHTML(s, currentPrimaryTagLabel)).join('');

  const overlay = document.getElementById('projectModal');
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function setupProjectControls() {
  if (projectControlsWired) return;

  const grid = document.querySelector('[data-field="projects"]');
  if (grid) {
    grid.addEventListener('click', (e) => {
      const button = e.target.closest('[data-open-project]');
      if (!button) return;
      const projectIndex = Number(button.dataset.openProject);
      const project = currentProjects[projectIndex];
      if (project) openProjectModal(project);
    });
  }

  const loadMoreBtn = document.querySelector('[data-field="projectsLoadMore"]');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      currentVisibleProjects = Math.min(currentVisibleProjects + PROJECTS_STEP, currentProjects.length);
      renderProjects(currentProjects, currentViewDetailsLabel, currentVisibleProjects);
    });
  }

  projectControlsWired = true;
}

function setupModal(projects, modalUI, primaryTagLabel) {
  currentProjects = projects || [];
  currentModalUI = modalUI || {};
  currentPrimaryTagLabel = primaryTagLabel || 'Primary';

  const overlay = document.getElementById('projectModal');
  const closeBtn = document.getElementById('modalClose');
  if (!overlay) return;

  const closeModal = () => closeModalIfOpen();

  if (!modalWired) {
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
    });
    modalWired = true;
  }
}

let carouselScreens = [];
let carouselIndex = 0;

function openCarousel(screens, title) {
  carouselScreens = screens || [];
  carouselIndex = 0;
  if (!carouselScreens.length) return;

  const overlay = document.getElementById('screenCarousel');
  const img = document.getElementById('carouselImage');
  img.alt = title || '';
  showCarouselSlide();

  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeCarousel() {
  const overlay = document.getElementById('screenCarousel');
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

function showCarouselSlide() {
  const img = document.getElementById('carouselImage');
  const counter = document.getElementById('carouselCounter');
  img.src = carouselScreens[carouselIndex];
  counter.textContent = `${carouselIndex + 1} / ${carouselScreens.length}`;
}

function carouselStep(delta) {
  if (!carouselScreens.length) return;
  carouselIndex = (carouselIndex + delta + carouselScreens.length) % carouselScreens.length;
  showCarouselSlide();
}

function setupCarousel() {
  const overlay = document.getElementById('screenCarousel');
  const closeBtn = document.getElementById('carouselClose');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  if (!overlay) return;

  closeBtn.addEventListener('click', closeCarousel);
  prevBtn.addEventListener('click', () => carouselStep(-1));
  nextBtn.addEventListener('click', () => carouselStep(1));
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeCarousel();
  });
  document.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'Escape') closeCarousel();
    if (e.key === 'ArrowLeft') carouselStep(-1);
    if (e.key === 'ArrowRight') carouselStep(1);
  });
}

function renderOfferings(offerings) {
  const el = document.querySelector('[data-field="offerings"]');
  if (!el || !offerings) return;
  el.innerHTML = offerings
    .map(
      (o) => `
      <div class="offering-card" style="--offering-color: ${o.color}; --offering-color-soft: ${o.color}26;">
        <div class="offering-icon">${o.icon}</div>
        <h3>${o.title}</h3>
        <p>${o.description || ''}</p>
      </div>`
    )
    .join('');
}

function renderExperience(experience) {
  const el = document.querySelector('[data-field="experience"]');
  if (!el || !experience) return;
  el.innerHTML = experience
    .map(
      (e) => `
      <li class="timeline-item">
        <p class="timeline-date">${e.dateStart} — ${e.dateEnd}</p>
        <h3>${e.role}</h3>
        <p class="timeline-org">${e.company}</p>
        <p>${e.description || ''}</p>
      </li>`
    )
    .join('');
}

function renderServices(services) {
  const el = document.querySelector('[data-field="services"]');
  if (!el || !services) return;
  el.innerHTML = services
    .map(
      (s) => `
      <div class="service-card">
        <p class="service-num">${s.num}</p>
        <h3>${s.title}</h3>
        <p>${s.description || ''}</p>
      </div>`
    )
    .join('');
}

function stackItemHTML(s, primaryLabel) {
  const badge = s.slug
    ? `<img src="https://cdn.simpleicons.org/${s.slug}/${s.hex || ''}" alt="" loading="lazy" onerror="this.replaceWith(document.createTextNode('${(s.code || s.label || '').slice(0, 2)}'))">`
    : (s.code || (s.label || '').slice(0, 2));
  const primaryTag = s.primary ? `<span class="stack-primary-tag">${primaryLabel}</span>` : '';
  return `<li class="stack-item${s.primary ? ' stack-item--primary' : ''}"><span class="stack-badge">${badge}</span> ${s.label}${primaryTag}</li>`;
}

function renderStack(stack, primaryLabel) {
  const el = document.querySelector('[data-field="stack"]');
  if (!el || !stack) return;
  el.innerHTML = stack.map((s) => stackItemHTML(s, primaryLabel)).join('');
}

function renderEducation(education) {
  const el = document.querySelector('[data-field="education"]');
  if (!el || !education) return;
  el.innerHTML = education
    .map(
      (e) => `
      <li class="education-item">
        <div>
          <h3>${e.degree}</h3>
          <p>${e.school}</p>
          <p class="education-description">${e.description || ''}</p>
        </div>
        <p class="education-date">${e.dateStart} — ${e.dateEnd}</p>
      </li>`
    )
    .join('');
}

function renderHobbies(hobbies) {
  const el = document.querySelector('[data-field="hobbies"]');
  if (!el || !hobbies) return;
  el.innerHTML = hobbies
    .map(
      (h) => `
      <div class="hobby-card">
        <span class="hobby-badge">${h.code}</span>
        <h3>${h.title}</h3>
        <p>${h.description || ''}</p>
      </div>`
    )
    .join('');
}

function renderHighlights(highlights) {
  const el = document.querySelector('[data-field="highlights"]');
  if (!el || !highlights) return;
  el.innerHTML = highlights
    .map(
      (h) => `
      <div class="highlight-card">
        <p class="eyebrow eyebrow-small">${h.tag}</p>
        <h3>${h.title}</h3>
        <p>${h.description || ''}</p>
      </div>`
    )
    .join('');
}

function renderTestimonials(testimonials) {
  const el = document.querySelector('[data-field="testimonials"]');
  if (!el || !testimonials) return;
  el.innerHTML = testimonials
    .map(
      (t) => `
      <blockquote class="testimonial-card">
        <p class="quote-mark">"</p>
        <p>${t.quote}</p>
        <footer>
          <span class="testimonial-avatar">${t.initials}</span>
          <div>
            <cite>${t.author}</cite>
            <p class="testimonial-role">${t.role}</p>
          </div>
        </footer>
      </blockquote>`
    )
    .join('');
}

function renderContact(profile, contactSection) {
  const el = document.querySelector('[data-field="contactActions"]');
  if (!el || !profile) return;
  const buttons = [];
  if (profile.email) buttons.push(`<a href="mailto:${profile.email}" class="btn btn-primary">${profile.email}</a>`);
  if (profile.github) buttons.push(`<a href="${profile.github}" target="_blank" rel="noopener" class="btn btn-ghost">${contactSection.githubLabel || 'GitHub'}</a>`);
  if (profile.cv) buttons.push(`<a href="${profile.cv}" class="btn btn-ghost">${contactSection.cvLabel || 'Download CV'}</a>`);
  el.innerHTML = buttons.join('');
}

function renderFooter(profile) {
  if (!profile) return;
  const nameEl = document.querySelector('[data-field="footerName"]');
  if (nameEl) nameEl.textContent = profile.name;
  const linkedinEl = document.querySelector('[data-field="footerLinkedin"]');
  if (linkedinEl && profile.linkedin) linkedinEl.href = profile.linkedin;
}

function setupHeroPhotoAnimation() {
  const heroPhoto = document.querySelector('.hero-photo');
  if (!heroPhoto) return;

  requestAnimationFrame(() => heroPhoto.classList.add('is-visible'));

  const reduceMotion = typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  let ticking = false;
  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const translate = Math.min(y * 0.25, 90);
        const scale = Math.max(1 - y * 0.00025, 0.92);
        heroPhoto.style.transform = `translateY(${translate}px) scale(${scale})`;
        ticking = false;
      });
    },
    { passive: true }
  );
}
