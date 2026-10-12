<template>
  <div class="app-root">
    <!-- TOP NOTIFICATION & CONTACT BAR -->
    <div class="top-bar" id="topBar">
      <div class="container top-bar-content">
        <div class="top-bar-contact">
          <span class="top-bar-item">
            <i class="fa-solid fa-phone"></i>
            <span class="country-badge">EG</span>
            <a href="tel:+201000073779">+20 100 007 3779</a>
          </span>
          <span class="top-bar-separator">|</span>
          <span class="top-bar-item">
            <i class="fa-solid fa-phone"></i>
            <span class="country-badge">KSA</span>
            <a href="tel:+966545716788">+966 54 571 6788</a>
          </span>
          <span class="top-bar-separator">|</span>
          <span class="top-bar-item top-bar-email">
            <i class="fa-solid fa-envelope"></i>
            <a href="mailto:info@engineering-tracks.com">info@engineering-tracks.com</a>
          </span>
        </div>

        <div class="top-bar-right">
          <!-- Official Social Media Channels -->
          <div class="top-socials">
            <span class="top-socials-label">{{ currentLang === 'ar' ? 'تابعنا:' : 'Follow Us:' }}</span>
            <a href="https://www.facebook.com/engtracks/" target="_blank" rel="noopener noreferrer" class="top-social-link" title="Facebook">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://www.youtube.com/c/EngineeringTracks" target="_blank" rel="noopener noreferrer" class="top-social-link" title="YouTube">
              <i class="fa-brands fa-youtube"></i>
            </a>
            <a href="https://twitter.com/engtracks_eg" target="_blank" rel="noopener noreferrer" class="top-social-link" title="Twitter / X">
              <i class="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://www.instagram.com/engtracksksa/" target="_blank" rel="noopener noreferrer" class="top-social-link" title="Instagram">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/engineering-tracks/" target="_blank" rel="noopener noreferrer" class="top-social-link" title="LinkedIn">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- MAIN NAVBAR -->
    <header class="navbar" :class="{ scrolled: isScrolled }" id="navbar">
      <div class="container nav-container">
        <a href="#page-top" class="brand-logo" aria-label="Engineering Tracks Home">
          <img src="/assets/logo.svg" alt="Engineering Tracks Logo" class="logo-english logo-light" />
          <img src="/assets/logo-dark.svg" alt="Engineering Tracks Logo" class="logo-english logo-dark" />
          <img src="/assets/logoAr_cropped.png" alt="Engineering Tracks Arabic Logo" class="logo-arabic" />
        </a>

        <!-- Desktop Navigation Menu -->
        <nav class="desktop-nav" aria-label="Main Navigation">
          <ul class="nav-menu">
            <li><a href="#hero" class="nav-link" :class="{ active: activeSection === 'hero' }">{{ t('nav_home') }}</a></li>
            <li><a href="#tracks" class="nav-link" :class="{ active: activeSection === 'tracks' }">{{ t('nav_tracks') }}</a></li>
            <li><a href="#courses" class="nav-link" :class="{ active: activeSection === 'courses' }">{{ t('nav_courses') }}</a></li>
            <li>
              <a href="#simulator" class="nav-link" :class="{ active: activeSection === 'simulator' }">
                <span>{{ t('nav_exams') }}</span>
                <span class="nav-badge-pill">Live</span>
              </a>
            </li>
            <li><a href="#why-us" class="nav-link" :class="{ active: activeSection === 'why-us' }">{{ t('nav_why') }}</a></li>
            <li><a href="#branches" class="nav-link" :class="{ active: activeSection === 'branches' }">{{ t('nav_contact') }}</a></li>
          </ul>
        </nav>

        <!-- Navbar Controls Toolbar -->
        <div class="nav-actions">
          <div class="currency-pill" title="Select Currency">
            <i class="fa-solid fa-coins currency-icon"></i>
            <select v-model="currentCurrency" class="currency-select" id="currencySelect" aria-label="Select Currency">
              <option value="SAR">SAR (﷼)</option>
              <option value="EGP">EGP (ج.م)</option>
              <option value="USD">USD ($)</option>
            </select>
          </div>

          <!-- Theme Toggle -->
          <button @click="toggleTheme" class="icon-btn theme-toggle-btn" :title="currentTheme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'" aria-label="Toggle Theme">
            <i class="fa-solid" :class="currentTheme === 'light' ? 'fa-moon' : 'fa-sun'" :style="currentTheme === 'dark' ? 'color:#FFB800' : ''"></i>
          </button>

          <!-- Language Toggle -->
          <button @click="toggleLanguage" class="icon-btn lang-toggle-btn" title="Toggle Language / تغيير اللغة" aria-label="Toggle Language">
            <i class="fa-solid fa-globe"></i>
            <span class="lang-label">{{ currentLang === 'en' ? 'عربي' : 'EN' }}</span>
          </button>

          <!-- Student Portal CTA -->
          <a href="https://engineering-tracks.com/student/login" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-portal" id="studentLoginBtn">
            <i class="fa-solid fa-user-lock"></i>
            <span>{{ t('nav_portal') }}</span>
          </a>

          <!-- Mobile Hamburger Toggle -->
          <button class="mobile-toggle" @click="mobileNavOpen = !mobileNavOpen" :aria-expanded="mobileNavOpen" aria-label="Toggle Menu">
            <i class="fa-solid" :class="mobileNavOpen ? 'fa-xmark' : 'fa-bars-staggered'"></i>
          </button>
        </div>
      </div>
    </header>

    <!-- MOBILE DRAWER BACKDROP OVERLAY -->
    <div class="mobile-nav-overlay" :class="{ open: mobileNavOpen }" @click="closeMobileNav"></div>

    <!-- MOBILE SLIDE-OVER DRAWER -->
    <aside class="mobile-drawer" :class="{ open: mobileNavOpen }">
      <div class="drawer-header">
        <a href="#page-top" class="drawer-logo" @click="closeMobileNav">
          <img src="/assets/logo.svg" alt="Engineering Tracks Logo" class="logo-english logo-light" />
          <img src="/assets/logo-dark.svg" alt="Engineering Tracks Logo" class="logo-english logo-dark" />
          <img src="/assets/logoAr_cropped.png" alt="Engineering Tracks Arabic Logo" class="logo-arabic" />
        </a>
        <button class="drawer-close-btn" @click="closeMobileNav" aria-label="Close menu">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="drawer-body">
        <nav class="drawer-nav">
          <ul class="drawer-menu">
            <li>
              <a href="#hero" class="drawer-link" :class="{ active: activeSection === 'hero' }" @click="closeMobileNav">
                <i class="fa-solid fa-house"></i>
                <span>{{ t('nav_home') }}</span>
              </a>
            </li>
            <li>
              <a href="#tracks" class="drawer-link" :class="{ active: activeSection === 'tracks' }" @click="closeMobileNav">
                <i class="fa-solid fa-compass-drafting"></i>
                <span>{{ t('nav_tracks') }}</span>
                <span class="drawer-badge">16</span>
              </a>
            </li>
            <li>
              <a href="#courses" class="drawer-link" :class="{ active: activeSection === 'courses' }" @click="closeMobileNav">
                <i class="fa-solid fa-graduation-cap"></i>
                <span>{{ t('nav_courses') }}</span>
              </a>
            </li>
            <li>
              <a href="#simulator" class="drawer-link" :class="{ active: activeSection === 'simulator' }" @click="closeMobileNav">
                <i class="fa-solid fa-laptop-code"></i>
                <span>{{ t('nav_exams') }}</span>
                <span class="drawer-badge badge-pulse">Demo</span>
              </a>
            </li>
            <li>
              <a href="#why-us" class="drawer-link" :class="{ active: activeSection === 'why-us' }" @click="closeMobileNav">
                <i class="fa-solid fa-award"></i>
                <span>{{ t('nav_why') }}</span>
              </a>
            </li>
            <li>
              <a href="#branches" class="drawer-link" :class="{ active: activeSection === 'branches' }" @click="closeMobileNav">
                <i class="fa-solid fa-location-dot"></i>
                <span>{{ t('nav_contact') }}</span>
              </a>
            </li>
          </ul>
        </nav>

        <!-- Quick Settings Cluster -->
        <div class="drawer-settings-cluster">
          <div class="drawer-settings-row">
            <span class="drawer-setting-label">
              <i class="fa-solid fa-coins"></i>
              <span>{{ currentLang === 'ar' ? 'العملة:' : 'Currency:' }}</span>
            </span>
            <select v-model="currentCurrency" class="currency-select drawer-currency" aria-label="Select Currency Mobile">
              <option value="SAR">SAR (﷼)</option>
              <option value="EGP">EGP (ج.م)</option>
              <option value="USD">USD ($)</option>
            </select>
          </div>

          <div class="drawer-toggles-row">
            <button @click="toggleTheme" class="drawer-toggle-btn" aria-label="Toggle Theme">
              <i class="fa-solid" :class="currentTheme === 'light' ? 'fa-moon' : 'fa-sun'" :style="currentTheme === 'dark' ? 'color:#FFB800' : ''"></i>
              <span>{{ currentTheme === 'light' ? (currentLang === 'ar' ? 'داكن' : 'Dark') : (currentLang === 'ar' ? 'مضيء' : 'Light') }}</span>
            </button>
            <button @click="toggleLanguage" class="drawer-toggle-btn" aria-label="Toggle Language">
              <i class="fa-solid fa-globe"></i>
              <span>{{ currentLang === 'en' ? 'العربية' : 'English' }}</span>
            </button>
          </div>
        </div>

        <!-- Student Portal CTA in drawer -->
        <div class="drawer-cta-wrapper">
          <a href="https://engineering-tracks.com/student/login" target="_blank" rel="noopener noreferrer" class="btn btn-primary drawer-portal-btn">
            <i class="fa-solid fa-user-lock"></i>
            <span>{{ t('nav_portal') }}</span>
          </a>
        </div>

        <!-- Direct Contact Numbers -->
        <div class="drawer-contacts">
          <a href="tel:+201000073779" class="drawer-contact-item">
            <i class="fa-solid fa-phone"></i>
            <span>EG: +20 100 007 3779</span>
          </a>
          <a href="tel:+966545716788" class="drawer-contact-item">
            <i class="fa-solid fa-phone"></i>
            <span>KSA: +966 54 571 6788</span>
          </a>
          <a href="mailto:info@engineering-tracks.com" class="drawer-contact-item">
            <i class="fa-solid fa-envelope"></i>
            <span>info@engineering-tracks.com</span>
          </a>
        </div>

        <!-- Drawer Social Links -->
        <div class="drawer-socials">
          <a href="https://www.facebook.com/engtracks/" target="_blank" rel="noopener noreferrer" class="top-social-link"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="https://www.youtube.com/c/EngineeringTracks" target="_blank" rel="noopener noreferrer" class="top-social-link"><i class="fa-brands fa-youtube"></i></a>
          <a href="https://twitter.com/engtracks_eg" target="_blank" rel="noopener noreferrer" class="top-social-link"><i class="fa-brands fa-x-twitter"></i></a>
          <a href="https://www.instagram.com/engtracksksa/" target="_blank" rel="noopener noreferrer" class="top-social-link"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://www.linkedin.com/company/engineering-tracks/" target="_blank" rel="noopener noreferrer" class="top-social-link"><i class="fa-brands fa-linkedin-in"></i></a>
        </div>
      </div>
    </aside>

    <!-- HERO SECTION -->
    <section class="hero" id="hero">
      <div class="hero-mesh-blob-1"></div>
      <div class="hero-mesh-blob-2"></div>

      <div class="container hero-grid">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="badge-pulse"></span>
            <span>{{ t('hero_badge') }}</span>
          </div>

          <h1 class="hero-title">
            <span>{{ t('hero_title_1') }}</span>
            <span class="hero-gradient-text">{{ t('hero_title_gradient') }}</span>
          </h1>

          <p class="hero-subtitle">{{ t('hero_desc') }}</p>

          <!-- Hero Search Box -->
          <div class="hero-search-box">
            <i class="fa-solid fa-magnifying-glass" style="color:var(--color-primary); padding-inline-start:0.75rem;"></i>
            <input
              type="text"
              v-model="searchQuery"
              class="hero-search-input"
              :placeholder="t('hero_search_ph')"
              @keyup.enter="handleHeroSearch"
            />
            <button class="btn btn-primary btn-sm" @click="handleHeroSearch">{{ t('btn_search') }}</button>
          </div>

          <!-- Hero CTA Actions -->
          <div class="hero-cta-group">
            <a href="#tracks" class="btn btn-primary btn-lg">
              <span>{{ t('btn_explore_tracks') }}</span>
              <i class="fa-solid fa-arrow-right"></i>
            </a>
            <button class="btn btn-outline btn-lg" @click="showConsultModal = true">
              <i class="fa-regular fa-calendar-check"></i>
              <span>{{ t('btn_free_consultation') }}</span>
            </button>
          </div>

          <!-- Trust Badges -->
          <div class="hero-trust">
            <div class="avatar-stack">
              <span class="avatar-initials">AH</span>
              <span class="avatar-initials" style="background:#0226FF; color:#fff;">MR</span>
              <span class="avatar-initials" style="background:#E40505; color:#fff;">KM</span>
              <span class="avatar-initials" style="background:#10B981; color:#fff;">SA</span>
            </div>
            <div class="trust-text">
              <div><strong>{{ t('trust_stat') }}</strong></div>
              <div class="stars-gold">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                <span style="color:var(--text-muted); font-size:0.8rem; margin-inline-start:4px;">4.9/5 from 14,200+ reviews</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Hero Visual Display -->
        <div class="hero-visual">
          <div class="hero-image-wrapper">
            <img src="/assets/hero_concept.jpg" alt="Engineering Tracks Modern Academy" />
          </div>

          <div class="floating-glass-card float-top-left">
            <div class="glass-icon"><i class="fa-solid fa-certificate"></i></div>
            <div class="glass-content">
              <h4>{{ t('float_card1_title') }}</h4>
              <p>{{ t('float_card1_desc') }}</p>
            </div>
          </div>

          <div class="floating-glass-card float-bottom-right">
            <div class="glass-icon red"><i class="fa-solid fa-bolt"></i></div>
            <div class="glass-content">
              <h4>{{ t('float_card2_title') }}</h4>
              <p>{{ t('float_card2_desc') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ACCREDITATION TICKER -->
    <section class="partners-section">
      <div class="container">
        <div class="partners-header">{{ t('partners_header') }}</div>
        <div class="ticker-wrap">
          <div class="ticker-track">
            <div class="partner-badge"><span class="partner-logo-tag">PMI</span><span>Project Management Institute (CCRS)</span></div>
            <div class="partner-badge"><span class="partner-logo-tag" style="background:#E40505;">SMRP</span><span>Society for Maintenance & Reliability Professionals</span></div>
            <div class="partner-badge"><span class="partner-logo-tag" style="background:#FF9900;">OSHA</span><span>Occupational Safety & Health Administration</span></div>
            <div class="partner-badge"><span class="partner-logo-tag" style="background:#0284C7;">IAM</span><span>The Institute of Asset Management</span></div>
            <div class="partner-badge"><span class="partner-logo-tag" style="background:#0D9488;">ASQ</span><span>American Society for Quality (Six Sigma)</span></div>
            <div class="partner-badge"><span class="partner-logo-tag" style="background:#4F46E5;">AUTODESK</span><span>Certified Training Alignments (BIM / Revit)</span></div>
            <!-- Seamless repetition -->
            <div class="partner-badge"><span class="partner-logo-tag">PMI</span><span>Project Management Institute (CCRS)</span></div>
            <div class="partner-badge"><span class="partner-logo-tag" style="background:#E40505;">SMRP</span><span>Society for Maintenance & Reliability Professionals</span></div>
            <div class="partner-badge"><span class="partner-logo-tag" style="background:#FF9900;">OSHA</span><span>Occupational Safety & Health Administration</span></div>
            <div class="partner-badge"><span class="partner-logo-tag" style="background:#0284C7;">IAM</span><span>The Institute of Asset Management</span></div>
            <div class="partner-badge"><span class="partner-logo-tag" style="background:#0D9488;">ASQ</span><span>American Society for Quality (Six Sigma)</span></div>
            <div class="partner-badge"><span class="partner-logo-tag" style="background:#4F46E5;">AUTODESK</span><span>Certified Training Alignments (BIM / Revit)</span></div>
          </div>
        </div>
      </div>
    </section>

    <!-- METRICS & NUMBERS -->
    <section class="stats-section" id="stats">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-icon"><i class="fa-solid fa-users"></i></div>
            <div class="stat-number">80,000+</div>
            <div class="stat-label">{{ t('stat_trainees') }}</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon"><i class="fa-solid fa-graduation-cap"></i></div>
            <div class="stat-number">100+</div>
            <div class="stat-label">{{ t('stat_courses') }}</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon"><i class="fa-solid fa-compass-drafting"></i></div>
            <div class="stat-number">16</div>
            <div class="stat-label">{{ t('stat_tracks') }}</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon"><i class="fa-solid fa-award"></i></div>
            <div class="stat-number">98.4%</div>
            <div class="stat-label">{{ t('stat_pass_rate') }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 16 PROFESSIONAL TRACKS WITH IMAGES -->
    <section class="tracks-section" id="tracks">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">{{ t('tracks_tag') }}</span>
          <h2 class="section-title">{{ t('tracks_title') }}</h2>
          <p class="section-desc">{{ t('tracks_subtitle') }}</p>
        </div>

        <!-- Filter Bar -->
        <div class="tracks-filter-bar">
          <button
            v-for="cat in trackCategories"
            :key="cat.key"
            class="track-filter-btn"
            :class="{ active: selectedCategory === cat.key }"
            @click="selectedCategory = cat.key"
          >
            {{ t(cat.label) }}
          </button>
        </div>

        <!-- 16 Tracks Cards Grid -->
        <div class="tracks-grid">
          <div
            v-for="track in filteredTracks"
            :key="track.id"
            class="track-card"
            @click="handleTrackSelect(track)"
          >
            <div class="track-img-wrap">
              <img :src="track.image" :alt="currentLang === 'ar' ? track.titleAr : track.titleEn" class="track-card-img" loading="lazy" />
              <div class="track-img-gradient"></div>
              <span class="track-badge-pill">{{ track.badge }}</span>
              <div class="track-card-icon-badge">
                <i :class="track.icon"></i>
              </div>
            </div>

            <div class="track-card-body">
              <h3 class="track-title">{{ currentLang === 'ar' ? track.titleAr : track.titleEn }}</h3>
              <p class="track-desc">{{ currentLang === 'ar' ? track.descAr : track.descEn }}</p>

              <div class="track-cert-tags">
                <span v-for="cert in track.certs" :key="cert" class="cert-tag">{{ cert }}</span>
              </div>

              <div class="track-card-footer">
                <span>{{ currentLang === 'ar' ? 'استعراض المسار' : 'Explore Track' }}</span>
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FLAGSHIP COURSES SECTION -->
    <section class="courses-section" id="courses">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">{{ t('courses_tag') }}</span>
          <h2 class="section-title">{{ t('courses_title') }}</h2>
          <p class="section-desc">{{ t('courses_subtitle') }}</p>
        </div>

        <!-- Courses Toolbar -->
        <div class="courses-toolbar">
          <div class="courses-search-wrapper">
            <i class="fa-solid fa-magnifying-glass courses-search-icon"></i>
            <input
              type="text"
              v-model="courseKeyword"
              class="courses-search-input"
              :placeholder="t('course_filter_ph')"
            />
          </div>

          <div style="display:flex; gap:0.75rem; align-items:center;">
            <select v-model="courseLevel" class="courses-filter-select" aria-label="Level Filter">
              <option value="all">{{ t('level_all') }}</option>
              <option value="Professional">{{ t('level_pro') }}</option>
              <option value="Diploma">{{ t('level_dip') }}</option>
              <option value="Specialist">{{ t('level_spec') }}</option>
            </select>
          </div>
        </div>

        <!-- Courses Cards Grid -->
        <div class="courses-grid">
          <div v-for="course in filteredCourses" :key="course.id" class="course-card">
            <div class="course-thumb">
              <img :src="course.image" :alt="currentLang === 'ar' ? course.titleAr : course.titleEn" loading="lazy" />
              <span class="course-overlay-badge">{{ course.track }}</span>
              <span class="course-exam-badge">{{ course.examCode }}</span>
            </div>

            <div class="course-body">
              <div class="course-meta-row">
                <div class="course-rating">
                  <i class="fa-solid fa-star"></i>
                  <span>{{ course.rating }}</span>
                  <span style="color:var(--text-light); font-size:0.75rem;">({{ course.reviewsCount }})</span>
                </div>
                <span><i class="fa-regular fa-clock" style="margin-inline-end:4px;"></i>{{ course.hours }}</span>
              </div>

              <h3 class="course-title" @click="openCourseDetails(course)" style="cursor:pointer;">
                {{ currentLang === 'ar' ? course.titleAr : course.titleEn }}
              </h3>
              <p class="course-snippet">{{ currentLang === 'ar' ? course.snippetAr : course.snippetEn }}</p>

              <div class="course-features-pills">
                <span class="pill-item"><i class="fa-solid fa-chalkboard-user"></i> {{ course.instructor }}</span>
                <span class="pill-item"><i class="fa-solid fa-layer-group"></i> {{ course.lectures }}</span>
              </div>

              <div class="course-footer">
                <div class="course-price-box">
                  <span class="price-current">{{ currencySymbol }}{{ formatPrice(course.prices[currentCurrency]) }}</span>
                  <span class="price-old">{{ currencySymbol }}{{ formatPrice(course.oldPrices[currentCurrency]) }}</span>
                </div>

                <div class="course-actions-row">
                  <button class="btn btn-outline btn-sm" @click="openCourseDetails(course)">
                    {{ currentLang === 'ar' ? 'التفاصيل' : 'Details' }}
                  </button>
                  <button class="btn btn-primary btn-sm" @click="handleEnroll(course)">
                    {{ currentLang === 'ar' ? 'سجل الآن' : 'Enroll' }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WHY CHOOSE ENGINEERING TRACKS -->
    <section class="why-section" id="why-us">
      <div class="container">
        <div class="why-grid">
          <div class="why-content">
            <span class="section-tag">{{ t('why_tag') }}</span>
            <h2 class="section-title">{{ t('why_title') }}</h2>
            <p class="section-desc">{{ t('why_desc') }}</p>

            <div class="why-features-list">
              <div class="why-feature-item">
                <div class="why-feature-icon"><i class="fa-solid fa-shield-halved"></i></div>
                <div class="why-feature-content">
                  <h4>{{ t('why_f1_title') }}</h4>
                  <p>{{ t('why_f1_desc') }}</p>
                </div>
              </div>
              <div class="why-feature-item">
                <div class="why-feature-icon"><i class="fa-solid fa-clock-rotate-left"></i></div>
                <div class="why-feature-content">
                  <h4>{{ t('why_f2_title') }}</h4>
                  <p>{{ t('why_f2_desc') }}</p>
                </div>
              </div>
              <div class="why-feature-item">
                <div class="why-feature-icon"><i class="fa-solid fa-user-tie"></i></div>
                <div class="why-feature-content">
                  <h4>{{ t('why_f3_title') }}</h4>
                  <p>{{ t('why_f3_desc') }}</p>
                </div>
              </div>
              <div class="why-feature-item">
                <div class="why-feature-icon"><i class="fa-solid fa-laptop-code"></i></div>
                <div class="why-feature-content">
                  <h4>{{ t('why_f4_title') }}</h4>
                  <p>{{ t('why_f4_desc') }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="why-visual-wrap">
            <div class="why-img-container">
              <img src="/assets/engineers_team.jpg" alt="Engineering Tracks Professional Team" />
            </div>
            <div class="why-badge-experience">
              <span class="why-badge-num">12+</span>
              <span class="why-badge-text">{{ t('why_years_text') }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- DELIVERY METHODS -->
    <section class="delivery-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">{{ t('delivery_tag') }}</span>
          <h2 class="section-title">{{ t('delivery_title') }}</h2>
          <p class="section-desc">{{ t('delivery_subtitle') }}</p>
        </div>

        <div class="delivery-grid">
          <div class="delivery-card">
            <div class="delivery-icon"><i class="fa-solid fa-building"></i></div>
            <h3 class="delivery-title">{{ t('del_physical_title') }}</h3>
            <p class="delivery-desc">{{ t('del_physical_desc') }}</p>
            <ul class="delivery-perks">
              <li class="delivery-perk-item"><i class="fa-solid fa-check"></i> {{ t('dp_1') }}</li>
              <li class="delivery-perk-item"><i class="fa-solid fa-check"></i> {{ t('dp_2') }}</li>
              <li class="delivery-perk-item"><i class="fa-solid fa-check"></i> {{ t('dp_3') }}</li>
            </ul>
          </div>

          <div class="delivery-card" style="border-color:var(--color-primary); box-shadow:var(--shadow-md);">
            <div class="delivery-icon" style="background:var(--color-primary); color:#fff;"><i class="fa-solid fa-video"></i></div>
            <h3 class="delivery-title">{{ t('del_live_title') }}</h3>
            <p class="delivery-desc">{{ t('del_live_desc') }}</p>
            <ul class="delivery-perks">
              <li class="delivery-perk-item"><i class="fa-solid fa-check"></i> {{ t('dp_4') }}</li>
              <li class="delivery-perk-item"><i class="fa-solid fa-check"></i> {{ t('dp_5') }}</li>
              <li class="delivery-perk-item"><i class="fa-solid fa-check"></i> {{ t('dp_6') }}</li>
            </ul>
          </div>

          <div class="delivery-card">
            <div class="delivery-icon"><i class="fa-solid fa-mobile-screen-button"></i></div>
            <h3 class="delivery-title">{{ t('del_self_title') }}</h3>
            <p class="delivery-desc">{{ t('del_self_desc') }}</p>
            <ul class="delivery-perks">
              <li class="delivery-perk-item"><i class="fa-solid fa-check"></i> {{ t('dp_7') }}</li>
              <li class="delivery-perk-item"><i class="fa-solid fa-check"></i> {{ t('dp_8') }}</li>
              <li class="delivery-perk-item"><i class="fa-solid fa-check"></i> {{ t('dp_9') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- EXAM SIMULATOR SHOWCASE -->
    <section class="simulator-section" id="simulator">
      <div class="simulator-bg-glow"></div>
      <div class="container">
        <div class="simulator-grid">
          <div class="sim-content">
            <span class="section-tag">{{ t('sim_tag') }}</span>
            <h2>{{ t('sim_title') }}</h2>
            <p>{{ t('sim_desc') }}</p>

            <div class="sim-perk-row">
              <div class="sim-perk-box">
                <h4>{{ t('sim_p1_title') }}</h4>
                <p>{{ t('sim_p1_desc') }}</p>
              </div>
              <div class="sim-perk-box">
                <h4>{{ t('sim_p2_title') }}</h4>
                <p>{{ t('sim_p2_desc') }}</p>
              </div>
            </div>

            <button class="btn btn-accent btn-lg" @click="showExamModal = true">
              <i class="fa-solid fa-play"></i>
              <span>{{ t('btn_try_simulator') }}</span>
            </button>
          </div>

          <!-- Interactive Exam Simulator Device -->
          <div class="sim-device-card">
            <div class="sim-device-header">
              <div class="sim-device-title">
                <i class="fa-solid fa-laptop-code"></i>
                <span>Engineering Tracks Exam Engine v4.2</span>
              </div>
              <div class="sim-timer-pill">
                <i class="fa-regular fa-clock"></i>
                <span>{{ formattedTimer }}</span>
              </div>
            </div>

            <div class="sim-device-body">
              <div class="sim-progress-bar-wrap">
                <div class="sim-progress-info">
                  <span>Question 42 of 180</span>
                  <span>Domain: Predictive Project Life Cycle</span>
                </div>
                <div class="sim-progress-track">
                  <div class="sim-progress-fill"></div>
                </div>
              </div>

              <p class="sim-question-text">
                During a high-rise construction project, the project manager notices that the critical path is delayed by 3 weeks due to material supply chain bottlenecks. What should the project manager evaluate first?
              </p>

              <div class="sim-options-list">
                <div
                  v-for="(opt, idx) in simOptions"
                  :key="idx"
                  class="sim-option-item"
                  :class="{ selected: selectedSimOption === idx + 1 }"
                  @click="selectSimOption(idx + 1)"
                >
                  <span class="sim-option-letter">{{ opt.letter }}</span>
                  <span>{{ opt.text }}</span>
                </div>
              </div>

              <div
                v-if="simFeedback"
                :style="simFeedback.style"
                style="padding:1rem; border-radius:var(--radius-sm); margin-bottom:1rem; font-size:0.9rem;"
                v-html="simFeedback.content"
              ></div>

              <div class="sim-device-footer">
                <button class="btn btn-outline btn-sm" style="color:#fff; border-color:rgba(255,255,255,0.3);" @click="triggerToast('Question 1 of interactive diagnostic sample.')">
                  <i class="fa-solid fa-arrow-left"></i> Previous
                </button>
                <button class="btn btn-primary btn-sm" @click="checkSimAnswer">
                  <span>Verify Answer</span>
                  <i class="fa-solid fa-check"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="testimonials-section" id="testimonials">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">{{ t('testi_tag') }}</span>
          <h2 class="section-title">{{ t('testi_title') }}</h2>
          <p class="section-desc">{{ t('testi_subtitle') }}</p>
        </div>

        <div class="testimonials-grid">
          <div class="testimonial-card">
            <div>
              <div class="testimonial-quote-icon"><i class="fa-solid fa-quote-left"></i></div>
              <p class="testimonial-text">
                "Engineering Tracks prepared me not only to pass the PMP on my first attempt with Above Target in all three domains, but also gave me the exact tools to manage complex mega-infrastructure projects in Riyadh."
              </p>
            </div>
            <div class="testimonial-author-row">
              <div class="testimonial-avatar">ME</div>
              <div class="testimonial-author-info">
                <h4>Eng. Mohamed El-Sayed</h4>
                <p>Senior Project Engineer · Riyadh, KSA</p>
                <span class="testimonial-cert-badge">PMP® Certified</span>
              </div>
            </div>
          </div>

          <div class="testimonial-card">
            <div>
              <div class="testimonial-quote-icon"><i class="fa-solid fa-quote-left"></i></div>
              <p class="testimonial-text">
                "The CMRP diploma with Engineering Tracks is in a league of its own. The instructor's deep maintenance engineering background and practical vibration case studies transformed our plant reliability strategy."
              </p>
            </div>
            <div class="testimonial-author-row">
              <div class="testimonial-avatar" style="border-color:var(--color-accent); color:var(--color-accent);">KA</div>
              <div class="testimonial-author-info">
                <h4>Eng. Khaled Abdel-Rahman</h4>
                <p>Reliability & Maintenance Lead · Cairo, Egypt</p>
                <span class="testimonial-cert-badge">CMRP® Certified</span>
              </div>
            </div>
          </div>

          <div class="testimonial-card">
            <div>
              <div class="testimonial-quote-icon"><i class="fa-solid fa-quote-left"></i></div>
              <p class="testimonial-text">
                "The Revit MEP and BIM track gave me practical project files identical to real consultant submittals. Within two months of completing the diploma, I joined an international design consultant in Dubai."
              </p>
            </div>
            <div class="testimonial-author-row">
              <div class="testimonial-avatar" style="border-color:#10B981; color:#10B981;">NO</div>
              <div class="testimonial-author-info">
                <h4>Eng. Nouran Omar</h4>
                <p>BIM Mechanical Specialist · Dubai, UAE</p>
                <span class="testimonial-cert-badge">Autodesk BIM Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- REGIONAL BRANCHES & LEAD FORM -->
    <section class="branches-section" id="branches">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">{{ t('branches_tag') }}</span>
          <h2 class="section-title">{{ t('branches_title') }}</h2>
          <p class="section-desc">{{ t('branches_subtitle') }}</p>
        </div>

        <div class="branches-grid">
          <!-- Cairo Branch -->
          <div class="branch-card">
            <div class="branch-header">
              <div class="branch-flag-box">🇪🇬</div>
              <div>
                <h3 class="branch-title">Egypt - Cairo</h3>
                <p class="branch-subtitle">{{ t('branch_cairo_sub') }}</p>
              </div>
            </div>
            <ul class="branch-info-list">
              <li class="branch-info-item"><i class="fa-solid fa-location-dot"></i><span>52 Mostafa El-Nahas Street, 8th District, Nasr City, Cairo, Egypt</span></li>
              <li class="branch-info-item"><i class="fa-solid fa-phone"></i><span><a href="tel:+20222718896">+20 2 22718896</a> / <a href="tel:+201000073779">+20 100 007 3779</a></span></li>
              <li class="branch-info-item"><i class="fa-solid fa-clock"></i><span>Saturday - Thursday: 9:00 AM - 10:00 PM</span></li>
            </ul>
            <a href="https://maps.google.com/?q=52+Mostafa+Elnahas+Nasr+City" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" style="margin-top:auto;">
              <i class="fa-solid fa-map-location-dot"></i>
              <span>{{ t('btn_map') }}</span>
            </a>
          </div>

          <!-- Saudi Arabia Branch -->
          <div class="branch-card" style="border-color:var(--color-primary); box-shadow:var(--shadow-md);">
            <div class="branch-header">
              <div class="branch-flag-box" style="background:var(--color-primary); color:#fff;">🇸🇦</div>
              <div>
                <h3 class="branch-title">Saudi Arabia - KSA</h3>
                <p class="branch-subtitle">{{ t('branch_ksa_sub') }}</p>
              </div>
            </div>
            <ul class="branch-info-list">
              <li class="branch-info-item"><i class="fa-solid fa-location-dot"></i><span>Al-Khobar, Qurtuba District, Tariq Bin Ziyad Road (Adjacent to Al-Mouwasat Hospital), Dammam / Khobar</span></li>
              <li class="branch-info-item"><i class="fa-solid fa-phone"></i><span><a href="tel:+966545716788">+966 54 571 6788</a> / <a href="tel:+966138301320">+966 13 830 1320</a></span></li>
              <li class="branch-info-item"><i class="fa-solid fa-clock"></i><span>Sunday - Thursday: 9:00 AM - 9:00 PM</span></li>
            </ul>
            <a href="https://maps.google.com/?q=Al-Khobar+Qurtuba+Tariq+bin+Ziyad" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="margin-top:auto;">
              <i class="fa-solid fa-map-location-dot"></i>
              <span>{{ t('btn_map') }}</span>
            </a>
          </div>

          <!-- UAE Branch -->
          <div class="branch-card">
            <div class="branch-header">
              <div class="branch-flag-box">🇦🇪</div>
              <div>
                <h3 class="branch-title">United Arab Emirates</h3>
                <p class="branch-subtitle">{{ t('branch_uae_sub') }}</p>
              </div>
            </div>
            <ul class="branch-info-list">
              <li class="branch-info-item"><i class="fa-solid fa-location-dot"></i><span>Sharjah Media City (Shams), Al Musnad Building, Sharjah, United Arab Emirates</span></li>
              <li class="branch-info-item"><i class="fa-solid fa-phone"></i><span><a href="tel:+971502591516">+971 50 259 1516</a></span></li>
              <li class="branch-info-item"><i class="fa-solid fa-clock"></i><span>Monday - Friday: 9:00 AM - 6:00 PM</span></li>
            </ul>
            <a href="mailto:info@engineering-tracks.com" class="btn btn-outline btn-sm" style="margin-top:auto;">
              <i class="fa-solid fa-envelope"></i>
              <span>{{ t('btn_contact_uae') }}</span>
            </a>
          </div>
        </div>

        <!-- Lead Registration Box -->
        <div class="cta-box">
          <div class="cta-box-grid">
            <div>
              <h2>{{ t('cta_title') }}</h2>
              <p>{{ t('cta_desc') }}</p>
              <div style="display:flex; gap:1.5rem; flex-wrap:wrap; font-size:0.95rem; opacity:0.95;">
                <span><i class="fa-solid fa-circle-check"></i> Free Career Roadmap</span>
                <span><i class="fa-solid fa-circle-check"></i> Sample Simulator Access</span>
                <span><i class="fa-solid fa-circle-check"></i> Flexible Installment Options</span>
              </div>
            </div>

            <form class="lead-form" @submit.prevent="submitLeadForm">
              <h3 style="font-size:1.15rem; font-weight:700; margin-bottom:0.25rem;">{{ t('form_title') }}</h3>
              <p style="font-size:0.82rem; color:var(--text-muted); margin-bottom:0.5rem;">{{ t('form_subtitle') }}</p>

              <input type="text" v-model="leadForm.name" class="lead-input" :placeholder="t('form_name_ph')" required />
              <input type="email" v-model="leadForm.email" class="lead-input" :placeholder="t('form_email_ph')" required />
              <input type="tel" v-model="leadForm.phone" class="lead-input" :placeholder="t('form_phone_ph')" required />

              <select v-model="leadForm.track" class="lead-input" required>
                <option value="" disabled>{{ t('form_select_track') }}</option>
                <option value="pmp">Project & Risk Management (PMP / RMP)</option>
                <option value="cmrp">Maintenance & Reliability (CMRP / CMRT)</option>
                <option value="safety">HSE & OSHA Safety Specialist</option>
                <option value="bim">Revit MEP & BIM Coordination</option>
                <option value="civil">Civil & Structural Design (ETABS / SAFE)</option>
                <option value="mech">Mechanical Systems (HVAC / Fire / FE)</option>
                <option value="sixsigma">Six Sigma & Quality Management</option>
                <option value="data">Data Science & AI for Engineers</option>
                <option value="other">Other Engineering Track</option>
              </select>

              <button type="submit" class="btn btn-accent" style="width:100%; margin-top:0.5rem;">
                <span>{{ t('btn_submit_lead') }}</span>
                <i class="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ ACCORDION -->
    <section class="faq-section" id="faq">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">{{ t('faq_tag') }}</span>
          <h2 class="section-title">{{ t('faq_title') }}</h2>
          <p class="section-desc">{{ t('faq_subtitle') }}</p>
        </div>

        <div class="faq-list">
          <div
            v-for="(faq, idx) in faqs"
            :key="idx"
            class="faq-item"
            :class="{ active: openFaqIndex === idx }"
          >
            <button class="faq-question" @click="toggleFaq(idx)">
              <span>{{ faq.q }}</span>
              <i class="fa-solid fa-chevron-down faq-chevron"></i>
            </button>
            <div class="faq-answer" :style="openFaqIndex === idx ? 'max-height: 250px;' : 'max-height: 0;'">
              <p>{{ faq.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <!-- Col 1: About & Logo -->
          <div class="footer-brand">
            <img src="/assets/logo-dark.svg" alt="Engineering Tracks Logo" class="footer-logo" />
            <p>{{ t('footer_about') }}</p>

            <div class="footer-social-links">
              <a href="https://www.facebook.com/engtracks/" target="_blank" rel="noopener noreferrer" class="footer-social-btn" aria-label="Facebook">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://www.youtube.com/c/EngineeringTracks" target="_blank" rel="noopener noreferrer" class="footer-social-btn" aria-label="YouTube">
                <i class="fa-brands fa-youtube"></i>
              </a>
              <a href="https://twitter.com/engtracks_eg" target="_blank" rel="noopener noreferrer" class="footer-social-btn" aria-label="Twitter">
                <i class="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://www.instagram.com/engtracksksa/" target="_blank" rel="noopener noreferrer" class="footer-social-btn" aria-label="Instagram">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/engineering-tracks/" target="_blank" rel="noopener noreferrer" class="footer-social-btn" aria-label="LinkedIn">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <!-- Col 2: Top Tracks -->
          <div class="footer-col">
            <h4>{{ t('footer_col_tracks') }}</h4>
            <ul class="footer-links">
              <li><a href="#tracks" @click="selectedCategory = 'management'">Project Management (PMP)</a></li>
              <li><a href="#tracks" @click="selectedCategory = 'mechanical'">Maintenance & Reliability (CMRP)</a></li>
              <li><a href="#tracks" @click="selectedCategory = 'safety'">Health & Safety (OSHA)</a></li>
              <li><a href="#tracks" @click="selectedCategory = 'civil'">BIM & Revit Coordination</a></li>
              <li><a href="#tracks" @click="selectedCategory = 'electrical'">Electrical & Power Systems</a></li>
              <li><a href="#tracks" @click="selectedCategory = 'data'">Data Science for Engineers</a></li>
            </ul>
          </div>

          <!-- Col 3: Quick Links -->
          <div class="footer-col">
            <h4>{{ t('footer_col_links') }}</h4>
            <ul class="footer-links">
              <li><a href="https://engineering-tracks.com/our-exams" target="_blank" rel="noopener noreferrer">Our Exams Portal</a></li>
              <li><a href="https://engineering-tracks.com/services-consultancy" target="_blank" rel="noopener noreferrer">Engineering Consultancy</a></li>
              <li><a href="https://engineering-tracks.com/student/login" target="_blank" rel="noopener noreferrer">Student LMS Portal</a></li>
              <li><a href="https://engineeringtracks.edu.sa" target="_blank" rel="noopener noreferrer">Saudi Platform (.edu.sa)</a></li>
              <li><a href="https://engineering-tracks.com/terms" target="_blank" rel="noopener noreferrer">Terms & Conditions</a></li>
              <li><a href="#branches">Contact Regional Branches</a></li>
            </ul>
          </div>

          <!-- Col 4: Newsletter -->
          <div class="footer-col footer-newsletter">
            <h4>{{ t('footer_newsletter_title') }}</h4>
            <p>{{ t('footer_newsletter_desc') }}</p>
            <form class="footer-newsletter-form" @submit.prevent="submitNewsletter">
              <input type="email" v-model="newsletterEmail" class="footer-input" :placeholder="t('newsletter_ph')" required />
              <button type="submit" class="btn btn-primary btn-sm" aria-label="Subscribe">
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </form>

            <div style="margin-top:1.5rem; font-size:0.85rem; line-height:1.6;">
              <div><i class="fa-solid fa-headset" style="color:var(--color-primary); margin-inline-end:6px;"></i> <strong>Direct Helpline:</strong></div>
              <div style="margin-top:2px;"><a href="tel:+201000073779" style="color:#fff;">+20 100 007 3779</a> / <a href="tel:+966545716788" style="color:#fff;">+966 54 571 6788</a></div>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div>&copy; 2026 <strong style="color:#fff;">Engineering Tracks Academy</strong>. All rights reserved.</div>
          <div style="display:flex; gap:1.5rem;">
            <a href="https://engineering-tracks.com/terms" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            <a href="https://engineering-tracks.com/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a>
            <a href="#branches">Egypt · KSA · UAE</a>
          </div>
        </div>
      </div>
    </footer>

    <!-- FLOATING ACTIONS: WHATSAPP & SCROLL TOP -->
    <div class="floating-actions">
      <a href="https://wa.me/201000073779?text=Hello%20Engineering%20Tracks%2C%20I%20would%20like%20to%20inquire%20about%20your%20accredited%20programs." target="_blank" rel="noopener noreferrer" class="whatsapp-float" title="Chat on WhatsApp">
        <i class="fa-brands fa-whatsapp"></i>
      </a>
      <button class="scroll-top-btn" :class="{ visible: showScrollTop }" @click="scrollToTop" title="Back to top">
        <i class="fa-solid fa-chevron-up"></i>
      </button>
    </div>

    <!-- COURSE DETAILS MODAL -->
    <div class="modal-overlay" :class="{ open: !!selectedCourse }" @click.self="selectedCourse = null">
      <div class="modal-content" v-if="selectedCourse">
        <button class="modal-close-btn" @click="selectedCourse = null" aria-label="Close">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <img :src="selectedCourse.image" :alt="currentLang === 'ar' ? selectedCourse.titleAr : selectedCourse.titleEn" class="modal-header-img" />
        <div class="modal-inner">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:1rem; margin-bottom:0.75rem;">
            <div>
              <span class="section-tag" style="font-size:0.75rem; padding:0.2rem 0.6rem;">{{ selectedCourse.track }}</span>
              <h2 style="font-size:1.4rem; font-weight:800; margin-top:0.4rem; line-height:1.3;">
                {{ currentLang === 'ar' ? selectedCourse.titleAr : selectedCourse.titleEn }}
              </h2>
            </div>
            <div style="text-align:right;">
              <span style="font-size:1.6rem; font-weight:800; color:var(--color-primary);">
                {{ currencySymbol }}{{ formatPrice(selectedCourse.prices[currentCurrency]) }}
              </span>
              <span style="display:block; font-size:0.85rem; color:var(--text-light); text-decoration:line-through;">
                {{ currencySymbol }}{{ formatPrice(selectedCourse.oldPrices[currentCurrency]) }}
              </span>
            </div>
          </div>

          <div style="display:flex; gap:1.25rem; margin-bottom:1.25rem; font-size:0.85rem; color:var(--text-muted); flex-wrap:wrap;">
            <span><i class="fa-solid fa-clock" style="color:var(--color-primary);"></i> {{ selectedCourse.hours }}</span>
            <span><i class="fa-solid fa-layer-group" style="color:var(--color-primary);"></i> {{ selectedCourse.lectures }}</span>
            <span><i class="fa-solid fa-star" style="color:var(--color-gold);"></i> {{ selectedCourse.rating }} ({{ selectedCourse.reviewsCount }} reviews)</span>
            <span><i class="fa-solid fa-certificate" style="color:var(--color-accent);"></i> {{ selectedCourse.examCode }}</span>
          </div>

          <p style="font-size:0.95rem; color:var(--text-muted); line-height:1.6; margin-bottom:1.5rem;">
            {{ currentLang === 'ar' ? selectedCourse.snippetAr : selectedCourse.snippetEn }}
          </p>

          <h4 style="font-size:1.05rem; font-weight:700; margin-bottom:0.75rem; color:var(--text-main);">Core Curriculum Modules:</h4>
          <ul style="list-style:none; margin-bottom:1.75rem;">
            <li v-for="(module, mIdx) in selectedCourse.syllabus" :key="mIdx" style="display:flex; align-items:flex-start; gap:0.5rem; margin-bottom:0.5rem; font-size:0.9rem;">
              <i class="fa-solid fa-circle-check" style="color:var(--color-primary); margin-top:4px;"></i>
              <span>{{ module }}</span>
            </li>
          </ul>

          <div style="display:flex; gap:1rem; flex-wrap:wrap; padding-top:1rem; border-top:1px solid var(--border-color);">
            <button class="btn btn-primary btn-lg" style="flex:1;" @click="handleEnroll(selectedCourse)">
              <i class="fa-solid fa-bolt"></i>
              <span>Enroll Now ({{ currencySymbol }}{{ formatPrice(selectedCourse.prices[currentCurrency]) }})</span>
            </button>
            <button class="btn btn-outline btn-lg" @click="triggerToast('Syllabus PDF downloaded successfully! Check your downloads folder.')">
              <i class="fa-solid fa-download"></i>
              <span>Download PDF Syllabus</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- DIAGNOSTIC EXAM MODAL -->
    <div class="modal-overlay" :class="{ open: showExamModal }" @click.self="showExamModal = false">
      <div class="modal-content" style="max-width:750px;">
        <button class="modal-close-btn" @click="showExamModal = false" aria-label="Close">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <div class="modal-inner">
          <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:1rem;">
            <div class="glass-icon" style="width:40px; height:40px; font-size:1.1rem;"><i class="fa-solid fa-desktop"></i></div>
            <div>
              <h3 style="font-size:1.35rem; font-weight:800;">Free Certification Diagnostic Exam</h3>
              <p style="font-size:0.85rem; color:var(--text-muted);">Experience the real exam simulator interface & receive an instant score report</p>
            </div>
          </div>

          <form @submit.prevent="submitExamSimulator" style="display:flex; flex-direction:column; gap:0.85rem;">
            <input type="text" class="lead-input" placeholder="Your Full Name" required />
            <input type="email" class="lead-input" placeholder="Your Email (Exam results will be sent here)" required />
            <select class="lead-input" required>
              <option value="pmp">PMP® Diagnostic Simulator (Project Management)</option>
              <option value="cmrp">CMRP® Diagnostic Simulator (Maintenance & Reliability)</option>
              <option value="osha">OSHA Safety Specialist Simulator</option>
              <option value="revit">Autodesk Revit MEP Skills Assessment</option>
            </select>
            <button type="submit" class="btn btn-accent btn-lg" style="margin-top:0.5rem;">
              <i class="fa-solid fa-play"></i>
              <span>Begin Free Simulator Test Now</span>
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- COUNSELING CONSULTATION MODAL -->
    <div class="modal-overlay" :class="{ open: showConsultModal }" @click.self="showConsultModal = false">
      <div class="modal-content">
        <button class="modal-close-btn" @click="showConsultModal = false" aria-label="Close">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <div class="modal-inner">
          <div style="text-align:center; margin-bottom:1.5rem;">
            <div class="glass-icon" style="margin:0 auto 1rem; width:52px; height:52px; font-size:1.35rem;"><i class="fa-solid fa-user-graduate"></i></div>
            <h3 style="font-size:1.4rem; font-weight:800; margin-bottom:0.35rem;">Schedule 1-on-1 Academic Counseling</h3>
            <p style="font-size:0.88rem; color:var(--text-muted);">Connect with an engineering advisor for personalized course recommendation and roadmap planning.</p>
          </div>

          <form @submit.prevent="submitConsultation" style="display:flex; flex-direction:column; gap:0.85rem;">
            <input type="text" class="lead-input" placeholder="Your Name" required />
            <input type="tel" class="lead-input" placeholder="WhatsApp / Phone Number" required />
            <select class="lead-input" required>
              <option value="" disabled selected>Select Your Current Engineering Background</option>
              <option value="civil">Civil / Structural Engineering</option>
              <option value="mechanical">Mechanical / Mechatronics Engineering</option>
              <option value="electrical">Electrical / Power / Automation</option>
              <option value="architecture">Architecture / BIM / Interior</option>
              <option value="chemical">Chemical / Petroleum / Oil & Gas</option>
              <option value="other">Other Discipline</option>
            </select>
            <textarea class="lead-input" rows="3" placeholder="What are your career goals or certifications you want to achieve?"></textarea>
            <button type="submit" class="btn btn-primary btn-lg" style="margin-top:0.5rem;">
              <i class="fa-regular fa-paper-plane"></i>
              <span>Book My Free Counseling Session</span>
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- FEEDBACK TOAST -->
    <div class="toast-box" :class="{ show: toastVisible }" id="toastBox">
      <i class="fa-solid fa-circle-check" style="color:var(--color-success); font-size:1.1rem;"></i>
      <span>{{ toastMessage }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { TRACKS_DATA } from './data/tracksData.js';
import { COURSES_DATA } from './data/coursesData.js';
import { TRANSLATIONS } from './data/translations.js';

// Application state
const currentLang = ref(localStorage.getItem('et_lang') || 'en');
const currentTheme = ref(localStorage.getItem('et_theme') || 'light');
const currentCurrency = ref(localStorage.getItem('et_curr') || 'SAR');
const selectedCategory = ref('all');
const courseKeyword = ref('');
const courseLevel = ref('all');
const searchQuery = ref('');
const mobileNavOpen = ref(false);
const isScrolled = ref(false);
const showScrollTop = ref(false);
const activeSection = ref('hero');

// Modals & Popups
const selectedCourse = ref(null);
const showExamModal = ref(false);
const showConsultModal = ref(false);

// Toast
const toastMessage = ref('');
const toastVisible = ref(false);

// Simulator
const examTimerSeconds = ref(9858);
const selectedSimOption = ref(null);
const simFeedback = ref(null);

const simOptions = [
  { letter: 'A', text: 'Fast-tracking or crashing the critical path activities while assessing cost and risk trade-offs.' },
  { letter: 'B', text: 'Immediately request extra budget from the project sponsor without schedule compression.' },
  { letter: 'C', text: 'Notify the client that the contractual project handover date must be postponed.' },
  { letter: 'D', text: 'Reduce the quality specifications to speed up installation times.' }
];

// Lead form
const leadForm = ref({ name: '', email: '', phone: '', track: '' });
const newsletterEmail = ref('');
const openFaqIndex = ref(0);

const trackCategories = [
  { key: 'all', label: 'cat_all' },
  { key: 'management', label: 'cat_management' },
  { key: 'mechanical', label: 'cat_mechanical' },
  { key: 'electrical', label: 'cat_electrical' },
  { key: 'civil', label: 'cat_civil' },
  { key: 'safety', label: 'cat_safety' },
  { key: 'data', label: 'cat_data' }
];

const currencySymbolsMap = { USD: '$', SAR: '﷼ ', EGP: 'ج.م ' };
const currencySymbol = computed(() => currencySymbolsMap[currentCurrency.value] || '$');

// Translation helper
const t = (key) => {
  const dict = TRANSLATIONS[currentLang.value] || TRANSLATIONS.en;
  return dict[key] || key;
};

// Filtered tracks
const filteredTracks = computed(() => {
  if (selectedCategory.value === 'all') return TRACKS_DATA;
  return TRACKS_DATA.filter((t) => t.category === selectedCategory.value);
});

// Filtered courses
const filteredCourses = computed(() => {
  const q = courseKeyword.value.toLowerCase().trim();
  const lvl = courseLevel.value;

  return COURSES_DATA.filter((c) => {
    const matchesQ =
      !q ||
      c.titleEn.toLowerCase().includes(q) ||
      c.titleAr.toLowerCase().includes(q) ||
      c.track.toLowerCase().includes(q) ||
      c.examCode.toLowerCase().includes(q) ||
      c.snippetEn.toLowerCase().includes(q);

    const matchesLvl = lvl === 'all' || c.level === lvl;
    return matchesQ && matchesLvl;
  });
});

const faqs = computed(() => [
  {
    q: currentLang.value === 'ar' ? 'هل شهادات إنجنيرينج تراكس معتمدة دولياً؟' : 'Are Engineering Tracks certificates recognized internationally?',
    a: currentLang.value === 'ar'
      ? 'نعم بكل تأكيد. الأكاديمية معتمدة وتتبع برامجنا أعلى المعايير الدولية لمؤسسات PMI (معتمدة لساعات التدريب PDU) و SMRP و OSHA و IAM.'
      : 'Yes, absolutely. Engineering Tracks is an accredited academy. Our project management courses strictly follow PMI standards, our maintenance programs align with SMRP (CMRP), safety with OSHA, and IAM.'
  },
  {
    q: currentLang.value === 'ar' ? 'هل يمكنني حضور الدورات أونلاين من أي دولة؟' : 'Can I attend courses online if I live outside Egypt and Saudi Arabia?',
    a: currentLang.value === 'ar'
      ? 'نعم! ينضم إلينا أكثر من 60% من المتدربين من السعودية والإمارات وقطر والكويت وعمان عبر منصات البث التفاعلي مع وصول 24/7 للمحتوى.'
      : 'Yes! Over 60% of our active trainees join from Saudi Arabia, UAE, Qatar, Kuwait, Oman, and across the globe via live webinars and 24/7 cloud LMS.'
  },
  {
    q: currentLang.value === 'ar' ? 'كيف يعمل محاكي الاختبارات؟' : 'How does the Exam Simulator work?',
    a: currentLang.value === 'ar'
      ? 'يحصل كل متدرب على حساب في محاكي الاختبارات التفاعلي للتدريب على أسئلة مطابقة للاختبار الحقيقي مع تحليل مواطن الضعف وشرح الإجابات.'
      : 'Every trainee receives credentials to our proprietary exam simulation portal with timed full-length exams, analytics, and situational explanations.'
  },
  {
    q: currentLang.value === 'ar' ? 'ما هي طرق الدفع وخيارات التقسيط المتاحة؟' : 'What payment methods and installments are accepted?',
    a: currentLang.value === 'ar'
      ? 'نقبل فيزا وماستركارد ومدى (السعودية) وفوري وإنستاباي (مصر) وآبل باي، مع خطط تقسيط ميسرة.'
      : 'We accept Visa, MasterCard, Mada (Saudi Arabia), Fawry / InstaPay (Egypt), Apple Pay, and flexible installment plans.'
  }
]);

const formattedTimer = computed(() => {
  const h = Math.floor(examTimerSeconds.value / 3600);
  const m = Math.floor((examTimerSeconds.value % 3600) / 60);
  const s = examTimerSeconds.value % 60;
  const pad = (n) => (n < 10 ? '0' + n : n);
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
});

const formatPrice = (val) => (val ? val.toLocaleString() : '0');

// Theme & Lang Sync
watch(currentTheme, (newTheme) => {
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('et_theme', newTheme);
}, { immediate: true });

watch(currentLang, (newLang) => {
  document.documentElement.setAttribute('lang', newLang);
  document.documentElement.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
  localStorage.setItem('et_lang', newLang);
}, { immediate: true });

watch(currentCurrency, (newCurr) => {
  localStorage.setItem('et_curr', newCurr);
});

watch(mobileNavOpen, (isOpen) => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }
});

// Handlers
const toggleTheme = () => {
  currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light';
};

const toggleLanguage = () => {
  currentLang.value = currentLang.value === 'en' ? 'ar' : 'en';
};

const closeMobileNav = () => {
  mobileNavOpen.value = false;
};

const handleHeroSearch = () => {
  if (!searchQuery.value) return;
  courseKeyword.value = searchQuery.value;
  const el = document.getElementById('courses');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const handleTrackSelect = (track) => {
  courseKeyword.value = track.certs[0] || track.titleEn;
  const el = document.getElementById('courses');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const openCourseDetails = (course) => {
  selectedCourse.value = course;
};

const handleEnroll = (course) => {
  selectedCourse.value = null;
  showConsultModal.value = true;
  triggerToast(`Enrollment initiated for: ${currentLang.value === 'ar' ? course.titleAr : course.titleEn}`);
};

const selectSimOption = (optIdx) => {
  selectedSimOption.value = optIdx;
  simFeedback.value = null;
};

const checkSimAnswer = () => {
  if (selectedSimOption.value === null) {
    triggerToast('Please select an option first!');
    return;
  }
  if (selectedSimOption.value === 1) {
    simFeedback.value = {
      style: 'background:rgba(16, 185, 129, 0.15); border:1px solid #10B981; color:#34D399;',
      content: '<strong><i class="fa-solid fa-circle-check"></i> Correct! Above Target Rationale:</strong><br>According to the PMBOK® Guide & PMI ECO, when facing a critical path delay, evaluate schedule compression (Crashing or Fast-tracking) before requesting budget or deadline extensions.'
    };
  } else {
    simFeedback.value = {
      style: 'background:rgba(228, 5, 5, 0.15); border:1px solid #E40505; color:#F87171;',
      content: '<strong><i class="fa-solid fa-triangle-exclamation"></i> Incorrect:</strong><br>Option A is the correct answer. The PM should never immediately delay contractual deadlines without analyzing schedule compression options.'
    };
  }
};

const toggleFaq = (idx) => {
  openFaqIndex.value = openFaqIndex.value === idx ? -1 : idx;
};

const submitLeadForm = () => {
  triggerToast(`Thank you Eng. ${leadForm.value.name}! Your syllabus request and roadmap have been submitted.`);
  leadForm.value = { name: '', email: '', phone: '', track: '' };
};

const submitExamSimulator = () => {
  showExamModal.value = false;
  triggerToast('Diagnostic exam activated! Redirecting to simulation test workspace...');
  const sim = document.getElementById('simulator');
  if (sim) sim.scrollIntoView({ behavior: 'smooth' });
};

const submitConsultation = () => {
  showConsultModal.value = false;
  triggerToast('Your 1-on-1 counseling session is booked! An engineering director will reach out via WhatsApp.');
};

const submitNewsletter = () => {
  triggerToast('Subscribed! Welcome to the Engineering Tracks knowledge network.');
  newsletterEmail.value = '';
};

const triggerToast = (msg) => {
  toastMessage.value = msg;
  toastVisible.value = true;
  setTimeout(() => {
    toastVisible.value = false;
  }, 4500);
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Lifecycle hooks
let timerInterval = null;

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
  showScrollTop.value = window.scrollY > 400;

  const sections = ['hero', 'tracks', 'courses', 'simulator', 'why-us', 'branches'];
  for (const s of sections) {
    const el = document.getElementById(s);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= 140 && rect.bottom >= 140) {
        activeSection.value = s;
        break;
      }
    }
  }
};

const handleKeyDown = (e) => {
  if (e.key === 'Escape') {
    selectedCourse.value = null;
    showExamModal.value = false;
    showConsultModal.value = false;
    mobileNavOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  document.addEventListener('keydown', handleKeyDown);

  timerInterval = setInterval(() => {
    if (examTimerSeconds.value > 0) examTimerSeconds.value--;
  }, 1000);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  document.removeEventListener('keydown', handleKeyDown);
  if (timerInterval) clearInterval(timerInterval);
});
</script>
