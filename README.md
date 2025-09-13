# AI Photo Editor 📸✨

An intuitive, web-based photo editing application that leverages the power of Google's Gemini AI to transform your images based on simple text prompts. Upload a photo, describe your desired changes, and watch the AI bring your vision to life in seconds.

![AI Photo Editor Screenshot](https://storage.googleapis.com/aistudio-hosting/project-images/screenshot.png)

## 🚀 Features

-   **Seamless Image Upload**: Easily upload images via a file selector or a simple drag-and-drop interface.
-   **AI-Powered Editing**: Utilizes the `gemini-2.5-flash-image-preview` model (Nano Banana) for powerful, context-aware image modifications.
-   **Text-Based Prompts**: Describe edits in natural language, from "make the sky a vibrant sunset" to "add a futuristic car".
-   **Side-by-Side Comparison**: Instantly compare the original image with the AI-generated result.
-   **Download Your Creation**: Save your edited image directly to your device with a single click.
-   **Responsive Design**: A clean, modern UI that works beautifully on both desktop and mobile devices.
-   **Intuitive UX**: Clear loading states, error handling, and a straightforward workflow make the app easy and enjoyable to use.

## 🛠️ Tech Stack

-   **Frontend**: [React](https://reactjs.org/) & [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **AI Model**: [Google Gemini API](https://ai.google.dev/) (`@google/genai`)

## ⚙️ Getting Started

Follow these instructions to get a local copy of the project up and running.

### Prerequisites

-   Node.js (v18 or later)
-   npm, yarn, or pnpm
-   A Google Gemini API Key. You can get one from [Google AI Studio](https://aistudio.google.com/app/apikey).

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/ai-photo-editor.git
    cd ai-photo-editor
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a file named `.env` in the root of your project and add your Google Gemini API key:
    ```
    API_KEY=YOUR_GEMINI_API_KEY
    ```
    > **Note:** The application is configured to load this key via `process.env.API_KEY`.

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) (or the port specified in your console) to view the application in your browser.

##  usage How to Use

1.  **Upload an Image**: Click the upload area or drag and drop a JPG, PNG, or GIF file.
2.  **Write a Prompt**: In the "Your Edit Prompt" text area, describe the changes you want to make. Be as descriptive as you like!
    -   *Example: "Change the background to a snowy mountain landscape."*
    -   *Example: "Add a pair of sunglasses on the cat."*
    -   *Example: "Turn the photo into a watercolor painting."*
3.  **Apply the Edit**: Click the "Apply Edit" button and wait for the AI to process your request.
4.  **View & Download**: Your edited image will appear on the right. If you're happy with the result, click the "Download" button to save it.
5.  **Start Over**: Click "Start Over" at any time to clear the images and begin with a new one.

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improving the app, please feel free to fork the repository and create a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.