const { test, expect } = require('@playwright/test');

const negativeCases = [
    { 
        id: 'Neg_Fun_0001', 
        desc: 'Standard Singlish Input', 
        input: 'mata karapu udhavvata oyaata godak pin.', 
        expected: 'මට කරපු උදව්වට ඔයාට ගොඩක් පින්.' 
    },
    { 
        id: 'Neg_Fun_0002',  
        desc: 'English Slang Persistence', 
        input: 'magee account eka ban velaanee', 
        expected: 'මගේ account එක bann වෙලානේ' 
    },
    { 
        id: 'Neg_Fun_0003', 
        desc: 'URL and Web Link Handling', 
        input: 'karuNaakaralaa mee link eka balanna. https://www.swifttranslator.com/ meeka thamayi oyaagee vaedeeta hariyana website eka.', 
        expected: 'කරුණාකරලා මේ link එක බලන්න. https://www.swifttranslator.com/ මේක තමයි ඔයාගේ වැඩේට හරියන website එක.   ' 
    },
    { 
        id: 'Neg_Fun_0004', 
        desc: 'Technical Terminology', 
        input: 'me dhavas vala mama Springboot igenaganimin innee.', 
        expected: 'මේ දවස් වල මම Springboot ඉගෙනගනිමින් ඉන්නේ.' 
    },
    { 
        id: 'Neg_Fun_0005', 
        desc: 'Brand Names Persistence', 
        input: 'mama Iphone ekak gaththa palaveni vathaava nisaa thaama meeka mata huru naehae.', 
        expected: 'මම Iphone එකක් ගත්ත පලවෙනි වතාව නිසා තාම මේක මට හුරු නැහැ.' 
    },
    { 
        id: 'Neg_Fun_0006', 
        desc: 'Email Address Consistency', 
        input: 'karuNaakaralaa mee documents tika testuser123@gmail.com ekata send karanna', 
        expected: 'කරුණාකරලා මේ documents ටික testuser123@gmail.com එකට send කරන්න' 
    },
    { 
        id: 'Neg_Fun_0007', 
        desc: 'Mixed Language Abbreviations', 
        input: 'subapaethum! oba apagee abc aayathanayata theerii pathva aetha', 
        expected: 'සුබපැතුම්! ඔබ අපගේ abc ආයතනයට තේරී පත්ව ඇත' 
    },
    { 
        id: 'Neg_Fun_0008', 
        desc: 'Social Media Hashtag Handling', 
        input: 'mee post eka #NewProject kiyala tag karala share karanna', 
        expected: '#මේ post එක #NewProject කියල tag කරල share කරන්න' 
    },
    { 
        id: 'Neg_Fun_0009', 
        desc: 'Lowercase Brand Integration', 
        input: 'api nimalgee birthday gift ekata nike sapaththu dhekak dhemudha?', 
        expected: 'nඅපි නිමල්ගේ birthday gift එකට nike සපත්තු දෙකක් දෙමුද?' 
    },
    { 
        id: 'Neg_Fun_0010', 
        desc: 'Irregular Case Sensitivity', 
        input: 'MaMa AdHa GeDhArA eDhDhI TiKaK RaA VeI', 
        expected: 'මම අද ගෙදර එද්දි ටිකක් රැ වෙයි.' 
    }
];

test.describe('SwiftTranslator Negative Functional Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });
    });

    for (const scenario of negativeCases) {
        test(`${scenario.id}: ${scenario.desc}`, async ({ page }) => {
            const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
            
            await inputArea.click();
            // pressSequentially triggers the conversion engine correctly
            await inputArea.pressSequentially(scenario.input, { delay: 35 });

            // check for the expected output string to be visible on the page
            await expect(page.getByText(scenario.expected, { exact: false })).toBeVisible({ timeout: 15000 });
            
            console.log(`PASSED: ${scenario.id}`);
        });
    }
});