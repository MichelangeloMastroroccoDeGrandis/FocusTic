import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { ItemProvider } from '../context/ItemContext';
import colors from '../../style/colors'

export default function TabLayout() {
  return (
    <ItemProvider>
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
          title: 'Tasks',
          tabBarIcon: ({ color }) => <FontAwesome size={22} name="check" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Create',
          tabBarIcon: ({ color }) => <FontAwesome size={22} name="edit" color={color} />,
        }}
      />
    </Tabs>
    </ItemProvider>
  );
}
