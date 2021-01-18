import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import { getUser } from './src/graphql/queries'
import { createUser } from './src/graphql/mutations'
import { withAuthenticator } from 'aws-amplify-react-native'
import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

const images = [
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-3.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-6.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-9.jpg',
]

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const getRandomImages = () => {
    return images[Math.floor(Math.random() * images.length)]
  }

  useEffect(() => {
    const fetchUsers = async () => {
      // Retrives authenticaed user 
      const userInformation = await Auth.currentAuthenticatedUser({bypassCache: true})
      console.log(userInformation)

      // Get the user from backend with user id
      if (userInformation) {
        const userData = await API.graphql(
          graphqlOperation(getUser, { id: userInformation.attributes.sub }
          ))

      if (userData.data.getUser) {
        console.log("User is already registered in database");
        return;
      }       

      const newUser = {
        id: userInformation.attributes.sub,
        name: userInformation.username,
        imageurl: getRandomImages(),
        status: "Hey, i'm testing the chatApp",
      }

      console.log(newUser)

      await API.graphql(
        graphqlOperation(
          createUser,
          { input: newUser }
        )
      ) 

      // if there us no yser in DB with the id, then create one
      }
    }
    
    fetchUsers();
  }, [])

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App)
