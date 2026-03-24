import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { useThemeColors } from '../context/ThemeContext';

function TabNavigator() {
  const colors = useThemeColors();

  return (
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: colors.gold,
      tabBarInactiveTintColor: colors.light,
      tabBarStyle: {
        backgroundColor: colors.medium
      },
      headerStyle: {
        backgroundColor: colors.dark
      },
      headerTitleStyle: {
        color: colors.gold
      }
      }}
      >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Do',
          tabBarIcon: ({ color }) => <FontAwesome size={22} name="check" color={color} />,
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: 'Create',
          tabBarIcon: ({ color }) => <FontAwesome size={22} name="edit" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome size={22} name="gear" color={color} />,
        }}
      />
    </Tabs>
  );
}

export default function TabLayout() {
  return <TabNavigator />;
}
