const fs = require('fs');
const https = require('https');

const urls = [
  'https://youssefs-portfolio-00e6c7.webflow.io/template-pages/change-log',
  'https://youssefs-portfolio-00e6c7.webflow.io/projects/onpreo-crm-desktop-ux-ui-redesign',
  'https://youssefs-portfolio-00e6c7.webflow.io/projects/onpreo-app',
  'https://youssefs-portfolio-00e6c7.webflow.io/projects/onpreo----marketing-design',
  'https://youssefs-portfolio-00e6c7.webflow.io/projects/sook---app-promotion-video',
  'https://youssefs-portfolio-00e6c7.webflow.io/projects/ihop----bio-products-microwebsite',
  'https://youssefs-portfolio-00e6c7.webflow.io/projects/design-typography-magazine'
];

function fetchHTML(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', err => reject(err));
  });
}

async function scrapeData() {
  const results = [];
  for (const url of urls) {
    try {
      const html = await fetchHTML(url);
      
      // Extract title: <h1 ...>Title</h1>
      const titleMatch = html.match(/<h1[^>]*>([^<]+)<\/h1>/);
      const title = titleMatch ? titleMatch[1] : '';

      // Extract subtitle: <div ... class="heading-subtitle">Subtitle</div>
      const subtitleMatch = html.match(/<div[^>]*class="[^"]*heading-subtitle[^"]*"[^>]*>([\s\S]*?)<\/div>/);
      const subtitle = subtitleMatch ? subtitleMatch[1].replace(/<[^>]+>/g, '').trim() : '';

      // Extract thumbnails: <img ... class="project-thumb-image">
      const thumbMatches = [...html.matchAll(/<img[^>]*class="[^"]*project-thumb-image[^"]*"[^>]*src="([^"]+)"/g)];
      const thumbnails = thumbMatches.map(m => m[1]);

      // Extract category/client/date from project-item-wrap
      const clientMatch = html.match(/Client<\/div><div class="body-text-2">([^<]+)<\/div>/);
      const dateMatch = html.match(/Date<\/div><div class="body-text-2">([^<]+)<\/div>/);
      const categoryMatch = html.match(/Category<\/div><div class="body-text-2">([^<]+)<\/div>/);

      const client = clientMatch ? clientMatch[1] : '';
      const date = dateMatch ? dateMatch[1] : '';
      const category = categoryMatch ? categoryMatch[1] : '';

      // Extract text blocks
      const textBlocks = [...html.matchAll(/<div[^>]*class="[^"]*heading-subtitle full[^"]*"[^>]*>([\s\S]*?)<\/div>/g)];
      const overview = textBlocks.length > 0 ? textBlocks[0][1].replace(/<[^>]+>/g, '').trim() : '';
      const finalResult = textBlocks.length > 1 ? textBlocks[1][1].replace(/<[^>]+>/g, '').trim() : '';

      results.push({
        url,
        title,
        subtitle,
        client,
        date,
        category,
        overview,
        finalResult,
        thumbnails
      });
      
      console.log(`Scraped: ${title}`);
    } catch (e) {
      console.error(`Error scraping ${url}:`, e);
    }
  }
  
  fs.writeFileSync('scraped_projects.json', JSON.stringify(results, null, 2));
  console.log('Finished scraping! Results written to scraped_projects.json');
}

scrapeData();
