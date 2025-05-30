// Load header
function loadHeader() {
  const headerContainer = document.getElementById("header-container");
  const headerContent = `
        <header>
            <a href="./" class="logo">${websiteContent.header.logo}</a>
            <nav class="desktop-nav">
                <ul>
                    ${websiteContent.header.navigation
                      .map(
                        (item) => `
                        <li><a href="${item.url}" class="nav-link" ${
                          item.url.includes("#combat-briefing")
                            ? 'data-scroll="true"'
                            : ""
                        }>${item.name}</a></li>
                    `
                      )
                      .join("")}
                </ul>
            </nav>
            <button class="mobile-menu-toggle" aria-label="Toggle mobile menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </button>
        </header>
        <nav class="mobile-nav">
            <ul>
                ${websiteContent.header.navigation
                  .map(
                    (item) => `
                    <li><a href="${item.url}" class="nav-link" ${
                      item.url.includes("#combat-briefing")
                        ? 'data-scroll="true"'
                        : ""
                    }>${item.name}</a></li>
                `
                  )
                  .join("")}
            </ul>
        </nav>
    `;
  headerContainer.innerHTML = headerContent;

  // Mobile menu functionality
  const menuToggle = document.querySelector(".mobile-menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  const body = document.body;

  function closeMobileMenu() {
    menuToggle.classList.remove("active");
    mobileNav.classList.remove("active");
    body.classList.remove("menu-open");
  }

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    mobileNav.classList.toggle("active");
    body.classList.toggle("menu-open");
  });

  // Handle navigation links
  const navLinks = document.querySelectorAll('.nav-link[data-scroll="true"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");

      // Check if we're on the index page and the link is for combat-briefing
      if (
        href.includes("#combat-briefing") &&
        (window.location.pathname.endsWith("/") ||
          window.location.pathname === "" ||
          window.location.pathname.endsWith("./"))
      ) {
        e.preventDefault();
        const targetElement = document.getElementById("combat-briefing");

        if (targetElement) {
          // Close mobile menu if open
          closeMobileMenu();

          // Smooth scroll to target
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      } else if (href.includes("#combat-briefing")) {
        // If we're not on the index page, just close the mobile menu
        // and let the default navigation happen
        closeMobileMenu();
      }
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (
      !mobileNav.contains(e.target) &&
      !menuToggle.contains(e.target) &&
      mobileNav.classList.contains("active")
    ) {
      closeMobileMenu();
    }
  });

  // Close mobile menu when window is resized to desktop size
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768 && mobileNav.classList.contains("active")) {
      closeMobileMenu();
    }
  });

  // Handle hash in URL on page load
  window.addEventListener("load", () => {
    if (window.location.hash) {
      const targetElement = document.querySelector(window.location.hash);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    }
  });
}

// Load footer
function loadFooter() {
  const footerContainer = document.getElementById("footer-container");
  const footerContent = `
        <footer>
            <div class="footer-content">
                <div class="contact-info">
                    <h3>Command Center</h3>
                    <a href="mailto:${websiteContent.footer.contact.email}">
                        <span class="icon">✉️</span> ${
                          websiteContent.footer.contact.email
                        }
                    </a>
                    <p><span class="icon">📍</span> ${
                      websiteContent.footer.contact.address
                    }</p>
                    <p><span class="icon">📞</span> ${
                      websiteContent.footer.contact.phone
                    }</p>
                </div>

                <div class="footer-links">
                    <h3>Mission Documents</h3>
                    ${websiteContent.footer.links
                      .map(
                        (link) => `
                        <a href="${link.url}">${link.name}</a>
                    `
                      )
                      .join("")}
                </div>
            </div>
            <div class="footer-bottom">
                <p>${websiteContent.footer.copyright}</p>
            </div>
        </footer>
    `;
  footerContainer.innerHTML = footerContent;
}

