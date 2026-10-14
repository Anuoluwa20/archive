/**
 * ARCHIVE — Automated Studio Verification & Quality Gate Suite
 * 
 * Runs automated checks across data models, research corpus integrity,
 * documentation completeness, and component architecture.
 */

const fs = require('fs');
const path = require('path');

let passedTests = 0;
let failedTests = 0;

function assert(condition, testName, failureDetail) {
  if (condition) {
    console.log(`  ✓ [PASS] ${testName}`);
    passedTests++;
  } else {
    console.error(`  ✗ [FAIL] ${testName} — ${failureDetail}`);
    failedTests++;
  }
}

console.log('\n======================================================');
console.log('🏛️  ARCHIVE — Automated Quality Assurance & Verification');
console.log('======================================================\n');

// --- Suite 1: Research Corpus Integrity ---
console.log('📦 SUITE 1: Research Corpus & 510-Reference Inventory');

const jsonPath = path.join(__dirname, '..', 'research', 'references.json');
const csvPath = path.join(__dirname, '..', 'research', 'references.csv');

assert(fs.existsSync(jsonPath), 'references.json exists', 'research/references.json not found');
assert(fs.existsSync(csvPath), 'references.csv exists', 'research/references.csv not found');

if (fs.existsSync(jsonPath)) {
  const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  assert(data.length === 510, 'Reference Count matches 510 exact target', `Found ${data.length} records instead of 510`);

  const categoryCounts = {};
  data.forEach((r) => {
    categoryCounts[r.category] = (categoryCounts[r.category] || 0) + 1;
  });

  const expectedCategories = {
    'Experimental museums and exhibitions': 75,
    'Editorial and typography-driven websites': 75,
    'Photography archives and storytelling': 60,
    'Music websites and visual identities': 60,
    'Fashion editorial and exhibitions': 60,
    'Cultural and graphic design archives': 60,
    'Motion and interactive storytelling': 60,
    'Nigerian and African cultural references': 60,
  };

  for (const [cat, expected] of Object.entries(expectedCategories)) {
    assert(categoryCounts[cat] === expected, `Category Quota: "${cat}"`, `Expected ${expected}, got ${categoryCounts[cat]}`);
  }

  // Check required fields on sample and overall
  let allFieldsPresent = true;
  const requiredFields = [
    'id', 'category', 'title', 'creator_studio', 'original_url',
    'discovery_url', 'tags', 'cultural_geographic_context', 'visual_style',
    'typography', 'color_palette', 'layout_system', 'interaction_motion_notes',
    'relevance_to_archive', 'transferable_design_principle', 'originality_warning',
    'technical_feasibility', 'rights_licensing_status',
  ];

  data.forEach((r) => {
    for (const f of requiredFields) {
      if (!r[f]) {
        allFieldsPresent = false;
      }
    }
  });

  assert(allFieldsPresent, 'Required Metadata Fields Present on all 510 records', 'Some records miss mandatory fields');
}

// --- Suite 2: Product Documentation Verification ---
console.log('\n📄 SUITE 2: Product Discovery & Specification Documents');
const productFiles = [
  'vision.md',
  'audience-personas.md',
  'product-requirements.md',
  'experience-strategy.md',
  'content-strategy.md',
  'acceptance-criteria.md',
  'decision-log.md',
];
productFiles.forEach((file) => {
  const p = path.join(__dirname, '..', 'docs', 'product', file);
  assert(fs.existsSync(p), `Product file: /docs/product/${file}`, `Missing ${file}`);
});

// --- Suite 3: Design Direction Documents ---
console.log('\n🎨 SUITE 3: Senior Product Design Documents');
const designFiles = [
  'art-direction.md',
  'concept-explorations.md',
  'design-system.md',
  'typography.md',
  'color-system.md',
  'layout-specification.md',
  'responsive-behavior.md',
  'asset-direction.md',
  'design-qa.md',
];
designFiles.forEach((file) => {
  const p = path.join(__dirname, '..', 'docs', 'design', file);
  assert(fs.existsSync(p), `Design file: /docs/design/${file}`, `Missing ${file}`);
});

// --- Suite 4: Motion & Interaction Specifications ---
console.log('\n🎬 SUITE 4: Motion & Interaction Documents');
const motionFiles = [
  'motion-direction.md',
  'interaction-inventory.md',
  'animation-tokens.md',
  'scroll-storyboard.md',
  'reduced-motion-spec.md',
  'performance-validation.md',
];
motionFiles.forEach((file) => {
  const p = path.join(__dirname, '..', 'docs', 'motion', file);
  assert(fs.existsSync(p), `Motion file: /docs/motion/${file}`, `Missing ${file}`);
});

// --- Suite 5: Engineering Architecture & Reports ---
console.log('\n⚙️  SUITE 5: Engineering Documents & Quality Reports');
const engineeringFiles = [
  'architecture.md',
  'component-map.md',
  'implementation-plan.md',
  'performance-report.md',
  'accessibility-report.md',
  'test-results.md',
  'deployment.md',
];
engineeringFiles.forEach((file) => {
  const p = path.join(__dirname, '..', 'docs', 'engineering', file);
  assert(fs.existsSync(p), `Engineering file: /docs/engineering/${file}`, `Missing ${file}`);
});

// --- Suite 6: Agent Handoffs Audit ---
console.log('\n🤝 SUITE 6: Cross-Agent Sequential Handoff Ledger');
const handoffFiles = [
  '01-product-to-research-and-design.md',
  '02-research-to-design.md',
  '03-design-to-motion-and-engineering.md',
  '04-motion-to-engineering.md',
  '05-engineering-to-qa.md',
];
handoffFiles.forEach((file) => {
  const p = path.join(__dirname, '..', 'docs', 'agent-handoffs', file);
  assert(fs.existsSync(p), `Handoff file: /docs/agent-handoffs/${file}`, `Missing ${file}`);
});

// --- Suite 7: Next.js Component Architecture & Implementation ---
console.log('\n💻 SUITE 7: Component Implementation & Landing Page Architecture');
const sectionComponents = [
  'HeroSection.tsx',
  'ManifestoSection.tsx',
  'DisciplinesSection.tsx',
  'FeaturedStorySection.tsx',
  'TimelineSection.tsx',
  'CollectionSection.tsx',
  'ContinuitySection.tsx',
  'ClosingSection.tsx',
];
sectionComponents.forEach((file) => {
  const p = path.join(__dirname, '..', 'src', 'components', 'sections', file);
  assert(fs.existsSync(p), `Section component: ${file}`, `Missing ${file}`);
});

const uiComponents = [
  'AudioController.tsx',
  'ArtifactModal.tsx',
  'SubmissionModal.tsx',
  'ComparisonSlider.tsx',
];
uiComponents.forEach((file) => {
  const p = path.join(__dirname, '..', 'src', 'components', 'ui', file);
  assert(fs.existsSync(p), `UI component: ${file}`, `Missing ${file}`);
});

console.log('\n======================================================');
console.log(`TOTAL TESTS: ${passedTests + failedTests}`);
console.log(`PASSED:      ${passedTests}`);
console.log(`FAILED:      ${failedTests}`);
console.log('======================================================\n');

if (failedTests > 0) {
  process.exit(1);
} else {
  console.log('🎉 ALL AUTOMATED QUALITY GATES PASSED SUCCESSFULLY.\n');
  process.exit(0);
}
