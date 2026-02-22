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
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    actionType: 'match',
  },
  {
    id: '2',
    name: 'Kristin Watson',
    streak: 15,
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    actionType: 'match',
  },
  {
    id: '3',
    name: 'Eleanor Pena',
    streak: 32,
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    actionType: 'match',
  },
  {
    id: '4',
    name: 'Kathryn Murphy',
    streak: 9,
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop',
    actionType: 'match',
  },
  {
    id: '5',
    name: 'Darrell Steward',
    streak: 18,
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
    actionType: 'match',
  },
  {
    id: '6',
    name: 'Darlene Robertson',
    streak: 7,
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    actionType: 'match',
  },
];

export const alreadyHelped: CommunityUser[] = [
  {
    id: '7',
    name: 'Eleanor Pena',
    streak: 40,
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    actionType: 'points',
    points: 80,
  },
  {
    id: '8',
    name: 'Arlene McCoy',
    streak: 28,
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    actionType: 'points',
    points: 80,
  },
  {
    id: '9',
    name: 'Jerome Bell',
    streak: 22,
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    actionType: 'points',
    points: 80,
  },
];
