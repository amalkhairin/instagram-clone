import InstagramIcon from 'component/InstagramIcon';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import Foundation from '@expo/vector-icons/Foundation';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { STORY_DATA } from 'storyData';
import { FEEDS_DATA } from 'data';

export default function App() {
	const timeAgo = (timestamp: any) => {
		const units = [
			{ name: 'year', millis: 31536000000 },
			{ name: 'month', millis: 2592000000 },
			{ name: 'week', millis: 604800000 },
			{ name: 'day', millis: 86400000 },
			{ name: 'hour', millis: 3600000 },
			{ name: 'minute', millis: 60000 },
			{ name: 'second', millis: 1000 },
		];

		const difference = Date.now() - timestamp;

		for (const unit of units) {
			const amount = Math.floor(difference / unit.millis);
			if (amount > 0) {
				return `${amount} ${unit.name}${amount > 1 ? 's' : ''} ago`;
			}
		}

		return 'just now';
	};

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.container}>
				<ScrollView>
					<View style={{ flex: 1, backgroundColor: '#fff' }}>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 15 }}>
							<View style={{ flexDirection: 'row', alignItems: 'center' }}>
								<InstagramIcon width={100} height={30} fill='#000000' />
								<AntDesign name="down" size={14} color="black" />
							</View>
							<View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
								<Feather name="heart" size={24} color="black" />
								<FontAwesome5 name="facebook-messenger" size={24} color="black" />
							</View>
						</View>

						<ScrollView horizontal contentContainerStyle={{ paddingHorizontal: 20, gap: 10 }} showsHorizontalScrollIndicator={false}>
							<View style={{ flexDirection: 'column', alignItems: 'center' }}>
								<View style={{ position: 'relative' }}>
									<View style={{ width: 80, height: 80, alignItems: 'center', justifyContent: 'center', borderWidth: 3, borderColor: '#14ff6a', borderRadius: 200, padding: 3 }}>
										<Image source={{ uri: 'https://iili.io/d0RPABf.webp' }} style={{ width: '100%', height: '100%', borderRadius: 200, objectFit: 'cover', borderWidth: 1, borderColor: 'gray' }} />
									</View>
									<View style={{ backgroundColor: '#4a97e8', justifyContent: 'center', alignItems: 'center', width: 30, height: 30, borderRadius: 200, borderWidth: 3, borderColor: 'white', position: 'absolute', bottom: 0, right: 0 }}>
										<Text style={{ fontSize: 14, fontWeight: 'medium', textAlign: 'center', color: 'white' }}>+</Text>
									</View>
								</View>
								<Text style={{ fontWeight: 'medium', fontSize: 12, marginTop: 5, color: '#616161' }}>Cerita Anda</Text>
							</View>

							{STORY_DATA.map((item, index) => (
								<View key={index} style={{ flexDirection: 'column', alignItems: 'center' }}>
									<View style={{ width: 80, height: 80, alignItems: 'center', justifyContent: 'center', borderWidth: 3, borderColor: '#ff2e43', borderRadius: 200, padding: 3 }}>
										<Image source={{ uri: item.image }} style={{ width: '100%', height: '100%', borderRadius: 200, objectFit: 'cover', borderWidth: 1, borderColor: 'gray' }} />
									</View>
									<Text style={{ fontWeight: 'medium', fontSize: 12, marginTop: 5, color: '#616161' }}>{item.name}</Text>
								</View>
							))}
						</ScrollView>
					</View>

					{FEEDS_DATA.map((item, index) => (
						<View key={index} style={{ paddingVertical: 10 }}>
							<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 10, marginVertical: 10 }}>
								<View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
									<View style={{ width: 45, height: 45, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#ff2e43', borderRadius: 200, padding: 3 }}>
										<Image source={{ uri: item.imageUrl }} style={{ width: '100%', height: '100%', borderRadius: 200, objectFit: 'cover', borderWidth: 1, borderColor: 'gray' }} />
									</View>
									<View>
										<Text style={{ fontWeight: 'bold', fontSize: 14, color: '#616161' }}>{item.username}</Text>
									</View>
								</View>
								<Feather name="more-vertical" size={18} color="black" />
							</View>
							<View>
								<Image source={{ uri: item.feed.imageUrl }} style={{ width: '100%', aspectRatio: 1, objectFit: 'cover' }} />
							</View>
							<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 10 }}>
								<View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
									<Feather name="heart" size={24} color="black" />
									<Ionicons name="chatbubble-outline" size={24} color="black" style={{ transform: [{ scaleX: -1 }] }} />
									<Ionicons name="paper-plane-outline" size={24} color="black" />
								</View>
								<FontAwesome name="bookmark-o" size={24} color="black" />
							</View>
							<View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10, marginTop: 5 }}>
								{item.feed.friendLikes.map((friend, index) => (
									<View style={{ flexDirection: 'row', alignItems: 'center', position: 'relative' }}>
										<View style={{ width: 30, height: 30, alignItems: 'center', justifyContent: 'center', borderWidth: 3, borderColor: '#FFFFFF', borderRadius: 200, marginRight: -15 }}>
											<Image source={{ uri: friend.imageUrl }} style={{ width: '100%', height: '100%', borderRadius: 200, objectFit: 'cover', borderWidth: 1, borderColor: 'gray' }} />
										</View>
									</View>
								))}
								<Text style={{ fontWeight: '400', fontSize: 12, color: '#000000', marginLeft: 20 }}>liked by {item.feed.friendLikes[0].name} and {item.feed.totalLikes - 1} others</Text>
							</View>
							<View style={{ marginHorizontal: 10, marginTop: 5 }}>
								<Text><Text style={{ marginHorizontal: 10, fontWeight: 'bold', color: '#000000' }}>{item.username} </Text>{item.feed.caption}</Text>
							</View>
							<View style={{ marginHorizontal: 10, marginTop: 5 }}>
								<Text style={{ fontWeight: '600', fontSize: 12, color: '#a3a3a3' }}>View all {item.feed.totalComments} comments</Text>
							</View>
							<View style={{ marginHorizontal: 10, marginTop: 5 }}>
								<Text style={{ fontWeight: '400', fontSize: 12, color: '#a3a3a3' }}>{timeAgo(item.feed.postDate)}</Text>
							</View>
						</View>
					))}
				</ScrollView>
				<View style={{ backgroundColor: '#FFFFFF', borderTopWidth: 1, borderColor: '#a3a3a3cb', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', padding: 10 }}>
					<Foundation name="home" size={35} color="black" />
					<Ionicons name="search" size={35} color="black" />
					<Octicons name="diff-added" size={35} color="black" />
					<MaterialIcons name="ondemand-video" size={35} color="black" />
					<View style={{ width: 35, height: 35, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'gray', borderRadius: 200}}>
						<Image source={{ uri: 'https://iili.io/d0RPABf.webp' }} style={{ width: '100%', height: '100%', borderRadius: 200, objectFit: 'cover', borderWidth: 1, borderColor: 'gray' }} />
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF'
	},
});
