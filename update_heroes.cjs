const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, 'src', 'Components', 'services_Provide');
const pagesDir = path.join(__dirname, 'src', 'Components', 'Pages');

const curveSvg = `
        {/* Curved bottom overlay */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-[60px] md:h-[100px]" style={{ transform: "translateY(1px)" }}>
            <path d="M0,120 C300,0 900,0 1200,120 Z" fill="#ffffff" />
          </svg>
        </div>
`;

function processFile(filePath, isService) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Skip if already processed
  if (content.includes('Curved bottom overlay')) {
    console.log(`Skipped (already has curve): ${filePath}`);
    return;
  }

  // Find the end of the hero section div
  // The structure ends with:
  //           </div>
  //         </div>
  //       </div>
  // 
  //       {/* Main Content Area */}

  // We need to inject the curve SVG just before the closing </div> of the hero banner.
  // The closing tag is right before "Main Content Area"
  const injectionPoint = /<\/div>\s*\{\/\* Main Content Area \*\/\}/;
  
  if (injectionPoint.test(content)) {
    content = content.replace(injectionPoint, `${curveSvg}      </div>\n\n      {/* Main Content Area */}`);
  } else {
    console.log(`Could not find injection point in: ${filePath}`);
    return;
  }

  // For services, also add a background image if it doesn't have one
  if (isService && content.includes('<div className="absolute inset-0 bg-[#111827]/80 z-0"></div>')) {
    const bgImageStyle = `        <div 
          className="absolute inset-0 bg-[#111827]/85 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        ></div>`;
    content = content.replace('<div className="absolute inset-0 bg-[#111827]/80 z-0"></div>', bgImageStyle);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated: ${filePath}`);
}

const serviceFiles = fs.readdirSync(servicesDir).filter(f => f.endsWith('.jsx'));
serviceFiles.forEach(f => processFile(path.join(servicesDir, f), true));

const pageFiles = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));
pageFiles.forEach(f => processFile(path.join(pagesDir, f), false));
