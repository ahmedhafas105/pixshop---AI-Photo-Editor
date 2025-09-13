
import React, { useState, useCallback } from 'react';
import { ImageUploader } from './components/ImageUploader';
import { ImageViewer } from './components/ImageViewer';
import { Button } from './components/Button';
import { LoadingOverlay } from './components/LoadingOverlay';
import { Header } from './components/Header';
import { StartOverIcon, EditIcon, DownloadIcon } from './components/Icons';
import { editImage } from './services/geminiService';
import { fileToBase64 } from './utils/fileUtils';

type EditedResult = {
  imageBase64: string | null;
  text: string | null;
};

export default function App() {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [originalImageMimeType, setOriginalImageMimeType] = useState<string | null>(null);
  const [editedResult, setEditedResult] = useState<EditedResult | null>(null);
  const [prompt, setPrompt] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [loadingMessage, setLoadingMessage] = useState<string>('Conjuring pixels...');

  const handleImageUpload = useCallback(async (file: File) => {
    handleReset();
    try {
      const base64 = await fileToBase64(file);
      setOriginalImage(base64);
      setOriginalImageMimeType(file.type);
    } catch (err) {
      setError('Failed to load image. Please try another file.');
    }
  }, []);

  const handleEdit = useCallback(async () => {
    if (!originalImage || !prompt || !originalImageMimeType) {
      setError('Please upload an image and enter a prompt.');
      return;
    }
    setIsLoading(true);
    setEditedResult(null);
    setError(null);
    setLoadingMessage('Editing your image with AI...');

    try {
      const result = await editImage(originalImage, originalImageMimeType, prompt);
      if (!result.imageBase64 && !result.text) {
        setError("The AI couldn't edit the image. Please try a different prompt.");
      } else {
        setEditedResult(result);
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred while editing the image. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [originalImage, prompt, originalImageMimeType]);

  const handleReset = () => {
    setOriginalImage(null);
    setOriginalImageMimeType(null);
    setEditedResult(null);
    setPrompt('');
    setIsLoading(false);
    setError(null);
  };

  const getFileName = (extension: string) => {
    const promptPart = prompt.substring(0, 20).replace(/\s+/g, '_') || 'edited';
    return `ai_edited_${promptPart}.${extension}`;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col p-4 md:p-8">
      <Header onReset={handleReset} />
      
      {!originalImage && <ImageUploader onImageUpload={handleImageUpload} />}

      {originalImage && (
        <main className="flex-grow flex flex-col lg:flex-row gap-8 mt-8">
          {/* Control Panel */}
          <div className="w-full lg:w-1/3 xl:w-1/4 flex flex-col gap-4">
            <ImageViewer title="Original" imageUrl={originalImage} altText="User uploaded image" />
            <div className="bg-gray-800 rounded-lg p-4 flex flex-col gap-4 shadow-lg">
              <label htmlFor="prompt" className="font-semibold text-lg text-indigo-300">Your Edit Prompt</label>
              <textarea
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g., 'make the sky a vibrant sunset' or 'add a small, friendly robot in the corner'"
                className="w-full h-32 p-3 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors text-gray-200 resize-none"
                disabled={isLoading}
              />
              <Button onClick={handleEdit} disabled={isLoading || !prompt} className="w-full">
                <EditIcon />
                {isLoading ? 'Editing...' : 'Apply Edit'}
              </Button>
              <Button onClick={handleReset} variant="secondary" className="w-full">
                <StartOverIcon />
                Start Over
              </Button>
            </div>
          </div>

          {/* Output Panel */}
          <div className="w-full lg:w-2/3 xl:w-3/4 flex-grow relative bg-gray-800 rounded-lg shadow-lg flex items-center justify-center p-4 min-h-[50vh] lg:min-h-0">
            {isLoading && <LoadingOverlay message={loadingMessage} />}
            
            {!isLoading && error && (
              <div className="text-center text-red-400">
                <p className="font-bold text-lg">Oops! Something went wrong.</p>
                <p>{error}</p>
              </div>
            )}

            {!isLoading && !error && !editedResult && (
              <div className="text-center text-gray-400">
                <h2 className="text-2xl font-bold mb-2">Edited Image will appear here</h2>
                <p>Describe your changes and click "Apply Edit" to see the magic.</p>
              </div>
            )}
            
            {!isLoading && editedResult && (
              <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
                {editedResult.imageBase64 ? (
                   <ImageViewer
                     title="Edited"
                     imageUrl={`data:image/png;base64,${editedResult.imageBase64}`}
                     altText="AI edited image"
                     actionButton={
                        <a 
                          href={`data:image/png;base64,${editedResult.imageBase64}`} 
                          download={getFileName('png')}
                        >
                          <Button variant="secondary" aria-label="Download Image">
                            <DownloadIcon /> Download
                          </Button>
                        </a>
                     }
                   />
                ) : (
                  <div className="text-center text-gray-400">
                    <p>The AI provided a text response but no image.</p>
                  </div>
                )}
                {editedResult.text && (
                  <p className="bg-gray-700 p-3 rounded-md text-center max-w-md italic">{editedResult.text}</p>
                )}
              </div>
            )}
          </div>
        </main>
      )}
    </div>
  );
}