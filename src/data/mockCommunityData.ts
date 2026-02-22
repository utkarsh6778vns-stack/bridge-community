export type UserActionType = 'match' | 'points';

export interface CommunityUser {
  id: string;
  name: string;
  streak: number;
  imageUrl: string;
  actionType: UserActionType;
  points?: number;
}

export const usersToMatch: CommunityUser[] = [
  {
    id: '1',
    name: 'Brooklyn Simmons',
    streak: 21,
    imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    actionType: 'match',
  },
  {
    id: '2',
    name: 'Kristin Watson',
    streak: 15,
    imageUrl: 'https://randomuser.me/api/portraits/men/46.jpg',
    actionType: 'match',
  },
  {
    id: '3',
    name: 'Eleanor Pena',
    streak: 32,
    imageUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
    actionType: 'match',
  },
  {
    id: '4',
    name: 'Kathryn Murphy',
    streak: 9,
    imageUrl: 'https://randomuser.me/api/portraits/women/65.jpg',
    actionType: 'match',
  },
  {
    id: '5',
    name: 'Darrell Steward',
    streak: 18,
    imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    actionType: 'match',
  },
  {
    id: '6',
    name: 'Darlene Robertson',
    streak: 7,
    imageUrl: 'https://randomuser.me/api/portraits/men/11.jpg',
    actionType: 'match',
  },
];

export const alreadyHelped: CommunityUser[] = [
  {
    id: '7',
    name: 'Eleanor Pena',
    streak: 40,
    imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    actionType: 'points',
    points: 80,
  },
  {
    id: '8',
    name: 'Arlene McCoy',
    streak: 28,
    imageUrl: 'https://randomuser.me/api/portraits/men/46.jpg',
    actionType: 'points',
    points: 80,
  },
  {
    id: '9',
    name: 'Jerome Bell',
    streak: 22,
    imageUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
    actionType: 'points',
    points: 80,
  },
];
