
import React, { useCallback } from 'react';
import { UploadIcon } from './Icons';

interface ImageUploaderProps {
  onImageUpload: (file: File) => void;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload }) => {
  const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onImageUpload(file);
    }
  }, [onImageUpload]);
  
  const handleDrop = useCallback((event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer.files?.[0];
    if (file) {
      onImageUpload(file);
    }
  }, [onImageUpload]);

  const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div className="flex-grow flex items-center justify-center p-4">
      <label
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        htmlFor="image-upload"
        className="relative w-full max-w-2xl h-80 flex flex-col items-center justify-center bg-gray-800 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:border-indigo-500 hover:bg-gray-700 transition-all duration-300"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6 text-gray-400">
          <UploadIcon className="w-10 h-10 mb-3" />
          <p className="mb-2 text-lg font-semibold text-gray-300">
            <span className="text-indigo-400">Click to upload</span> or drag and drop
          </p>
          <p className="text-sm">PNG, JPG, or GIF</p>
        </div>
        <input id="image-upload" type="file" className="hidden" accept="image/png, image/jpeg, image/gif" onChange={handleFileChange} />
      </label>
    </div>
  );
};
