import australia from './assets/flags/australia.png'
import brazil from './assets/flags/brazil.png'
import canada from './assets/flags/canada.png'
import france from './assets/flags/france.png'
import germany from './assets/flags/germany.png'
import india from './assets/flags/india.png'
import japan from './assets/flags/japan.png'
import mexico from './assets/flags/mexico.png'
import south_africa from './assets/flags/south_africa.png'
import usa from './assets/flags/usa.png'

const countries = [
    {
        name: 'USA 🇺🇸',
        flag: usa,
        difficulty: 'easy',
        answers: ['united states', 'america', 'usa', 'us']
    },
    {
        name: 'Canada 🇨🇦',
        flag: canada,
        difficulty: 'easy',
        answers: ['canada', 'ca']
    },
    {
        name: 'France 🇫🇷',
        flag: france,
        difficulty: 'easy',
        answers: ['france', 'fr']
    },
    {
        name: 'Mexico 🇲🇽',
        flag: mexico,
        difficulty: 'easy',
        answers: ['mexico', 'mx']
    },
    {
        name: 'Brazil 🇧🇷',
        flag: brazil,
        difficulty: 'medium',
        answers: ['brazil', 'br']
    },
    {
        name: 'Japan 🇯🇵',
        flag: japan,
        difficulty: 'medium',
        answers: ['japan', 'jp']
    },
    {
        name: 'Germany 🇩🇪',
        flag: germany,
        difficulty: 'medium',
        answers: ['germany', 'de']
    },
    {
        name: 'India 🇮🇳',
        flag: india,
        difficulty: 'hard',
        answers: ['india', 'in']
    },
    {
        name: 'Australia 🇦🇺',
        flag: australia,
        difficulty: 'hard',
        answers: ['australia', 'au']
    },
    {
        name: 'South Africa 🇿🇦',
        flag: south_africa,
        difficulty: 'hard',
        answers: ['south africa', 'za', 'southafrica']
    }
]

export default countries;