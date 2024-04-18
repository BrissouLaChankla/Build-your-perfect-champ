const getRandomChamps = obj => {
    var keys = Object.keys(obj);
    return obj[keys[keys.length * Math.random() << 0]];
};

const languages = [
    { languageCode: "en_US", languageName: "English", countryCode: "US" },
    { languageCode: "fr_FR", languageName: "French", countryCode: "FR" },
    { languageCode: "es_AR", languageName: "Spanish", countryCode: "AR" },
    { languageCode: "de_DE", languageName: "German", countryCode: "DE" },
    { languageCode: "pl_PL", languageName: "Polish", countryCode: "PL" },
    { languageCode: "it_IT", languageName: "Italian", countryCode: "IT" },
    { languageCode: "cs_CZ", languageName: "Czech", countryCode: "CZ" },
    { languageCode: "el_GR", languageName: "Greek", countryCode: "GR" },
    { languageCode: "hu_HU", languageName: "Hungarian", countryCode: "HU" },
    { languageCode: "ja_JP", languageName: "Japanese", countryCode: "JP" },
    { languageCode: "ko_KR", languageName: "Korean", countryCode: "KR" },
    { languageCode: "pt_BR", languageName: "Portuguese", countryCode: "BR" },
    { languageCode: "ro_RO", languageName: "Romanian", countryCode: "RO" },
    { languageCode: "ru_RU", languageName: "Russian", countryCode: "RU" },
    { languageCode: "th_TH", languageName: "Thai", countryCode: "TH" },
    { languageCode: "tr_TR", languageName: "Turkish", countryCode: "TR" },
    { languageCode: "vi_VN", languageName: "Vietnamese", countryCode: "VN" },
    { languageCode: "zh_CN", languageName: "Chinese", countryCode: "CN" },
];


const getLanguage = () => {

    // get chosen language OR browser language OR english
    if(localStorage.getItem('selectedLanguage')) {
        return localStorage.getItem('selectedLanguage');
    }

    const browserLang = navigator.language || navigator.userLanguage || "en_US";

  
    const result = languages.find(el => el.languageCode.includes(browserLang))?.languageCode;
    if (!!result) {
        return result;
    }

    return "en_US";
}

export default { getRandomChamps, getLanguage, languages }