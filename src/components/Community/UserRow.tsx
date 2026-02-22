import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { CommunityUser } from '../../data/mockCommunityData';
import { FireIcon, StarIcon } from '../Icons/Icons';

interface UserRowProps {
    user: CommunityUser;
    index: number;
}

export const UserRow: React.FC<UserRowProps> = ({ user, index }) => {
    const isAlternate = index % 2 !== 0;

    return (
        <View className={`flex-row items-center justify-between px-6 py-4 ${isAlternate ? 'bg-[#F9FAFB]' : 'bg-white'}`}>
            <View className="flex-row items-center">
                <Image
                    source={{ uri: user.imageUrl }}
                    className="w-[52px] h-[52px] rounded-full bg-gray-200"
                />

                <View className="justify-center ml-4">
                    <Text className="text-[17px] font-outfit-bold text-[#111111] mb-[2px]">
                        {user.name}
                    </Text>
                    <View className="flex-row items-center">
                        <FireIcon size={14} color="#2B65F9" />
                        <Text className="text-[14px] font-jakarta-medium text-[#737373] ml-1.5 mt-0.5">
                            {user.streak}-day streak
                        </Text>
                    </View>
                </View>
            </View>

            {user.actionType === 'match' ? (
                <TouchableOpacity className="px-5 py-2 rounded-lg border border-[#2B65F9] bg-[#F4F7FF]">
                    <Text className="text-[#2B65F9] font-outfit-semibold text-[14px]">Match</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity className="flex-row items-center px-3 py-2 rounded-lg border border-[#3ECC62] bg-[#F2FCF5]">
                    <StarIcon size={14} color="#3ECC62" />
                    <Text className="text-[#3ECC62] font-outfit-semibold text-[14px] ml-1.5">{user.points} pts</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};
