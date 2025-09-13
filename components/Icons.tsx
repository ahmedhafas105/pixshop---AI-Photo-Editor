
import React from 'react';

export const UploadIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
  </svg>
);

export const EditIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 012.829-5.855L14.25 9.75M8.625 12a4.5 4.5 0 015.855-2.829L15 11.25M15 11.25l-2.846.813a4.5 4.5 0 01-5.855 2.829L6.75 15.75M8.625 12L11.25 15M12 15.75l2.625-2.625M12 15.75V21m6-13.5l-2.846.813a4.5 4.5 0 00-5.855 2.829L9.75 12M18 8.25L15 11.25" />
  </svg>
);

export const DownloadIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
);

export const StartOverIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.664 0l3.181-3.183m-11.664 0l4.5-1.401m-4.5 1.401L5.985 19.644" />
    </svg>
);

export const MagicWandIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-3.198-2.194L2.625 15.25a3 3 0 00-3.198 2.194L-2.375 21.5a3 3 0 002.194 3.198l2.625-.75a3 3 0 002.194-3.198L9.53 16.122zM12.375 21.5L15.25 24l2.875-6.97L21.5 14.125 14.53 11.25 12.375 21.5zM15 8.25l2.875-6.97L21.5 4.125 14.53 1.25 12.375 8.25 15 8.25z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.375 8.25L15 5.375 17.625 8.25 15 11.125 12.375 8.25z" />
    </svg>
);
