
# 📲 WhatsApp API (Node.js + whatsapp-web.js)

Simple project to create an HTTP API for sending WhatsApp messages using [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js).  
Perfect for personal automations, bots, or integrations with your existing systems.

---

## 🚀 Features

- Send WhatsApp messages via HTTP POST request
- Built with Express.js
- QR Code authentication
- Modular and clean folder structure

---

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/HendroPrabowo/whatsapp_service.git
   cd whatsapp_service
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. Wait for the QR code to appear in the terminal.

5. Open WhatsApp on your phone → go to **Linked Devices** → scan the QR code.

6. After login, the API service will be ready at `http://localhost:3000`.

---

## 📬 API Endpoint

### `POST /send-message`

Send a WhatsApp message to a specific number.

- **URL:** `http://localhost:3000/send-message`
- **Method:** `POST`
- **Headers:** `Content-Type: application/json`
- **Body Parameters:**
    - `number`: WhatsApp number in international format (e.g., `6281234567890`)
    - `message`: The message you want to send

### ✅ Example CURL

```bash
curl --location 'http://localhost:3000/send-message' \
--header 'Content-Type: application/json' \
--data '{
    "number": "628xxxxxxxxx",
    "message": "Hello from API!"
}'
```

---

## ⚠️ Notes

- **First-time login required.** You must scan the QR code manually.
- The recipient number **must be active on WhatsApp** and preferably has messaged your account before.
- This project uses an **unofficial API** (web automation), so use with caution and avoid spamming.

---

## 🛠 Tech Stack

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js)
- [qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal)
- [sqllite](https://www.sqlite.org/)

---

## 📂 Project Structure

```
whatsapp_service
├── config
│   ├── config.js
│   ├── logger.js
│   ├── sequelize.js
│   └── whatsapp_client.js
├── controller
│   └── controller.js
├── index.js
├── model
│   └── message.js
├── package.json
├── package-lock.json
├── README.md
├── repository
│   └── message.js
├── route
│   └── route.js
├── service
│   └── whatsapp_service.js
└── sqlite
    └── db.sqlite
```

---
