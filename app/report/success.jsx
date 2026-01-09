import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Animated } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function SuccessScreen() {
  const scale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 5,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.card, { transform: [{ scale }] }]}>
        <Ionicons name="checkmark-circle" size={80} color="#2E7D32" />
        <Text style={styles.title}>Thank You!</Text>
        <Text style={styles.text}>
          Your wildlife alert report has been submitted successfully.
        </Text>

        <View style={styles.trackBox}>
          <Text style={styles.trackTitle}>Tracking ID</Text>
          <Text style={styles.trackId}>WA-2024-7856</Text>
          <Text style={styles.pending}>● Pending Review</Text>
        </View>

        <TouchableOpacity
          style={styles.primaryBtn}
          onPress={() => router.push("/cases")}
        >
          <Text style={styles.primaryText}>Track My Report</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryBtn}
          onPress={() => router.replace("/")}
        >
          <Text style={styles.secondaryText}>Back to Home</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6C7EE1",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
    width: "100%",
  },

  title: {
    fontSize: 22,
    fontWeight: "800",
    marginTop: 12,
  },

  text: {
    textAlign: "center",
    color: "#555",
    marginVertical: 12,
  },

  trackBox: {
    backgroundColor: "#F1F5FF",
    width: "100%",
    borderRadius: 12,
    padding: 16,
    marginVertical: 16,
    alignItems: "center",
  },

  trackTitle: {
    fontWeight: "600",
    color: "#555",
  },

  trackId: {
    fontSize: 18,
    fontWeight: "800",
    marginVertical: 6,
  },

  pending: {
    color: "#FB8C00",
    fontSize: 13,
  },

  primaryBtn: {
    backgroundColor: "#6C7EE1",
    padding: 14,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },

  primaryText: {
    color: "#fff",
    fontWeight: "700",
  },

  secondaryBtn: {
    borderWidth: 1,
    borderColor: "#6C7EE1",
    padding: 14,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
  },

  secondaryText: {
    color: "#6C7EE1",
    fontWeight: "700",
  },
});
