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
            title: {
                TR: 'Blog',
                EN: 'Blog',
            },
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
        },
        projects: {
            title: {
                TR: 'Projeler',
                EN: 'Projects',
            },
            projects: [
                {
                    name: 'Stream Analyser',
                    link: 'https://github.com/emso-c/stream-analyser',
                    tags: {
                        TR: ['Veri Analizi', 'Python', 'Doğal Dil İşleme'],
                        EN: ['Data Analysis', 'Python', 'Natural Language Processing']
                    },
                    date: {
                        TR: 'Mar 2021',
                        EN: 'Mar 2021'
                    },
                    description: {
                        TR: 'Stream Analyser, canlı yayın akışlarını analiz eden, önemli anları yoğunluklarına göre tespit edip sınıflandıran, anahtar kelimeleri bulan ve hatta içeriği tahmin eden, son derece yapılandırılabilir bir veri analizi aracıdır. Ayrıca verileri görselleştirmek ve çıktı almak için çeşitli yollar sunar. Önemli anların zaman damgaları sohbet akışının frekansına göre belirlenir ve anahtar kelime çıkarma işlemi Doğal Dil İşleme kullanılarak yapılır. Paket saf Python ile yazılmıştır.',
                        EN: 'Stream Analyser is a highly configurable data analysis tool that analyses live streams, detects and classifies highlights based on their intensity, finds keywords, and even guesses contexts. It also offers various ways to visualize the data and get the output. The highlight timestamps are determined by the chat frequency and keyword extraction is done by using Natural Language Processing. The package is written in pure Python.',
                    },  
                },
                {
                    name: 'KNN Classifier',
                    link: 'https://github.com/emso-c/KNN-classifier',
                    tags: {
                        TR: ['İstatistik', 'Makine Öğrenmesi', 'Python'],
                        EN: ['Statistics', 'Machine Learning', 'Python']
                    },
                    date: {
                        TR: 'May 2022',
                        EN: 'May 2022'
                    },
                    description: {
                        TR: 'KNN Classifier, görselleştirme için Matplotlib dışında herhangi bir üçüncü parti kütüphane kullanılmadan sıfırdan yazılmış bir K-En Yakın Komşu algoritmasıdır. Ayrıca belirli bir veri seti için en iyi k değerini tespit edebilir. Algoritma çeşitli popüler veri setleri üzerinde test edilmiş ve sonuçlar repository\'de yayınlanmıştır.',
                        EN: 'KNN Classifier is a K-Nearest Neighbors algorithm written from scratch without using any third party libraries except Matplotlib for visualization. It can also detect best k value for a given dataset. The algorithm is tested on various popular datasets and the results are published in the repository.',
                    },  
                }
            ]
        },
        contact: {
            title: {
                TR: 'İletişim',
                EN: 'Contact',
            },
            email: 'emirsoyalan79@gmail.com',
            phone: '+90 538 305 94 79',
            address: 'Istanbul / Türkiye',
            github: 'github.com/emso-c',
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