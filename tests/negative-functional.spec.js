const { test, expect } = require('@playwright/test');

const negativeCases = [
    { 
        id: 'Neg_Fun_0001', 
        desc: 'Standard Singlish Input', 
        input: 'mmama kadeeta yanawaa. oyath enawadha? ', 
        expected: 'මම කඩේට යනවා. ඔයත් එනවද? ' 
    },
    { 
        id: 'Neg_Fun_0002',  
        desc: 'English Slang Persistence', 
        input: 'oyaa poddak balannako?? adha meeting eka 3.45 PM ta patan gannavaa kiyala kiyala thibuna namuth sure naee!!', 
        expected: 'ඔයා පොඩ්ඩක් බලන්නකො?? අද meeting එක 3.45 PM ට පටන් ගන්නවා කියල කියල තිබුන නමුත් sure නෑ!!' 
    },
    { 
        id: 'Neg_Fun_0003', 
        desc: 'URL and Web Link Handling', 
        input: 'mata adha IT team eken ASAP update ekak oonee kiyala kivvaa, habai ehema reply ekak Email valin enne naee.', 
        expected: 'මට අද IT team එකෙන් ASAP update එකක් ඕනේ කියල කිව්වා, හැබැයි එහෙම reply එකක් Email වලින් එන්නෙ නෑදෑ ' 
    },
    { 
        id: 'Neg_Fun_0004', 
        desc: 'Technical Terminology', 
        input: 'mama potha8k kiyavanavaa', 
        expected: 'මම පොත8ක් කියවනවා' 
    },
    { 
        id: 'Neg_Fun_0005', 
        desc: 'Brand Names Persistence', 
        input: 'ado adha report version 2.0 eka ready kiyala kivva, namuth file eka upload vela thiyenney naee, 5.00 PM wenakan balala kiyanna puluvanda?', 
        expected: 'ado අද report version 2.0 එක ready කියල කිව්ව, නමුත් file එක upload වෙල තියෙන්නෙය් නෑ, 5.00 PM wඑනකන් බලල කියන්න පුලුවන්ඩ?' 
    },
    { 
        id: 'Neg_Fun_0006', 
        desc: 'Email Address Consistency', 
        input: 'hari hari hari hari hari hari hondhatama athi. ', 
        expected: 'හරි හොන්දටම එති.' 
    },
    { 
        id: 'Neg_Fun_0007', 
        desc: 'Mixed Language Abbreviations', 
        input: 'oyaa 2026-02-14 ta trip eka confirm kala kiyala message ekak aava, namuth location details Google Maps link ekak vidihata thibune naee kiyala therenavaa.', 
        expected: 'ඔයා 2026-02-14 ට trip එක confirm කල කියල message එකක් ආව, නමුත් location details Google Maps link එකක් විඩිහට තිබුනෙ නෑ කියල තෙරෙනවා.' 
    },
    { 
        id: 'Neg_Fun_0008', 
        desc: 'Social Media Hashtag Handling', 
        input: 'oyaa??. gedhara enavadha!!', 
        expected: 'ඔයා?. ගෙදර එනවද!' 
    },
    { 
        id: 'Neg_Fun_0009', 
        desc: 'Lowercase Brand Integration', 
        input: 'ado machan me project eka hari amarui kiyala hithenavaa,mokada requirements venaa venaa vidihata change venavaa.client eka hariyata explain karanne naee,documents tika incomplete,emails valata reply enne late,meeting valadi decisions clear naee,eka nisaa full confusion ekak thiyenavaa kiyala kiyanna puluvan.', 
        expected: 'ado මචන් මෙ project එක හරි අමරුඉ කියල හිතෙනවා,මොකඩ requirements වෙනා වෙනා විඩිහට change වෙනවා.client එක හරියට explain කරන්නේ නෑ,documents ටික incomplete,emails වලට reply එන්නෙ late,meeting වලඩි decisions clear නෑ,එක නිසා full confusion එකක් තියෙනවා කියල කියන්න පුලුවන්.' 
    },
    
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