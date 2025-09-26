import { SitemapStream, streamToPromise } from 'sitemap'
import { writeFileSync, existsSync, mkdirSync } from 'fs'
import path from 'path'

// Website configuration
const config = {
  hostname: 'https://www.cascadingxol.com',
  outputPath: './public/sitemap.xml'
}

// Routes extracted from your AppRouter component with business-focused priorities
const routes = [
  {
    url: '/',
    changefreq: 'weekly',
    priority: 1.0,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/about',
    changefreq: 'monthly', 
    priority: 0.8,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/services',
    changefreq: 'weekly',
    priority: 0.9, // Highest priority for services - main business page
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/portfolio',
    changefreq: 'weekly',
    priority: 0.8, // High priority - showcases your work
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/contact',
    changefreq: 'monthly',
    priority: 0.7, // Important for lead generation
    lastmod: new Date().toISOString().split('T')[0]
  }
]

// Function to ensure directory exists
function ensureDirectoryExists(filePath) {
  const dirname = path.dirname(filePath)
  if (!existsSync(dirname)) {
    mkdirSync(dirname, { recursive: true })
    console.log(`📁 Created directory: ${dirname}`)
  }
}

// Main sitemap generation function
async function generateSitemap() {
  try {
    console.log('🚀 Starting sitemap generation...')
    
    // Ensure public directory exists
    ensureDirectoryExists(config.outputPath)

    // Create sitemap stream with professional configuration
    const sitemap = new SitemapStream({ 
      hostname: config.hostname,
      cacheTime: 600000, // 600 seconds cache
      xmlns: {
        news: false,
        xhtml: false, 
        image: false,
        video: false
      }
    })

    console.log('📝 Adding routes to sitemap...')

    // Add each route to sitemap
    routes.forEach((route, index) => {
      sitemap.write(route)
      console.log(`   ✓ Added: ${route.url} (Priority: ${route.priority})`)
    })

    // End the stream
    sitemap.end()

    console.log('🔄 Converting sitemap to XML...')

    // Convert stream to string and save to file
    const sitemapXML = await streamToPromise(sitemap)
    
    // Add XML declaration and proper formatting
    const formattedXML = sitemapXML.toString()
    
    // Write to file
    writeFileSync(config.outputPath, formattedXML)
    
    // Success message with detailed info
    console.log('\n✅ Sitemap generated successfully!')
    console.log('━'.repeat(50))
    console.log(`📍 File Location: ${config.outputPath}`)
    console.log(`🌐 Website URL: ${config.hostname}/sitemap.xml`)
    console.log(`📄 Total Pages: ${routes.length}`)
    console.log(`📅 Generated: ${new Date().toLocaleString()}`)
    console.log('━'.repeat(50))
    
    // Next steps guidance
    console.log('\n🚀 Next Steps:')
    console.log('1. Deploy your website')
    console.log('2. Test: https://www.cascadingxol.com/sitemap.xml')
    console.log('3. Submit to Google Search Console')
    console.log('4. Submit to Bing Webmaster Tools')
    
  } catch (error) {
    console.error('\n❌ Error generating sitemap:')
    console.error('━'.repeat(50))
    console.error('Error Details:', error.message)
    console.error('Stack Trace:', error.stack)
    console.error('━'.repeat(50))
    console.error('\n💡 Troubleshooting:')
    console.error('1. Make sure "sitemap" package is installed: npm install sitemap')
    console.error('2. Check if public/ directory exists')
    console.error('3. Verify file write permissions')
    process.exit(1)
  }
}

// Validation function to check routes
function validateRoutes() {
  console.log('🔍 Validating routes...')
  
  const issues = []
  
  routes.forEach((route, index) => {
    if (!route.url.startsWith('/')) {
      issues.push(`Route ${index + 1}: URL should start with '/' - Found: ${route.url}`)
    }
    
    if (route.priority < 0 || route.priority > 1) {
      issues.push(`Route ${index + 1}: Priority should be between 0-1 - Found: ${route.priority}`)
    }
    
    const validFreq = ['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never']
    if (!validFreq.includes(route.changefreq)) {
      issues.push(`Route ${index + 1}: Invalid changefreq - Found: ${route.changefreq}`)
    }
  })
  
  if (issues.length > 0) {
    console.error('⚠️ Route validation issues found:')
    issues.forEach(issue => console.error(`  - ${issue}`))
    return false
  }
  
  console.log('✓ All routes are valid!')
  return true
}

// Run the generator with validation
console.log('🎯 CascadingXol.com - Professional Sitemap Generator')
console.log('=' .repeat(60))

if (validateRoutes()) {
  generateSitemap()
} else {
  console.error('❌ Please fix route validation issues before proceeding.')
  process.exit(1)
}