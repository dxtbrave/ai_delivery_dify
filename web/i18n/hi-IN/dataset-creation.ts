const translation = {
  steps: {
    header: {
      creation: 'ज्ञान बनाएं',
      update: 'डेटा जोड़ें',
    },
    one: 'डेटा स्रोत चुनें',
    two: 'पाठ पूर्व-प्रसंस्करण और सफाई',
    three: 'निष्पादित करें और समाप्त करें',
  },
  error: {
    unavailable: 'यह ज्ञान उपलब्ध नहीं है',
  },
  firecrawl: {
    configFirecrawl: '🔥फायरक्रॉल को कॉन्फ़िगर करें',
    apiKeyPlaceholder: 'firecrawl.dev से API कुंजी',
    getApiKeyLinkText: 'firecrawl.dev से अपनी API कुंजी प्राप्त करें',
  },
  stepOne: {
    filePreview: 'फ़ाइल पूर्वावलोकन',
    pagePreview: 'पृष्ठ पूर्वावलोकन',
    dataSourceType: {
      file: 'फ़ाइल से आयात करें',
      notion: 'नोटियन से सिंक करें',
      web: 'वेबसाइट से सिंक करें',
    },
    uploader: {
      title: 'फ़ाइल अपलोड करें',
      button: 'फ़ाइल खींचें और छोड़ें, या',
      browse: 'ब्राउज़ करें',
      tip: 'समर्थित {{supportTypes}}। प्रत्येक अधिकतम {{size}}MB।',
      validation: {
        typeError: 'फ़ाइल प्रकार समर्थित नहीं है',
        size: 'फ़ाइल बहुत बड़ी है। अधिकतम {{size}}MB है',
        count: 'एकाधिक फ़ाइलें समर्थित नहीं हैं',
        filesNumber: 'आपने {{filesNumber}} की बैच अपलोड सीमा तक पहुँच गए हैं।',
      },
      cancel: 'रद्द करें',
      change: 'बदलें',
      failed: 'अपलोड विफल रहा',
    },
    notionSyncTitle: 'नोटियन कनेक्ट नहीं है',
    notionSyncTip:
      'नोटियन से सिंक करने के लिए, पहले नोटियन से कनेक्शन स्थापित होना चाहिए।',
    connect: 'कनेक्ट करने जाएं',
    button: 'अगला',
    emptyDatasetCreation: 'मैं एक खाली ज्ञान बनाना चाहता हूं',
    modal: {
      title: 'एक खाली ज्ञान बनाएं',
      tip: 'एक खाली ज्ञान में कोई दस्तावेज़ नहीं होगा, और आप कभी भी दस्तावेज़ अपलोड कर सकते हैं।',
      input: 'ज्ञान का नाम',
      placeholder: 'कृपया दर्ज करें',
      nameNotEmpty: 'नाम खाली नहीं हो सकता',
      nameLengthInvalid: 'नाम 1 से 40 वर्णों के बीच होना चाहिए',
      cancelButton: 'रद्द करें',
      confirmButton: 'बनाएं',
      failed: 'बनाना विफल रहा',
    },
    website: {
      fireCrawlNotConfigured: 'फायरक्रॉल कॉन्फ़िगर नहीं किया गया है',
      fireCrawlNotConfiguredDescription:
        'इसे उपयोग करने के लिए फायरक्रॉल को API कुंजी के साथ कॉन्फ़िगर करें।',
      configure: 'कॉन्फ़िगर करें',
      run: 'चलाएं',
      firecrawlTitle: '🔥फायरक्रॉल के साथ वेब सामग्री निकालें',
      firecrawlDoc: 'फायरक्रॉल दस्तावेज़',
      firecrawlDocLink:
        'https://docs.dify.ai/guides/knowledge-base/sync_from_website',
      options: 'विकल्प',
      crawlSubPage: 'उप-पृष्ठों को क्रॉल करें',
      limit: 'सीमा',
      maxDepth: 'अधिकतम गहराई',
      excludePaths: 'पथों को बाहर रखें',
      includeOnlyPaths: 'केवल पथों को शामिल करें',
      extractOnlyMainContent:
        'केवल मुख्य सामग्री निकालें (कोई हैडर, नेव्स, फुटर आदि नहीं)',
      exceptionErrorTitle: 'फायरक्रॉल जॉब चलाते समय एक अपवाद हुआ:',
      unknownError: 'अज्ञात त्रुटि',
      totalPageScraped: 'कुल पृष्ठ स्क्रैप किए गए:',
      selectAll: 'सभी चुनें',
      resetAll: 'सभी रीसेट करें',
      scrapTimeInfo: 'कुल {{total}} पृष्ठों को {{time}}s में स्क्रैप किया गया',
      preview: 'पूर्वावलोकन',
      maxDepthTooltip:
        'प्रविष्ट URL के सापेक्ष क्रॉल करने की अधिकतम गहराई। गहराई 0 केवल प्रविष्ट url का पृष्ठ स्क्रैप करता है, गहराई 1 url और प्रविष्टURL + एक / के बाद सब कुछ स्क्रैप करता है, और इसी तरह।',
    },
  },
  stepTwo: {
    segmentation: 'खंड सेटिंग्स',
    auto: 'स्वचालित',
    autoDescription:
      'स्वचालित रूप से खंड और पूर्व-प्रसंस्करण नियम सेट करें। अपरिचित उपयोगकर्ताओं को यह चुनने की सिफारिश की जाती है।',
    custom: 'कस्टम',
    customDescription:
      'कस्टमाइज खंड नियम, खंड लंबाई, और पूर्व-प्रसंस्करण नियम आदि।',
    separator: 'खंड पहचानकर्ता',
    separatorPlaceholder:
      'उदाहरण के लिए, नया लाइन (\\\\n) या विशेष विभाजक (जैसे "***")',
    maxLength: 'अधिकतम खंड लंबाई',
    overlap: 'खंड ओवरलैप',
    overlapTip:
      'खंड ओवरलैप सेट करने से उनके बीच की सांविधानिक प्रासंगिकता बनाए रखी जा सकती है, पुनः प्राप्ति प्रभाव को बढ़ाया जा सकता है। 10%-25% अधिकतम खंड आकार सेट करने की सिफारिश की जाती है।',
    overlapCheck: 'खंड ओवरलैप अधिकतम खंड लंबाई से बड़ा नहीं होना चाहिए',
    rules: 'पाठ पूर्व-प्रसंस्करण नियम',
    removeExtraSpaces:
      'लगातार रिक्त स्थान, नए लाइन और टैब्स को प्रतिस्थापित करें',
    removeUrlEmails: 'सभी URL और ईमेल पतों को हटाएं',
    removeStopwords: 'रुकावट शब्द जैसे "a", "an", "the" हटाएं',
    preview: 'पुष्टि करें और पूर्वावलोकन करें',
    reset: 'रीसेट',
    indexMode: 'इंडेक्स मोड',
    qualified: 'उच्च गुणवत्ता',
    recommend: 'सिफारिश करें',
    qualifiedTip:
      'उपयोगकर्ताओं के प्रश्नों के दौरान उच्च सटीकता प्रदान करने के लिए डिफ़ॉल्ट सिस्टम एम्बेडिंग इंटरफेस को कॉल करें।',
    warning: 'कृपया पहले मॉडल प्रदाता API कुंजी सेट करें।',
    click: 'सेटिंग्स पर जाएं',
    economical: 'आर्थिक',
    economicalTip:
      'ऑफ़लाइन वेक्टर इंजन, कीवर्ड इंडेक्स आदि का उपयोग करके सटीकता को कम करें बिना टोकन खर्च किए',
    QATitle: 'प्रश्न और उत्तर प्रारूप में खंड करना',
    QATip: 'इस विकल्प को सक्षम करने से अधिक टोकन खर्च होंगे',
    QALanguage: 'का उपयोग करके खंड करना',
    estimateCost: 'अनुमानित लागत',
    estimateSegment: 'अनुमानित खंड',
    segmentCount: 'खंड',
    calculating: 'गणना कर रहा है...',
    fileSource: 'दस्तावेज़ों को पूर्व-प्रसंस्करण करें',
    notionSource: 'पृष्ठों को पूर्व-प्रसंस्करण करें',
    websiteSource: 'वेबसाइट को पूर्व-प्रसंस्करण करें',
    other: 'और अन्य ',
    fileUnit: ' फ़ाइलें',
    notionUnit: ' पृष्ठ',
    webpageUnit: ' पृष्ठ',
    previousStep: 'पिछला कदम',
    nextStep: 'सहेजें और संसाधित करें',
    save: 'सहेजें और संसाधित करें',
    cancel: 'रद्द करें',
    sideTipTitle: 'खंड और पूर्व-प्रसंस्करण क्यों करें?',
    sideTipP1:
      'पाठ डेटा को संसाधित करते समय, खंड और सफाई दो महत्वपूर्ण पूर्व-प्रसंस्करण चरण हैं।',
    sideTipP2:
      'खंड लंबे पाठ को पैराग्राफ में विभाजित करता है ताकि मॉडल बेहतर समझ सके। यह मॉडल परिणामों की गुणवत्ता और प्रासंगिकता में सुधार करता है।',
    sideTipP3:
      'सफाई अनावश्यक वर्णों और स्वरूपों को हटाती है, ज्ञान को साफ और सरल बनाने में मदद करती है।',
    sideTipP4:
      'उचित खंड और सफाई मॉडल प्रदर्शन में सुधार करती है, अधिक सटीक और मूल्यवान परिणाम प्रदान करती है।',
    previewTitle: 'पूर्वावलोकन',
    previewTitleButton: 'पूर्वावलोकन',
    previewButton: 'प्रश्न-उत्तर प्रारूप में स्विच करना',
    previewSwitchTipStart:
      'वर्तमान खंड पूर्वावलोकन पाठ प्रारूप में है, प्रश्न-उत्तर प्रारूप में स्विच करने से',
    previewSwitchTipEnd: ' अतिरिक्त टोकन खर्च होंगे',
    characters: 'वर्ण',
    indexSettingTip: 'इंडेक्स विधि बदलने के लिए, कृपया जाएं ',
    retrievalSettingTip: 'इंडेक्स विधि बदलने के लिए, कृपया जाएं ',
    datasetSettingLink: 'ज्ञान सेटिंग्स।',
  },
  stepThree: {
    creationTitle: '🎉 ज्ञान बनाया गया',
    creationContent:
      'हमने स्वचालित रूप से ज्ञान का नाम रखा है, आप इसे किसी भी समय संशोधित कर सकते हैं',
    label: 'ज्ञान का नाम',
    additionTitle: '🎉 दस्तावेज़ अपलोड किया गया',
    additionP1: 'दस्तावेज़ ज्ञान में अपलोड किया गया है',
    additionP2: ', आप इसे ज्ञान की दस्तावेज़ सूची में पा सकते हैं।',
    stop: 'प्रसंस्करण रोकें',
    resume: 'प्रसंस्करण फिर से शुरू करें',
    navTo: 'दस्तावेज़ पर जाएं',
    sideTipTitle: 'आगे क्या करना है',
    sideTipContent:
      'दस्तावेज़ को इंडेक्स करने के बाद, ज्ञान को एप्लिकेशन में संदर्भ के रूप में एकीकृत किया जा सकता है, आप संदर्भ सेटिंग को प्रॉम्प्ट ऑर्केस्ट्रेशन पृष्ठ पर पा सकते हैं। आप इसे रिलीज़ के लिए एक स्वतंत्र ChatGPT इंडेक्सिंग प्लगइन के रूप में भी बना सकते हैं।',
    modelTitle: 'क्या आप एम्बेडिंग को रोकने के लिए सुनिश्चित हैं?',
    modelContent:
      'यदि आपको बाद में फिर से प्रसंस्करण करने की आवश्यकता है, तो आप जहां से छोड़े थे वहीं से जारी रखेंगे।',
    modelButtonConfirm: 'पुष्टि करें',
    modelButtonCancel: 'रद्द करें',
  },
}

export default translation
