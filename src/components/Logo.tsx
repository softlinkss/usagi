export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Sophisticated, elegant minimalist rabbit silhouette */}
      <path 
        d="M 16 29 
           C 23 29 26 20 22 13 
           C 21 7 20 2 18 2 
           C 16.5 2 17 7 17 10 
           C 17 11.5 15 11.5 15 10 
           C 15 7 15.5 2 14 2 
           C 12 2 11 7 10 13 
           C 6 20 9 29 16 29 
           Z" 
        fill="currentColor" 
      />
    </svg>
  );
}
