'use client';

export default function Footer() {
  return (
    <footer className="not-prose bg-[#252630] text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row with logo and social icons */}
        <div className="flex justify-between items-start mb-8">
          {/* Logo */}
          <div>
            <img src="/logo/okto-footer-logo.png" alt="Okto Logo" className="w-25" />
          </div>
          
          {/* Social icons */}
          <div className="flex space-x-4">
            <a href="https://x.com/okto_web3" className="text-gray-400 hover:text-[#7C8FFF]" target="_blank" rel="noopener">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://discord.com/invite/okto-916349620383252511" className="text-gray-400 hover:text-white" target="_blank" rel="noopener">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/oktoweb3" className="text-gray-400 hover:text-white" target="_blank" rel="noopener">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Content sections in 4 columns */}
        <div className="grid grid-cols-12 gap-4">
          {/* About Column */}
          <div className="col-span-3">
            <h3 className="text-sm font-medium mb-3 mt-0">About</h3>
            <ul className="space-y-2 p-0 m-0">
              <li className="p-0 m-0"><a href="https://okto.tech/" className="text-gray-400 hover:text-white text-sm" target="_blank" rel="noopener">About Okto</a></li>
              <li className="p-0 m-0"><a href="https://coindcx.com/about-us/" className="text-gray-400 hover:text-white text-sm" target="_blank" rel="noopener">About CoinDCX</a></li>
              <li className="p-0 m-0"><a href="https://www.linkedin.com/company/coindcx/jobs/" className="text-gray-400 hover:text-white text-sm" target="_blank" rel="noopener">Careers</a></li>
              <li className="p-0 m-0"><a href="https://docs.okto.tech/docs/brand-kit" className="text-gray-400 hover:text-white text-sm" target="_blank" rel="noopener">Brand Kit</a></li>
            </ul>
          </div>

          {/* Products Column */}
          <div className="col-span-3">
            <h3 className="text-sm font-medium mb-3 mt-0">Products</h3>
            <ul className="space-y-2 p-0 m-0">
              <li className="p-0 m-0"><a href="https://docs.okto.tech/docs/okto-sdk/supported-sdk-platforms" className="text-gray-400 hover:text-white text-sm" target="_blank" rel="noopener">SDK</a></li>
              <li className="p-0 m-0"><a href="https://okto.tech/wallet" className="text-gray-400 hover:text-white text-sm" target="_blank" rel="noopener">Wallet</a></li>
              <li className="p-0 m-0"><a href="https://form.typeform.com/to/CvPAQNAU" className="text-gray-400 hover:text-white text-sm" target="_blank" rel="noopener">Okto Grants</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="col-span-3">
            <h3 className="text-sm font-medium mb-3 mt-0">Resources</h3>
            <ul className="space-y-2 p-0 m-0">
              <li className="p-0 m-0"><a href="https://whitepaper.okto.tech/" className="text-gray-400 hover:text-white text-sm" target="_blank" rel="noopener">Whitepaper</a></li>
              <li className="p-0 m-0"><a href="https://okto.tech/blog" className="text-gray-400 hover:text-white text-sm" target="_blank" rel="noopener">Blog</a></li>
              <li className="p-0 m-0"><a href="https://docs.okto.tech/showcase" className="text-gray-400 hover:text-white text-sm" target="_blank" rel="noopener">Showcase</a></li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="col-span-3">
            <h3 className="text-sm font-medium mb-3 mt-0">Support</h3>
            <ul className="space-y-2 p-0 m-0">
              <li className="p-0 m-0"><a href="https://docs.okto.tech/docs/troubleshooting" className="text-gray-400 hover:text-white text-sm" target="_blank" rel="noopener">Troubleshooting</a></li>
              <li className="p-0 m-0"><a href="https://docs.okto.tech/docs/react-sdk/sdk-error-warnings" className="text-gray-400 hover:text-white text-sm" target="_blank" rel="noopener">SDK Error and Warnings</a></li>
              <li className="p-0 m-0"><a href="https://discord.com/invite/okto-916349620383252511" className="text-gray-400 hover:text-white text-sm" target="_blank" rel="noopener">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="mt-6 pt-3 border-t border-gray-700 text-gray-400 text-xs">
          <p>Copyright © 2025 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}