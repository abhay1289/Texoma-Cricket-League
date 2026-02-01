import { Sport, Tournament, PricingTier, Testimonial } from './types';

export const DIVISIONS: Sport[] = [
    {
        id: '1',
        name: 'Premier League',
        icon: '🏏',
        description: 'The pinnacle of regional cricket excellence. Professional turf pitches, elite T20 leagues, and full digital scoring infrastructure.',
        image: '/premier-league.png'
    },
    {
        id: '2',
        name: 'Junior Academy',
        icon: '🎓',
        description: 'Developing the next generation of cricket stars. Age-group programs from U-8 to U-16 with certified coaching.',
        image: '/junior-academy.png'
    },
    {
        id: '3',
        name: 'Weekend Warriors',
        icon: '⭐',
        description: 'Recreational cricket for adults who love the game. Flexible scheduling which fits around your lifestyle.',
        image: '/weekend-warriors.png'
    },
    {
        id: '4',
        name: 'Indoor Cricket',
        icon: '🏠',
        description: 'Year-round cricket action in our climate-controlled indoor facility. Perfect for training and winter leagues.',
        image: '/indoor-cricket.png'
    },
    {
        id: '5',
        name: 'Corporate League',
        icon: '🏢',
        description: 'Team building through cricket. Company leagues, tournaments, and networking events on the pitch.',
        image: '/corporate-league.png'
    },
    {
        id: '6',
        name: 'Private Coaching',
        icon: '🎯',
        description: 'One-on-one sessions with elite coaches to refine technique and master the mental game.',
        image: '/private-coaching.png'
    },
];

export const TOURNAMENTS: Tournament[] = [
    {
        id: 'spring-championship-2025',
        title: 'TCL Spring Championship 2025',
        date: 'March 15-22, 2025',
        sport: 'Cricket',
        format: 'T20',
        ageGroup: 'U-10, U-12, U-14, U-16',
        venue: 'Sports Texoma Main Oval',
        fee: 175,
        teamsRegistered: 20,
        teamsTotal: 32,
        status: 'open',
        featured: true,
        image: '/tournament-spring.png'
    },
    {
        id: 'junior-league-cup',
        title: 'Junior League Cup',
        date: 'April 5-6, 2025',
        sport: 'Cricket',
        format: 'Pairs Cricket',
        ageGroup: 'U-8, U-10',
        venue: 'Sports Texoma Practice Grounds',
        fee: 100,
        teamsRegistered: 12,
        teamsTotal: 16,
        status: 'open',
        image: '/tournament-junior.png'
    },
    {
        id: 'summer-sixes',
        title: 'Summer Sixes Tournament',
        date: 'May 24-25, 2025',
        sport: 'Cricket',
        format: '6-a-side',
        ageGroup: 'U-12, U-14, U-16',
        venue: 'Sports Texoma Arena',
        fee: 150,
        teamsRegistered: 10,
        teamsTotal: 12,
        status: 'closing_soon',
        image: '/tournament-summer.png'
    },
    {
        id: 'monsoon-t20',
        title: 'Monsoon T20 Bash',
        date: 'June 14-15, 2025',
        sport: 'Cricket',
        format: 'T20',
        ageGroup: 'U-10, U-12',
        venue: 'Sports Texoma Main Oval',
        fee: 125,
        teamsRegistered: 0,
        teamsTotal: 16,
        status: 'coming_soon',
        image: '/tournament-monsoon.png'
    },
    {
        id: 'u14-finals-live',
        title: 'U-14 Spring Championship Finals',
        date: 'LIVE NOW',
        sport: 'Cricket',
        format: 'T20',
        ageGroup: 'U-14',
        venue: 'Main Oval',
        fee: 0,
        teamsRegistered: 2,
        teamsTotal: 2,
        status: 'live',
        image: '/tournament-finals.png'
    }
];

export const PRICING_TIERS: PricingTier[] = [
    {
        id: '1',
        name: 'Individual',
        price: '$45',
        period: 'per month',
        features: ['Access to practice facilities', 'Discounted tournament entry', 'Personal player profile', 'Community event access']
    },
    {
        id: '2',
        name: 'Family',
        price: '$125',
        period: 'per month',
        isPremium: true,
        features: ['Up to 4 family members', 'Priority court booking', '2 Private coaching sessions', 'VIP seating at tournaments', '15% Pro Shop discount']
    },
    {
        id: '3',
        name: 'Team Affiliate',
        price: '$850',
        period: 'per season',
        features: ['Full team registration', 'Guaranteed field availability', 'Team analytics portal', 'End-of-season banquet']
    },
];

export const TESTIMONIALS: Testimonial[] = [
    { id: '1', name: 'Kabir Singh', role: 'Premier League All-Rounder', text: 'The pitch preparation at Texoma is easily the best in the state. Consistent bounce and true carry, exactly what a serious cricketer needs.', rating: 5, avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    { id: '2', name: 'Sarah Mitchell', role: 'Junior Academy Parent', text: 'TCL is more than just cricket. It is a growing community where my children are developing discipline and sportsmanship that goes beyond the pitch.', rating: 5, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    { id: '3', name: 'David Thompson', role: 'Weekend Warriors Captain', text: 'The professional management and welcoming atmosphere makes every weekend match a highlight for our team.', rating: 5, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
];

export const GALLERY_IMAGES = [
    '/gallery-action.png',
    '/gallery-batsman.png',
    '/gallery-celebration.png',
    '/gallery-pitch.png',
    '/gallery-wicket.png',
    '/gallery-crowd.png',
];
