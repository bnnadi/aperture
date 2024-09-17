import React from 'react';
import { Alert, Animated, StyleSheet, Pressable } from 'react-native';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CameraScreen from '../screens/CameraScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

export default function TabNavigator() {
    /**
     * Renders an icon for a given route name, with a different color
     * depending on whether the route is currently selected.
     *
     * @param routeName The name of the route to render an icon for.
     * @param selectedTab The currently selected route.
     * @returns A React element representing the icon.
     */
    const _renderIcon = (routeName: string, selectedTab: string): React.ReactElement => {
        let icon = 'aperture-outline';
        switch (routeName) {
          case 'profile':
            icon = 'person-circle-outline';
            break;
          case 'settings':
            icon = 'settings-outline';
            break;
          case 'camera':
            icon = 'aperture-outline';
            break;
        }

        return (
          <Ionicons
            name={icon}
            size={25}
            color={routeName === selectedTab ? 'black' : 'gray'}
          />
        );
      };
      /**
       * Renders a tab bar item for a given route name, with a different
       * icon color depending on whether the route is currently selected.
       *
       * @param routeName The name of the route to render an icon for.
       * @param selectedTab The currently selected route.
       * @param navigate A function to navigate to the route.
       * @returns A React element representing the tab bar item.
       */
      const renderTabBar = ({
        routeName,
        selectedTab,
        navigate,
      }: {
        routeName: string;
        selectedTab: string;
        navigate: (routeName: string) => void;
      }): React.ReactElement => {
        return (
          <Pressable
            onPress={() => navigate(routeName)}
            style={styles.tabbarItem}
          >
            {_renderIcon(routeName, selectedTab)}
          </Pressable>
        );
      };

      return (
      <CurvedBottomBar.Navigator
        type="DOWN"
        style={styles.bottomBar}
        shadowStyle={styles.shawdow}
        height={55}
        circleWidth={50}
        bgColor="white"
        initialRouteName="camera"
        borderTopLeftRight
        renderCircle={({ selectedTab, navigate }) => (
          <Animated.View style={styles.btnCircleUp}>
            <Pressable
              style={styles.button}
              onPress={() => navigate('camera')}
            >
              <Ionicons name={'apps-sharp'} color="gray" size={25} />
            </Pressable>
          </Animated.View>
        )}
        tabBar={renderTabBar}
      >
        <CurvedBottomBar.Screen
          name="profile"
          position="LEFT"
          component={() => <ProfileScreen />}
          options={{
            headerShown: false,
            headerStyle: {
              borderWidth: 0,
              borderBottomWidth: 0,
              height: 0,
              elevation: 0,
            },
          }}
        />
        <CurvedBottomBar.Screen
          name="camera"
          position="CENTER"
          component={() => <CameraScreen />}
          options={{
            headerShown: false,
            headerStyle: {
              borderWidth: 0,
              borderBottomWidth: 0,
              height: 0,
              elevation: 0,
            },
          }}
        />
        <CurvedBottomBar.Screen
          name="settiings"
          component={() => <SettingsScreen />}
          position="RIGHT"
          options={{
            headerShown: false,
            headerStyle: {
              borderWidth: 0,
              borderBottomWidth: 0,
              height: 0,
              elevation: 0,
            },
          }}
        />
      </CurvedBottomBar.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
      },
      shawdow: {
        shadowColor: '#DDDDDD',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
      },
      button: {
        flex: 1,
        justifyContent: 'center',
      },
      bottomBar: {},
      btnCircleUp: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E8E8E8',
        bottom: 30,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 1,
      },
      imgCircle: {
        width: 30,
        height: 30,
        tintColor: 'gray',
      },
      tabbarItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      img: {
        width: 30,
        height: 30,
      },
  });