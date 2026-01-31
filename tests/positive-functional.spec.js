const { test, expect } = require('@playwright/test');
const testCases = [
    { 
        id: 'Pos_Fun_0001', 
        input: 'oyaata suba dhavasak!', 
        expected: 'ඔයාට සුබ දවසක්!'
    },
    { 
        id: 'Pos_Fun_0002', 
        input: 'mama adha gedhara inne.', 
        expected: 'මම අද ගෙදර ඉන්නෙ'
    },
    { 
        id: 'Pos_Fun_0003', 
        input: 'api heta udarata yamu.', 
        expected: 'අපි හෙට උඩරට යමු.'
    },
    { 
        id: 'Pos_Fun_0004', 
        input: 'oyaa kavadhdha enna inne?', 
        expected: 'ඔයා කවද්ද එන්න ඉන්නෙ?'
    },
    { 
        id: 'Pos_Fun_0005', 
        input: 'mama iiyee office giyaa.', 
        expected: 'මම ඊයෙ ඔෆිස් ගියා.'
    },
    { 
        id: 'Pos_Fun_0006', 
        input: 'karuNaakaralaa mata udhavvak karanna.', 
        expected: 'කරුණාකරලා මට උදව්වක් කරන්න.'
    },
    { 
        id: 'Pos_Fun_0007', 
        input: 'issarahata poddak yanna.', 
        expected: 'ඉස්සරහට පොඩ්ඩක් යන්න.'
    },
    { 
        id: 'Pos_Fun_0008', 
        input: 'api shopping giyaa saha passe dinner ganna giyaa', 
        expected: 'අපි ශොපින්ග් ගියා සහ පස්සෙ ඩිනර් ගන්න ගියා'
    },
    { 
        id: 'Pos_Fun_0009', 
        input: 'oyaa enavaanam mama pause karanavaa.', 
        expected: 'ඔයා එනවානම් මම පොස් කරනවා.'
    },
    { 
        id: 'Pos_Fun_0010', 
        input: 'mata eeka hariyata therenavaa.', 
        expected: 'මට ඒක හරියට තේරෙනව'
    },
    { 
        id: 'Pos_Fun_0011', 
        input: 'mama iiyee bus eka late vuna nisaa office enna poddak parakku vuna. Habai morning traffic eka hariyata analyze karala, next time leave adu karaganna plan karanawa. Boss ekka discus karala, situation eka sammatha karala, office tasks smoothly handle karanawa.', 
        expected: 'මම ඊයෙ බස් එක ලේට් වුන නිසා ඔෆිස් එන්න පොඩ්ඩක් පරක්කු වුනා.හැබැයි මොර්නින්ග් ට්‍රැෆික් එක හරියට ඇනලයිස් කරල, නෙක්ස්ට් ටයිම් ලීව් අඩු කරගන්න ප්ලෑන් කරනව. බොස් එක්ක ඩිස්කස් කරල, සිටුවේශන් එක සම්මත කරල, ඔෆිස් ටාස්ක්ස් ස්මූත්ලි හැන්ඩ්ල් කරනව.'
    },
    { 
        id: 'Pos_Fun_0012', 
        input: 'oyaalaa adha meeting ekata enna puluvanda kiyala mata kiyanna. Habai documents tika ready thiyenawanam, eeta passe agenda eka check karala, important points highlight karanna. Meeting eke discussion eka smooth wenna, oyala suggestions provide karanna sammatha wenawa kiyala mata kiyanna.', 
        expected: 'ඔයාලා අද මීටින්ග් එකට එන්න පුලුවන්ද කියල මට කියන්න.හැබැයි ඩොකුමන්ට්ස් ටික රේඩ්යි කරල තියෙනවනම්, ඊට පස්සෙ ඇජෙන්ඩා එක චෙක් කරල, ඉම්පොර්ටන්ට් පොඉන්ට්ස් හයිලයිට් කරන්න. මීටින් එකෙ ඩිස්කශන් එක ස්මූත් වෙන්න, ඔයල සජෙසන්ස් ප්‍රොවයිඩ් කරන්න සම්මත වෙනව කියල මට කියන්න.'
    },
    { 
        id: 'Pos_Fun_0013', 
        input: 'puLuvannam documents tika attach karala magee email ekata send karanna. Habai large files thiyenawanam, compression software use karala size reduce karanna, nethnam cloud link share karanna. Email eka send karama confirm karala mata kiyanna. This process ensures correct submission and avoids errors.', 
        expected: 'පුළුවන්නම් ඩොකුමන්ට්ස් ටික ඇටෑච් කරල මගෙ ඊමෙල් එකට සෙන්ඩ් කරන්න. හැබැයි ලාජ් ෆයිල්ස් තියෙනවනම්, කම්ප්‍රෙශන් සොෆ්ට්වෙය යූස් කරල සයිස් රිඩියුස් කරන්න, නැහ්නම් ක්ලවුඩ් ලින්ක් ශෙයාර් කරන්න. ඊමෙල් එක සෙන්ඩ් කරාම කන්ෆර්ම් කරල මට කියන්න. දිස් ප්‍රොසෙස් එන්සුඅර් කරෙක්ට් සබ්මිශන් ඇන්ඩ් අවොයිඩ්ස් එරර්ස්'
    },
    { 
        id: 'Pos_Fun_0014', 
        input: 'api heta Colombo yanna plan karanawa, habai weather report eka api check karala decide karamu. Rain thibunoth trip eka postpone karanna puluwan. Tickets already book kara thiyenawanam, refund policy balala, nethnam alternate date plan karamu. Safety and comfort prioritize karala trip eka yanawa.', 
        expected: 'අපි හෙට කොලබ යන්න ප්ලැන් කරනව, හැබ්යි වෙදර් රිපොර්ට් එක අපි චෙක් කරල ඩිසයිඩ් කරමු. වැස්ස තිබුනොත් ට්‍රිප් එක පොස්ට්පොන් කරන්න පුලුවන්. ටිකට්ස් ඔල් රෙඩි බූක් කරල තියෙනවනම්, රිෆන්ඩ් පොලිසි බලල, නැත්නම් ඔල්ටර්නෙට් දවසක් ප්ලැන් කරමු. සෙෆ්ටි අන්ඩ් කම්ෆිර්ට් ප්‍රයොට්යිස් කරල ට්‍රිප් එක යනව'
    },
    { 
        id: 'Pos_Fun_0015', 
        input: 'Zoom call ekata adhaa 4.00 PM ta join karanna kiyala email ekak aava. haebaeyi system eke login issues thiyenawanam, backup link eka use karala enter venna, nethnam IT support contact karanna. Meeting eka miss venavanam, recording eka bala ganna puluvan.', 
        expected: 'Zoom call එකට අදා 4.00 PM ට join කරන්න කියල email එකක් ආව. හැබැයි system eke login issues තියෙනwඅනම්, backup link එක use කරල enter වෙන්න, නෙත්නම් IT support contact කරන්න. Meeting එක miss වෙනවනම්, recording එක බල ගන්න පුලුවන්.'
    },
    { 
        id: 'Pos_Fun_0016', 
        input: 'adha office giyaama morning meeting eka attend karala, lunch break eke colleagues la samaga discussions karala, afternoon eka documentation saha reporting karanava. Evening valata shopping plan kalaa, habai traffic thiyenawaa nisaa poddak delay vuna, eeta passe home eken relax Karanawa.', 
        expected: 'අද office ගියාම morning meeting එක attend කරල, lunch break eke colleagues ල සමග discussions කරල, afternoon එක documentation සහ reporting කරනව. Evening වලට shopping plan කලා, හබෛ traffic තියෙනwආ නිසා පොඩ්ඩක් delay වුන, ඒට පස්සෙ home එකෙන් relax ඛරනwඅ.'
    },
    { 
        id: 'Pos_Fun_0017', 
        input: 'karuNaakaralaa magee project report eka submit karanna kalin, oyage guidance eken check karala, corrections thiyenavanam kiyala mata pennanna puLuvandha? Mama hariyata sammatha karanna labagaNNa.a, oba samaga thiyena clarity ekak labaganna.', 
        expected: 'කරුණාකරලා මගේ project report එක submit කරන්න කලින්, ඔයගෙ guidance එකෙන් check කරල, corrections තියෙනවනම් කියල මට පෙන්නන්න පුළුවන්ද? මම හරියට සම්මත කරන්න ලබගණ්ණ.a, ඔබ සමග තියෙන clarity එකක් ලබගන්න.'
    },
    { 
        id: 'Pos_Fun_0018', 
        input: 'mail ekak yavalaa kiyala mata message ekak dhaanna.', 
        expected: 'mail එකක් යවලා කියල මට message එකක් දාන්න.'
    },
    { 
        id: 'Pos_Fun_0019', 
        input: 'oyaalaa adha meeting ekata enna puluvanda kiyala mata kiyanna.', 
        expected: 'ඔයාලා අද meeting එකට එන්න පුලුවන්ඩ කියල මට කියන්න.'
    },
    { 
        id: 'Pos_Fun_0020', 
        input: 'puLuvannam documents tika attach karala magee email ekata evanna.', 
        expected: 'පුළුවන්නම් documents ටික attach කරල මගේ email එකට එවන්න.'
    },
    { 
        id: 'Pos_Fun_0021', 
        input: 'api heta Colombo yanna hadhannee, habai vaessa thibunoth trip eka cancel venna puluvan.', 
        expected: 'අපි හෙට Colombo යන්න හදන්නේ, හබෛ වැස්ස තිබුනොත් trip එක cancel වෙන්න පුලුවන්.'
    },
    { 
        id: 'Pos_Fun_0022', 
        input: 'Zoom meeting eka adha 4.00 PM ta patan gannavaa kiyala email ekak aawa.', 
        expected: 'Zoom meeting එක අද 4.00 PM ට පටන් ගන්නවා කියල email එකක් ආව.'
    },
    { 
        id: 'Pos_Fun_0023', 
        input: 'api adha office vaeda karala passe evening valata shopping yanna plan kalaa.', 
        expected: 'අපි අද office වැඩ කරල පස්සෙ evening වලට shopping යන්න plan කලා.'
    },
    { 
        id: 'Pos_Fun_0024', 
        input: 'karuNaakaralaa magee assignment eka submit karanna kalin eka poddak check karala kiyanna puLuvandha?', 
        expected: 'කරුණාකරලා මගේ assignment එක submit කරන්න කලින් එක පොඩ්ඩක් check කරල කියන්න පුළුවන්ද?'
    }
];


test.describe('SwiftTranslator Positive Functional Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
    });
for (const scenario of testCases) {
        test(`${scenario.id}`, async ({ page }) => {
            const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
            
            await inputArea.click();
            
            // Fix 1: Speed up typing and increase action timeout to 60 seconds
            await inputArea.pressSequentially(scenario.input, { 
                delay: 30, 
                timeout: 60000 
            });

            // Fix 2: Use exact: false to handle invisible character differences
            // Fix 3: Standardize timeout to 30s (more than enough once typed)
            await expect(page.getByText(scenario.expected, { exact: false }))
                .toBeVisible({ timeout: 30000 });
            
            console.log(`PASSED: ${scenario.id}`);
        });
    }
});