// Load home page content
function loadHomePageContent() {
  if (
    window.location.pathname === "/" ||
    window.location.pathname === "" ||
    window.location.pathname.endsWith("/")
  ) {
    // Operation Kickoff section
    const kickoffSection = document.getElementById("operation-kickoff");
    kickoffSection.innerHTML = `
            <h1>${websiteContent.homePage.operationKickoff.title}</h1>
            <p>${websiteContent.homePage.operationKickoff.description}</p>
            <ul class="features-list">
                ${websiteContent.homePage.operationKickoff.features
                  .map((feature) => `<li>${feature}</li>`)
                  .join("")}
            </ul>
        `;

    // Mission Intel section
    const intelSection = document.getElementById("mission-intel");
    intelSection.innerHTML = `
            <h2>${websiteContent.homePage.missionIntel.title}</h2>
            <p>${websiteContent.homePage.missionIntel.description}</p>
            <div class="game-modes">
                ${websiteContent.homePage.missionIntel.gameModes
                  .map(
                    (mode) => `
                    <div class="game-mode">
                        <h3>${mode.name}</h3>
                        <p>${mode.description}</p>
                    </div>
                `
                  )
                  .join("")}
            </div>
        `;

    // Arsenal Briefing section
    const arsenalSection = document.getElementById("arsenal-briefing");
    arsenalSection.innerHTML = `
            <h2>${websiteContent.homePage.arsenalBriefing.title}</h2>
            <p>${websiteContent.homePage.arsenalBriefing.description}</p>
            <div class="weapon-categories">
                ${websiteContent.homePage.arsenalBriefing.weaponCategories
                  .map(
                    (category) => `
                    <div class="weapon-category">
                        <h3>${category.name}</h3>
                        <ul>
                            ${category.items
                              .map((item) => `<li>${item}</li>`)
                              .join("")}
                        </ul>
                    </div>
                `
                  )
                  .join("")}
            </div>
        `;

    // Recon Gallery section
    const gallerySection = document.getElementById("recon-gallery");
    gallerySection.innerHTML = `
            <h2>${websiteContent.homePage.reconGallery.title}</h2>
            <div class="gallery">
                ${websiteContent.homePage.reconGallery.images
                  .map(
                    (image) => `
                    <div class="gallery-item">
                        <img src="${image.url}" alt="${image.caption}">
                        <p>${image.caption}</p>
                    </div>
                `
                  )
                  .join("")}
            </div>
        `;

    // Debriefing Room section
    const debriefingSection = document.getElementById("debriefing-room");
    debriefingSection.innerHTML = `
            <h2>${websiteContent.homePage.debriefingRoom.title}</h2>
            <div class="reviews">
                ${websiteContent.homePage.debriefingRoom.reviews
                  .map(
                    (review) => `
                    <div class="review">
                        <p>${review.text}</p>
                        <div class="review-meta">
                            <p class="author">- ${review.author}</p>
                            <div class="rating">
                                ${"★".repeat(review.rating)}${"☆".repeat(
                      5 - review.rating
                    )}
                            </div>
                        </div>
                    </div>
                `
                  )
                  .join("")}
            </div>
        `;

    // Replace Final Transmission section with Combat Briefing section
    const combatSection = document.getElementById("combat-briefing");
    combatSection.innerHTML = `
        <h2>${websiteContent.homePage.combatBriefing.title}</h2>
        <p class="subtitle">${
          websiteContent.homePage.combatBriefing.subtitle
        }</p>
        <div class="briefing-grid">
            ${websiteContent.homePage.combatBriefing.sections
              .map(
                (section) => `
                <div class="briefing-card">
                    <h3>${section.title}</h3>
                    <p>${section.content}</p>
                </div>
            `
              )
              .join("")}
        </div>
    `;

    // Animate briefing cards
    const briefingCards = document.querySelectorAll(".briefing-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    briefingCards.forEach((card) => observer.observe(card));

    // Development Team section
    const teamSection = document.getElementById("development-team");
    teamSection.innerHTML = `
            <h2>${websiteContent.homePage.developmentTeam.title}</h2>
            <p>${websiteContent.homePage.developmentTeam.description}</p>
            <div class="team-members">
                ${websiteContent.homePage.developmentTeam.team
                  .map(
                    (member) => `
                    <div class="team-member">
                        <h3>${member.role}</h3>
                        <p>${member.description}</p>
                    </div>
                `
                  )
                  .join("")}
            </div>
        `;

    // FAQ section
    const faqSection = document.getElementById("faq");
    faqSection.innerHTML = `
            <h2>${websiteContent.homePage.faq.title}</h2>
            <div class="faq-list">
                ${websiteContent.homePage.faq.questions
                  .map(
                    (item) => `
                    <div class="faq-item">
                        <h3>${item.question}</h3>
                        <p>${item.answer}</p>
                    </div>
                `
                  )
                  .join("")}
            </div>
        `;
  }
}

// Load Battle Reports content
function loadBattleReportsContent() {
  if (window.location.pathname.endsWith("battle-reports.html")) {
    // Tactical Updates section
    const tacticalSection = document.getElementById("tactical-updates");
    tacticalSection.innerHTML = `
      <div class="tactical-header">
        <h1>${websiteContent.battleReports.tacticalUpdates.title}</h1>
        <p>${websiteContent.battleReports.tacticalUpdates.subtitle}</p>
      </div>
      <div class="updates-list">
        ${websiteContent.battleReports.tacticalUpdates.updates
          .map(
            (update) => `
          <div class="update-item">
            <div class="update-version">${update.version}</div>
            <div class="update-date">${update.date}</div>
            <div class="update-description">${update.description}</div>
          </div>
        `
          )
          .join("")}
      </div>
    `;

    // Combat Logs section
    const logsSection = document.getElementById("combat-logs");
    logsSection.innerHTML = `
      <div class="logs-header">
        <h2>${websiteContent.battleReports.combatLogs.title}</h2>
        <p>${websiteContent.battleReports.combatLogs.subtitle}</p>
      </div>
      <div class="combat-logs">
        ${websiteContent.battleReports.combatLogs.reports
          .map(
            (report) => `
          <div class="log-card">
            <img src="${report.image}" alt="${report.title}" class="log-image">
            <div class="log-content">
              <h3 class="log-title">${report.title}</h3>
              <div class="log-meta">
                <span>${report.date}</span>
                <span>${report.location}</span>
                <span class="log-type">${report.type}</span>
              </div>
              <p class="log-description">${report.description}</p>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    `;

    // Add scroll animations for update items
    const updateItems = document.querySelectorAll(".update-item");
    const logCards = document.querySelectorAll(".log-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    updateItems.forEach((item) => observer.observe(item));
    logCards.forEach((card) => observer.observe(card));
  }
}

// Load Contact Page content
function loadContactPageContent() {
  if (window.location.pathname.endsWith("call-for-backup.html")) {
    const contactSection = document.querySelector(".contact-content");
    contactSection.innerHTML = `
      <div class="contact-header section">
        <h1>${websiteContent.contactPage.title}</h1>
        <p>${websiteContent.contactPage.subtitle}</p>
      </div>

      <div class="contact-grid">
        <div class="contact-form-container section">
          <h2>${websiteContent.contactPage.form.title}</h2>
          <form id="contact-form" class="contact-form">
            <div class="form-group">
              <label for="name">${
                websiteContent.contactPage.form.fields.name.label
              }</label>
              <input type="text" id="name" name="name" required 
                placeholder="${
                  websiteContent.contactPage.form.fields.name.placeholder
                }">
            </div>
            <div class="form-group">
              <label for="email">${
                websiteContent.contactPage.form.fields.email.label
              }</label>
              <input type="email" id="email" name="email" required 
                placeholder="${
                  websiteContent.contactPage.form.fields.email.placeholder
                }">
            </div>
            <div class="form-group">
              <label for="message">${
                websiteContent.contactPage.form.fields.message.label
              }</label>
              <textarea id="message" name="message" required 
                placeholder="${
                  websiteContent.contactPage.form.fields.message.placeholder
                }"></textarea>
            </div>
            <button type="submit" class="submit-btn">${
              websiteContent.contactPage.form.submitButton
            }</button>
          </form>
          <div id="success-message" class="success-message" style="display: none;">
            ${websiteContent.contactPage.form.successMessage}
          </div>
        </div>

        <div class="contact-info-container section">
          <h2>${websiteContent.contactPage.contactInfo.title}</h2>
          <div class="contact-info">
            <div class="info-item">
              <span class="icon">📍</span>
              <div class="info-content">
                <h3>${websiteContent.contactPage.contactInfo.address.label}</h3>
                <p>${websiteContent.contactPage.contactInfo.address.value}</p>
              </div>
            </div>
            <div class="info-item">
              <span class="icon">📞</span>
              <div class="info-content">
                <h3>${websiteContent.contactPage.contactInfo.phone.label}</h3>
                <a href="tel:${websiteContent.contactPage.contactInfo.phone.value.replace(
                  /\s/g,
                  ""
                )}">${websiteContent.contactPage.contactInfo.phone.value}</a>
              </div>
            </div>
            <div class="info-item">
              <span class="icon">✉️</span>
              <div class="info-content">
                <h3>${websiteContent.contactPage.contactInfo.email.label}</h3>
                <a href="mailto:${
                  websiteContent.contactPage.contactInfo.email.value
                }">${websiteContent.contactPage.contactInfo.email.value}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="map-container section">
        <h2>${websiteContent.contactPage.map.title}</h2>
        <div class="map-wrapper">
          <iframe
            src="${websiteContent.contactPage.map.url}"
            width="100%"
            height="300"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    `;

    // Handle form submission
    const contactForm = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");

    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Simulate form submission (replace with actual API call)
      setTimeout(() => {
        try {
          contactForm.style.display = "none";
          successMessage.style.display = "block";
        } catch (error) {
          alert(websiteContent.contactPage.form.errorMessage);
        }
      }, 1000);
    });
  }
}

// Load Terms of Engagement content
function loadTermsContent() {
  if (window.location.pathname.endsWith("terms-of-engagement.html")) {
    const termsSection = document.querySelector(".terms-content");
    termsSection.innerHTML = `
      <div class="terms-header section">
        <h1>${websiteContent.termsPage.title}</h1>
        <p>${websiteContent.termsPage.subtitle}</p>
      </div>

      <div class="terms-sections">
        ${websiteContent.termsPage.sections
          .map(
            (section) => `
          <div class="terms-section section">
            <h2>${section.title}</h2>
            <p>${section.content}</p>
          </div>
        `
          )
          .join("")}
      </div>
    `;
  }
}

// Load Cookie Policy content
function loadCookiePolicyContent() {
  if (window.location.pathname.endsWith("data-protocol.html")) {
    const cookiePolicySection = document.querySelector(
      ".cookie-policy-content"
    );
    cookiePolicySection.innerHTML = `
      <div class="cookie-policy-header section">
        <h1>${websiteContent.cookiePolicyPage.title}</h1>
        <p>${websiteContent.cookiePolicyPage.subtitle}</p>
      </div>

      <div class="cookie-policy-sections">
        ${websiteContent.cookiePolicyPage.sections
          .map(
            (section) => `
          <div class="cookie-policy-section section">
            <h2>${section.title}</h2>
            ${
              section.subsections
                ? `
              <div class="subsections">
                ${section.subsections
                  .map(
                    (subsection) => `
                  <div class="subsection">
                    <h3>${subsection.title}</h3>
                    <p>${subsection.content}</p>
                  </div>
                `
                  )
                  .join("")}
              </div>
            `
                : `
              <p>${section.content}</p>
            `
            }
          </div>
        `
          )
          .join("")}
      </div>
    `;
  }
}

// Load Privacy Policy content
function loadPrivacyPolicyContent() {
  if (window.location.pathname.endsWith("command-rules.html")) {
    const privacyPolicySection = document.querySelector(
      ".privacy-policy-content"
    );
    privacyPolicySection.innerHTML = `
      <div class="privacy-policy-header section">
        <h1>${websiteContent.privacyPolicyPage.title}</h1>
        <p>${websiteContent.privacyPolicyPage.subtitle}</p>
      </div>

      <div class="privacy-policy-sections">
        ${websiteContent.privacyPolicyPage.sections
          .map(
            (section) => `
          <div class="privacy-policy-section section">
            <h2>${section.title}</h2>
            ${
              section.subsections
                ? `
              <div class="subsections">
                ${section.subsections
                  .map(
                    (subsection) => `
                  <div class="subsection">
                    <h3>${subsection.title}</h3>
                    <p>${subsection.content}</p>
                  </div>
                `
                  )
                  .join("")}
              </div>
            `
                : `
              <p>${section.content}</p>
            `
            }
          </div>
        `
          )
          .join("")}
      </div>
    `;
  }
}

// Scroll animation observer
function handleScrollAnimation() {
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
}

// Initialize all dynamic content
document.addEventListener("DOMContentLoaded", () => {
  loadHeader();
  loadFooter();
  loadHomePageContent();
  loadBattleReportsContent();
  loadContactPageContent();
  loadTermsContent();
  loadCookiePolicyContent();
  loadPrivacyPolicyContent();
  handleScrollAnimation();
});

document
  .getElementById("PrefixBarAccept")
  .addEventListener("click", function () {
    const cookieBar = document.querySelector(".PrefixBar-container");
    if (cookieBar) {
      cookieBar.style.opacity = "0";
      cookieBar.style.transform = "translateY(20px)";
      setTimeout(() => cookieBar.remove(), 300);
    }
  });
