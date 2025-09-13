
import React from 'react';

interface ImageViewerProps {
  title: string;
  imageUrl: string;
  altText: string;
  actionButton?: React.ReactNode;
}

export const ImageViewer: React.FC<ImageViewerProps> = ({ title, imageUrl, altText, actionButton }) => {
  return (
    <div className="w-full h-full bg-gray-800 rounded-lg p-4 flex flex-col gap-2 relative shadow-lg">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg text-indigo-300">{title}</h3>
        {actionButton}
      </div>
      <div className="flex-grow flex items-center justify-center bg-black/30 rounded-md overflow-hidden">
        <img src={imageUrl} alt={altText} className="max-w-full max-h-full object-contain" />
      </div>
    </div>
  );
};
