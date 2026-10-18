REALTORS 888 — Static Website Package (WhatsApp enquiry update)
===============================================================

WHAT IS INCLUDED
- Static HTML pages at the root of this folder
- assets/css/style.css
- assets/js/config.js (set the WhatsApp Business number here)
- assets/js/main.js (navigation, enquiry form and WhatsApp link behaviour)
- assets/images/ (existing locally bundled SVG artwork)

IMPORTANT: SET THE WHATSAPP NUMBER BEFORE DEPLOYMENT
1. Open assets/js/config.js.
2. Replace 91XXXXXXXXXX with the approved WhatsApp Business number.
3. Use country code + number only, digits only (no +, spaces or dashes).
   Example format for India: 919876543210
4. Do not use the example number above as the real business number.
5. Test the contact form from the live site on mobile and desktop.

HOW THE FORM WORKS
- The visitor completes the contact form.
- The site opens WhatsApp/WhatsApp Web with a pre-filled enquiry.
- The visitor must press Send for the enquiry to reach REALTORS 888.
- This static version does not save submissions to a database and does not send
  WhatsApp messages automatically in the background.
- If automatic delivery or a lead dashboard is required later, use a backend
  and the official WhatsApp Business Platform or a suitable form/CRM service.

DEPLOYMENT
- Keep index.html in the root of the deployed project.
- Preserve the assets/ folder structure.
- Vercel can host this as a static site. No build command is required for plain HTML.
- If using GitHub + Vercel, commit the complete extracted folder contents.

IMAGES
- Existing SVG artwork is included locally so the package works without a backend.
- Vecteezy images may require a licence, attribution, or an account depending on
  the asset and usage. Do not copy premium images without confirming the licence.
  Replace artwork only with images the business has permission to use.
- Confirm contact details, legal business name, privacy policy and terms before launch.

TEST CHECKLIST
[ ] Replace WhatsApp number in assets/js/config.js
[ ] Submit a test enquiry and verify correct pre-filled details
[ ] Press Send and confirm the message arrives in WhatsApp Business
[ ] Test all WhatsApp buttons and mobile navigation
[ ] Review all placeholders and legal pages before publishing
