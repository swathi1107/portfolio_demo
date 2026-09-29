# Portfolio Media & Assets Directory (`/public/assets/`)

Place your personal photos, project screenshots, certificate scans, and resume PDF in this folder (`/public/assets/`). Any file placed here is served directly at `/assets/<filename>`.

## 1. Personal Photos
- `profile.jpg` — Main portrait displayed in the Hero section (recommended aspect ratio: `3:4` or `1:1`).
- `about.jpg` — Secondary photo displayed in the About Me section.

## 2. Project Screenshots
- `project-hospital.png` — Screenshot for **Hospital Management System**
- `project-vehicle.png` — Screenshot for **Virtual Smart Vehicle Speed Monitoring System**
- `project-assistant.png` — Screenshot for **Mini Personal Assistant**
- `project-rag.png` — Screenshot/diagram for **RAG-Based Waste & Environmental Analysis System**

## 3. Course & Technical Certificates
After placing your actual certificate image files below, open `src/data/portfolioData.ts` and set `isUploaded: true` on the corresponding certificate entry to display the image automatically:
- `certificate-python.jpg` — Python Programming (Coursera)
- `certificate-java.jpg` — Java Programming (Coursera)
- `certificate-dsa.jpg` — Data Structures & Algorithms (Coursera)
- `certificate-dbms.jpg` — Database Management Systems (Coursera)
- `certificate-os.jpg` — Operating Systems (Coursera)
- `certificate-ada.jpg` — Analysis and Design of Algorithms (Coursera)
- `certificate-c.jpg` — C Programming (HackerRank, optional)

## 4. Experience & Beyond the Classroom Photos
After placing these images, set `isUploaded: true` on the respective item in `src/data/portfolioData.ts`:
- `internship.jpg` — Manipal Technologies Limited internship photo
- `hackathon.jpg` — Smart India Hackathon / coding activity photo
- `conference.jpg` — 3-Day Conference (Water Security / Sustainability / Disaster Risk Reduction) photo

## 5. Resume PDF
- `Swathi_Resume.pdf` (or `resume.pdf`) — Your official PDF resume. Once placed in `/public/assets/Swathi_Resume.pdf`, clicking **Download Resume** anywhere on the website will immediately download the PDF file.
