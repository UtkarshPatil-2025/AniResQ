import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function ReportForm() {
  const scaleAnim = new Animated.Value(1);

  const handleSubmit = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 120,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 120,
        useNativeDriver: true,
      }),
    ]).start(() => {
      router.push("/report/success");
    });
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons
          name="arrow-back"
          size={22}
          onPress={() => router.back()}
        />
        <Text style={styles.headerTitle}>Report Animal Abuse</Text>
      </View>

      <Text style={styles.subtitle}>
        Your voice can save lives 🐾
      </Text>

      {/* Location */}
      <View style={styles.inputBox}>
        <MaterialIcons name="location-on" size={22} color="#2E7D32" />
        <TextInput
          placeholder="Incident Location"
          style={styles.input}
        />
      </View>

      {/* Animal Type */}
      <View style={styles.inputBox}>
        <Ionicons name="paw" size={22} color="#2E7D32" />
        <TextInput
          placeholder="Animal Type (Dog, Cat, Cow, etc.)"
          style={styles.input}
        />
      </View>

      {/* Date */}
      <View style={styles.inputBox}>
        <Ionicons name="calendar" size={22} color="#2E7D32" />
        <TextInput
          placeholder="Date of Incident"
          style={styles.input}
        />
      </View>

      {/* Description */}
      <View style={[styles.inputBox, { height: 120 }]}>
        <Ionicons name="document-text" size={22} color="#2E7D32" />
        <TextInput
          placeholder="Describe what happened..."
          style={[styles.input, { height: 100 }]}
          multiline
        />
      </View>

      {/* Upload Evidence */}
      <TouchableOpacity style={styles.uploadBtn}>
        <Ionicons name="cloud-upload-outline" size={22} />
        <Text style={styles.uploadText}>Upload Evidence (Optional)</Text>
      </TouchableOpacity>

      {/* Submit */}
      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
          <Text style={styles.submitText}>Submit Report</Text>
        </TouchableOpacity>
      </Animated.View>

      <Text style={styles.note}>
        Reports are anonymous unless you choose to share details.
      </Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    padding: 16,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 12,
  },

  subtitle: {
    color: "#666",
    marginBottom: 20,
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    marginBottom: 14,
    elevation: 2,
  },

  input: {
    marginLeft: 12,
    flex: 1,
    fontSize: 15,
  },

  uploadBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "#aaa",
    padding: 14,
    borderRadius: 12,
    marginVertical: 16,
  },

  uploadText: {
    marginLeft: 8,
    color: "#555",
  },

  submitBtn: {
    backgroundColor: "#2E7D32",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 10,
  },

  submitText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  note: {
    textAlign: "center",
    fontSize: 12,
    color: "#777",
    marginTop: 12,
  },
});
