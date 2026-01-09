import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { router } from "expo-router";
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Scrollable Content */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 90 }}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>AniResQ</Text>

          {/* Profile Avatar */}
          <TouchableOpacity>
            <Image
              source={{ uri: "https://i.pravatar.cc/150?img=12" }}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>

        {/* Welcome Card */}
        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeTitle}>Welcome, Sarah 👋</Text>
          <Text style={styles.welcomeText}>
            Together we can make a difference for animals in need.
            Report, track, and help create a safer world for wildlife.
          </Text>
        </View>

        {/* Action Cards */}
        <TouchableOpacity style={styles.actionCard} onPress={() => router.push("/report")}>
          <MaterialIcons name="report-problem" size={28} color="#E53935" />
          <View style={styles.actionText}>
            <Text style={styles.actionTitle}>Report Animal Abuse</Text>
            <Text style={styles.actionSub}>Help animals in distress</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCard}>
          <Ionicons name="alert-circle" size={28} color="#FB8C00" />
          <View style={styles.actionText}>
            <Text style={styles.actionTitle}>Wildlife Alerts</Text>
            <Text style={styles.actionSub}>
              Stay informed about nearby wildlife
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCard}>
          <Ionicons name="time-outline" size={28} color="#1E88E5" />
          <View style={styles.actionText}>
            <Text style={styles.actionTitle}>Report History</Text>
            <Text style={styles.actionSub}>
              Track your submitted reports
            </Text>
          </View>
        </TouchableOpacity>

        {/* Recent Cases */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Cases</Text>
          <Text style={styles.viewAll}>View All</Text>
        </View>

        <View style={styles.caseCard}>
          <Image
            source={{ uri: "https://images.unsplash.com/photo-1558788353-f76d92427f16" }}
            style={styles.caseImage}
          />
          <View style={styles.caseText}>
            <Text style={styles.caseTitle}>Injured Stray Dog</Text>
            <Text style={styles.caseSub}>Reported by John • 2 hours ago</Text>
            <Text style={styles.inProgress}>● In Progress</Text>
          </View>
        </View>

        <View style={styles.caseCard}>
          <Image
            source={{ uri: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131" }}
            style={styles.caseImage}
          />
          <View style={styles.caseText}>
            <Text style={styles.caseTitle}>Cat Rescue Success</Text>
            <Text style={styles.caseSub}>Reported by Maria • 1 day ago</Text>
            <Text style={styles.resolved}>● Resolved</Text>
          </View>
        </View>

        {/* NGO Updates */}
        <Text style={[styles.sectionTitle, { marginLeft: 16 }]}>
          NGO Updates
        </Text>

        <View style={styles.ngoCard}>
          <FontAwesome5 name="heart" size={22} color="#2E7D32" />
          <View style={{ marginLeft: 12 }}>
            <Text style={styles.ngoTitle}>Animal Welfare NGO</Text>
            <Text style={styles.ngoText}>
              We’ve successfully rescued 15 animals this week.
              Thanks to all volunteers & supporters.
            </Text>
            <Text style={styles.ngoStats}>❤️ 24   💬 8</Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <NavItem icon="home" label="Home" active />
        <NavItem icon="document-text-outline" label="Cases" />
        <NavItem icon="people-outline" label="NGOs" />
        <NavItem icon="person-outline" label="Profile" />
      </View>
    </View>
  );
}

/* Bottom Nav Item Component */
const NavItem = ({ icon, label, active }) => (
  <View style={styles.navItem}>
    <Ionicons
      name={icon}
      size={26}
      color={active ? "#2E7D32" : "#777"}
    />
    <Text style={[styles.navLabel, active && { color: "#2E7D32" }]}>
      {label}
    </Text>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },

  logo: {
    fontSize: 20,
    fontWeight: "800",
    color: "#2E7D32",
  },

  profileImage: {
    width: 38,
    height: 38,
    borderRadius: 19,
  },

  welcomeCard: {
    backgroundColor: "#2E7D32",
    margin: 16,
    borderRadius: 14,
    padding: 18,
  },

  welcomeTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },

  welcomeText: {
    color: "#E8F5E9",
    marginTop: 8,
    fontSize: 14,
    lineHeight: 20,
  },

  actionCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginBottom: 14,
    padding: 18,
    borderRadius: 12,
    elevation: 3,
  },

  actionText: {
    marginLeft: 14,
  },

  actionTitle: {
    fontSize: 16,
    fontWeight: "600",
  },

  actionSub: {
    color: "#777",
    fontSize: 13,
    marginTop: 2,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginTop: 20,
  },

  sectionTitle: {
    fontWeight: "700",
    fontSize: 17,
  },

  viewAll: {
    color: "#2E7D32",
    fontSize: 14,
  },

  caseCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginTop: 14,
    borderRadius: 12,
    overflow: "hidden",
  },

  caseImage: {
    width: 90,
    height: 90,
  },

  caseText: {
    padding: 12,
    flex: 1,
  },

  caseTitle: {
    fontWeight: "600",
    fontSize: 15,
  },

  caseSub: {
    fontSize: 13,
    color: "#777",
    marginTop: 2,
  },

  inProgress: {
    color: "#FB8C00",
    fontSize: 13,
    marginTop: 6,
  },

  resolved: {
    color: "#2E7D32",
    fontSize: 13,
    marginTop: 6,
  },

  ngoCard: {
    flexDirection: "row",
    backgroundColor: "#E8F5E9",
    margin: 16,
    padding: 16,
    borderRadius: 12,
  },

  ngoTitle: {
    fontWeight: "700",
    fontSize: 15,
  },

  ngoText: {
    fontSize: 13,
    marginTop: 6,
    color: "#555",
    lineHeight: 18,
  },

  ngoStats: {
    fontSize: 13,
    marginTop: 8,
    color: "#444",
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 70,
    backgroundColor: "#fff",
    borderTopWidth: 0.5,
    borderColor: "#ddd",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },

  navItem: {
    alignItems: "center",
  },

  navLabel: {
    fontSize: 12,
    color: "#777",
    marginTop: 4,
  },
});
