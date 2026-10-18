/* REALTORS 888 — static site interactions and WhatsApp enquiry flow */
(function () {
  "use strict";

  const config = window.REALTORS888_CONFIG || {};
  const businessNumber = String(config.whatsappNumber || "").replace(/\D/g, "");
  const validNumber = businessNumber.length >= 10 && !businessNumber.includes("X");

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("is-open", !expanded);
    });
  }

  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  function makeWhatsAppUrl(message) {
    return "https://wa.me/" + businessNumber + "?text=" + encodeURIComponent(message || "");
  }

  // All WhatsApp buttons use the number configured once in assets/js/config.js.
  document.querySelectorAll("[data-whatsapp-link]").forEach(function (link) {
    if (validNumber) {
      link.href = makeWhatsAppUrl(link.getAttribute("data-whatsapp-message") || "Hello REALTORS 888, I would like to enquire about your services.");
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    } else {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        alert("The REALTORS 888 WhatsApp Business number has not been configured yet. Please contact the website administrator.");
      });
    }
  });

  const form = document.querySelector("[data-whatsapp-form]");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const status = form.querySelector(".form-status");
      if (!validNumber) {
        if (status) {
          status.textContent = "The website administrator must add the approved WhatsApp Business number in assets/js/config.js before enquiries can be sent.";
          status.classList.add("is-visible");
        }
        return;
      }

      const value = function (name) {
        const field = form.elements.namedItem(name);
        return field ? String(field.value || "").trim() : "";
      };

      const message = [
        "NEW WEBSITE ENQUIRY — REALTORS 888",
        "",
        "Name: " + value("name"),
        "Customer phone: " + value("phone"),
        "Service required: " + value("service"),
        "Property location: " + value("location"),
        "Indicative budget: " + (value("budget") || "Not specified"),
        "Preferred contact: " + (value("contact-method") || "Not specified"),
        "",
        "Requirement:",
        value("message")
      ].join("\n");

      if (status) {
        status.textContent = "Opening WhatsApp with your enquiry. Please review the message and press Send to contact REALTORS 888.";
        status.classList.add("is-visible");
      }
      const url = makeWhatsAppUrl(message);
      const opened = window.open(url, "_blank", "noopener,noreferrer");
      if (!opened) {
        window.location.href = url;
      }
    });
  }
})();