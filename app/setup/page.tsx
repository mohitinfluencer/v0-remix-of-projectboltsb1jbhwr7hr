import Link from "next/link"
import {
  ArrowLeft,
  CheckCircle,
  Copy,
  ExternalLink,
  Settings,
  BarChart3,
  Palette,
  Users,
  ShoppingCart,
} from "lucide-react"

export default function SetupGuidePage() {
  return (
    <div className="min-h-screen bg-[#030303]">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/auth/login" className="text-white/70 hover:text-white font-medium transition-colors">
                Sign In
              </Link>
              <Link
                href="/auth/sign-up"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Setup Guide</h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Get your BoostACart widget up and running in minutes. Follow these simple steps to start capturing more
            leads.
          </p>
        </div>

        {/* Quick Start Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/25">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-white mb-2">1. Create Account</h3>
            <p className="text-sm text-white/60">Sign up with your store details</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/25">
              <Palette className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-white mb-2">2. Customize Widget</h3>
            <p className="text-sm text-white/60">Design your lead capture form</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/25">
              <Copy className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-white mb-2">3. Get Widget URL</h3>
            <p className="text-sm text-white/60">Copy your unique widget link</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-500/25">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-white mb-2">4. Track Results</h3>
            <p className="text-sm text-white/60">Monitor your lead generation</p>
          </div>
        </div>

        {/* Platform Integration */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Platform Integration</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/setup/shopify"
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/25 group-hover:shadow-green-500/40 transition-all">
                  <ShoppingCart className="h-6 w-6 text-white" />
                </div>
                <ExternalLink className="h-5 w-5 text-white/40 group-hover:text-white/70 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Shopify Integration</h3>
              <p className="text-white/60 mb-4">
                Step-by-step guide to integrate BoostACart with your Shopify store and start capturing abandoned cart
                leads.
              </p>
              <div className="flex items-center text-green-400 font-medium group-hover:translate-x-1 transition-transform">
                <span>Get Started</span>
                <ExternalLink className="h-4 w-4 ml-2" />
              </div>
            </Link>
          </div>
        </div>

        {/* Detailed Steps */}
        <div className="space-y-8">
          {/* Step 1 */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-lg hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold mr-4 shadow-lg shadow-blue-500/25">
                1
              </div>
              <h2 className="text-2xl font-bold text-white">Create Your Store Account</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-white mb-3">What You'll Need:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-white/70">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Your email address
                  </li>
                  <li className="flex items-center text-white/70">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Store name
                  </li>
                  <li className="flex items-center text-white/70">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Store domain (e.g., mystore.com)
                  </li>
                </ul>
              </div>
              <div>
                <Link
                  href="/auth/sign-up"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                >
                  <Users className="h-5 w-5" />
                  <span>Create Account Now</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-lg hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full flex items-center justify-center font-bold mr-4 shadow-lg shadow-green-500/25">
                2
              </div>
              <h2 className="text-2xl font-bold text-white">Customize Your Widget</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-white mb-3">Customization Options:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-white/70">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Heading and description text
                  </li>
                  <li className="flex items-center text-white/70">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Colors and styling
                  </li>
                  <li className="flex items-center text-white/70">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Form fields (email/phone toggles)
                  </li>
                  <li className="flex items-center text-white/70">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    Discount code settings
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-white/60 mb-4">
                  Access the customization panel from your dashboard to design a widget that matches your brand.
                </p>
                <Link
                  href="/dashboard"
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-4 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 font-medium flex items-center justify-center space-x-2 shadow-lg shadow-green-500/25 hover:shadow-green-500/40"
                >
                  <Settings className="h-5 w-5" />
                  <span>Go to Dashboard</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-lg hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full flex items-center justify-center font-bold mr-4 shadow-lg shadow-purple-500/25">
                3
              </div>
              <h2 className="text-2xl font-bold text-white">Deploy Your Widget</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-white mb-3">Your Widget URL:</h3>
                <p className="text-white/60 mb-4">
                  Your widget will be available at: <br />
                  <code className="bg-black/30 px-2 py-1 rounded text-sm text-blue-300 border border-white/10">
                    boostacart.com/widget/yourdomain.com
                  </code>
                </p>
              </div>
              <div>
                <p className="text-white/60 mb-4">
                  Copy this URL and paste it into your store's page or product descriptions to start capturing leads.
                </p>
                <Link
                  href="/dashboard"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-4 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 font-medium flex items-center justify-center space-x-2 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
                >
                  <Copy className="h-5 w-5" />
                  <span>Copy Widget URL</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm p-8 rounded-2xl text-white text-center border border-white/10">
          <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
          <p className="text-white/60 mb-6">
            Our support team is here to help you with any questions about setting up or customizing your BoostACart
            widget.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/support"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
            >
              Contact Support
            </Link>
            <Link
              href="/docs"
              className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 font-medium border border-white/20"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
