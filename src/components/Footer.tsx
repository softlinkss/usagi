import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <h2 className="flex items-center justify-center gap-3 text-2xl font-serif tracking-widest mb-6">
          <Logo className="w-7 h-7 text-accent" />
          HOTEL USAGI
        </h2>
        
        <p className="text-sm text-gray-400 mb-10 font-light tracking-widest leading-relaxed">
          〒701-1143 岡山県岡山市北区吉宗42-53<br />
          TEL: 086-294-2220
        </p>

        <div className="flex gap-6 mb-12">
          <a href="#rooms" className="text-sm text-gray-400 hover:text-white transition-colors tracking-widest">Rooms</a>
          <a href="#pricing" className="text-sm text-gray-400 hover:text-white transition-colors tracking-widest">Pricing</a>
          <a href="#access" className="text-sm text-gray-400 hover:text-white transition-colors tracking-widest">Access</a>
        </div>

        <div className="w-full h-px bg-white/10 mb-8" />

        <p className="text-xs text-gray-500 tracking-widest">
          &copy; {new Date().getFullYear()} HOTEL USAGI. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
