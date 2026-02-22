import React from 'react';
import { View, Text, ScrollView, SafeAreaView, StatusBar, Platform } from 'react-native';
import { usersToMatch, alreadyHelped } from '../data/mockCommunityData';
import { UserRow } from '../components/Community/UserRow';
import { BottomTabBar } from '../components/Community/BottomTabBar';

export default function CommunityScreen() {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <StatusBar barStyle="dark-content" />

            {/* Header section */}
            <View className="px-6 pt-16 pb-2">
                <Text className="text-[22px] font-outfit-semibold text-[#010101] leading-tight">
                    Community
                </Text>
                <Text className="text-[16px] font-outfit-regular text-[#010101] opacity-60 mt-2">
                    Help find their soulmates
                </Text>
            </View>

            <ScrollView className="flex-1 mt-4" showsVerticalScrollIndicator={false}>
                {/* Main list */}
                <View>
                    {usersToMatch.map((user, index) => (
                        <UserRow key={user.id} user={user} index={index} />
                    ))}
                </View>

                {/* Already Helped section */}
                <View className="mt-6 mb-3 px-6">
                    <Text className="text-[17px] font-jakarta-medium text-[#737373]">
                        Already helped
                    </Text>
                </View>

                <View className="pb-8">
                    {alreadyHelped.map((user, index) => (
                        <UserRow key={user.id} user={user} index={index} />
                    ))}
                </View>
            </ScrollView>

            {/* Bottom Tab Bar */}
            <BottomTabBar />
        </SafeAreaView>
    );
}
