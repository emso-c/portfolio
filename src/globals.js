//const MediumFeedJSONURL = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@emirsoyalan79'
export const mediumFeedJSONURL = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@asis.garcia'

//const exp_year = new Date().getFullYear() - 2015
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
            },
            support:{
                TR: 'DESTEK',
                EN: 'SUPPORT',
            }
        }
    },
    body: {
        blog: {
            readMore: {
                TR: 'OKUMAYA DEVAM ET',
                EN: 'READ MORE'
            }
        },
        profile: {
            occupation: {
                TR: 'Yazılım Mühendisi',
                EN: 'Software Engineer'
            },
            interests: {
                TR: '#webgeliştirme #veribilimi #yapayzeka',
                EN: '#webdevelopment #datascience #ai'
            },
            technologies: {
                TR: 'Teknolojiler',
                EN: 'Technologies'
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