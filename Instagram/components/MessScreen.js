import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Image, TextInput } from "react-native";

const MessScreen = () => {
    const initialChats = [
        {
            id: 1,
            name: "Friend 1",
            avatar: require("../assets/Avatar.png"),
            messages: [
                { text: "Hello!", sender: "Friend 1", timestamp: 1637835600000 },
                { text: "Hi there!", sender: "you", timestamp: 1637835660000 },
            ],
        },
        {
            id: 2,
            name: "Friend 1",
            avatar: require("../assets/Avatar.png"),
            messages: [
                { text: "Hello!", sender: "Friend 1", timestamp: 1637835600000 },
                { text: "Hi there!", sender: "you", timestamp: 1637835660000 },
            ],
        },
        {
            id: 3,
            name: "Friend 1",
            avatar: require("../assets/Avatar.png"),
            messages: [
                { text: "Hello!", sender: "Friend 1", timestamp: 1637835600000 },
                { text: "Hi there!", sender: "you", timestamp: 1637835660000 },
            ],
        },
        {
            id: 4,
            name: "Friend 1",
            avatar: require("../assets/Avatar.png"),
            messages: [
                { text: "Hello!", sender: "Friend 1", timestamp: 1637835600000 },
                { text: "Hi there!", sender: "you", timestamp: 1637835660000 },
            ],
        },
        {
            id: 5,
            name: "Friend 1",
            avatar: require("../assets/Avatar.png"),
            messages: [
                { text: "Hello!", sender: "Friend 1", timestamp: 1637835600000 },
                { text: "Hi there!", sender: "you", timestamp: 1637835660000 },
            ],
        },
        {
            id: 6,
            name: "Friend 1",
            avatar: require("../assets/Avatar.png"),
            messages: [
                { text: "Hello!", sender: "Friend 1", timestamp: 1637835600000 },
                { text: "Hi there!", sender: "you", timestamp: 1637835660000 },
            ],
        },
        {
            id: 7,
            name: "Friend 1",
            avatar: require("../assets/Avatar.png"),
            messages: [
                { text: "Hello!", sender: "Friend 1", timestamp: 1637835600000 },
                { text: "Hi there!", sender: "you", timestamp: 1637835660000 },
            ],
        },
        {
            id: 8,
            name: "Friend 1",
            avatar: require("../assets/Avatar.png"),
            messages: [
                { text: "Hello!", sender: "Friend 1", timestamp: 1637835600000 },
                { text: "Hi there!", sender: "you", timestamp: 1637835660000 },
            ],
        },
        // Add more chat objects as needed
    ];

    const [chats, setChats] = useState(initialChats);
    const [searchInput, setSearchInput] = useState("");

    const renderChatItem = ({ item }) => (
        <View style={styles.chatItem}>
            <Image source={item.avatar} style={styles.avatar} />
            <View style={styles.chatInfo}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.lastMessage}>{getLastMessageText(item.messages)}</Text>
                <Text style={styles.timestamp}>{formatTimestamp(getLastMessageTimestamp(item.messages))}</Text>
            </View>
        </View>
    );

    const getLastMessageText = (messages) => {
        const lastMessage = messages[messages.length - 1];
        return `${lastMessage.sender === "you" ? "you: " : ""}${lastMessage.text}`;
    };

    const getLastMessageTimestamp = (messages) => {
        const lastMessage = messages[messages.length - 1];
        return lastMessage.timestamp;
    };

    // Format timestamp to a human-readable string
    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
    };

    const handleSearch = (text) => {
        setSearchInput(text);
        const filteredChats = initialChats.filter((chat) => chat.name.toLowerCase().includes(text.toLowerCase()));
        setChats(filteredChats);
    };

    return (
        <View style={styles.container}>
            <TextInput style={styles.searchInput} placeholder="Search" value={searchInput} onChangeText={handleSearch} />
            <FlatList data={chats} keyExtractor={(item) => item.id.toString()} renderItem={renderChatItem} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 10,
    },
    searchInput: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
    },
    chatItem: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        paddingVertical: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    chatInfo: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
    },
    lastMessage: {
        color: "#888",
    },
    timestamp: {
        color: "#888",
        fontSize: 12,
    },
});

export default MessScreen;
