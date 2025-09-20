import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
    return (
        <GestureHandlerRootView>
          <Drawer screenOptions={{ headerShown: false }}>
          
            <Drawer.Screen 
                name="index" 
                options={{ 
                    drawerLabel: "",
                    drawerItemStyle: { display: 'none' } 
                }}
            />

            
            <Drawer.Screen 
                name="homeA" 
                options={{ drawerLabel: "Home" }}
            />

            <Drawer.Screen 
                name="repertorio" 
                options={{ drawerLabel: "Repertórios" }}
            />

            <Drawer.Screen 
                name="ranking" 
                options={{ drawerLabel: "Ranking" }}
            />

           
            <Drawer.Screen 
                name="loginA" 
                options={{ 
                    drawerLabel: "",
                    drawerItemStyle: { display: 'none' }
                }}
            />

            <Drawer.Screen 
                name="loginP" 
                options={{ 
                    drawerLabel: "",
                    drawerItemStyle: { display: 'none' }
                }}
            />

            <Drawer.Screen 
                name="minhasR" 
                options={{ 
                    drawerLabel: "",
                    drawerItemStyle: { display: 'none' }
                }}
            />

            <Drawer.Screen 
                name="cadastroA" 
                options={{ 
                    drawerLabel: "",
                    drawerItemStyle: { display: 'none' }
                }}
            />

            <Drawer.Screen 
                name="cadastroP" 
                options={{ 
                    drawerLabel: "",
                    drawerItemStyle: { display: 'none' }
                }}
            />
          </Drawer>
        </GestureHandlerRootView>
    )
}