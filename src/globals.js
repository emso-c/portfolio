//const MediumFeedJSONURL = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@emirsoyalan79'
export const mediumFeedJSONURL = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@asis.garcia'

export const texts = {
    header: {
        navbar: {
            profile:{
                TR: 'PROFİL',
                EN: 'PROFILE',
            },
            projects:{
                TR: 'PROJELER',
                EN: 'PROJECTS',
            },
            blog:{
                TR: 'BLOG',
                EN: 'BLOG',
            },
            contact:{
                TR: 'İLETİŞİM',
                EN: 'CONTACT',
            }
        }
    },
    body: {
        blog: {
            readMore: {
                TR: 'OKUMAYA DEVAM ET',
                EN: 'READ MORE'
            }
        }
    },
    footer: {}
}

export const getText = (text, lang) => {
    if(lang === 'tr'){
        return text.TR;
    }
    else if (lang === 'en'){
        return text.EN;
    }
    throw new Error('Language not supported');
} 