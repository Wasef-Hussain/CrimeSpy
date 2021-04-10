import React, { useState, useEffect } from "react";
import Post from "./Postdisplay";
import { GiPistolGun } from "react-icons/gi";
import { Box, Text, Button, Center } from "@chakra-ui/react";
import { db } from "../../../firebase";
import { useAuth } from "../../../../LoginContext";
import useCurrentLocation from "../../../../hooks/useCurrentLocation";
import { geolocationOptions } from '../../../../constant/geolocationOptions'


const Dashhome = ({ Task, Posts }) => {
    const { location: currentLocation, error: currentError } = useCurrentLocation(geolocationOptions);
  const [posts, setPosts] = useState([]);
  const [coord, setCoord] = useState('');
  const { currentUser } = useAuth();
  var geocoding = new require('reverse-geocoding');
  const axios = require('axios');
  const postRef = db
    .collection("posts")
    .doc(currentUser.uid)
    .collection("userPosts");
  useEffect(() => {
    postRef.onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })));
    });
    console.log(posts);
    // postRef.get().then( snapshot => {
    //     const document = [];
    //     snapshot.forEach( (doc) =>{
    //         const data = doc.data()
    //         document.push(data);
    //         setPosts(document);
    //         console.log("Post",posts);
    //     })
    // })
  }, []);
  console.log("Post", posts);

  const gotToMyLocation =()=>{
    console.log('gotToMyLocation is called')
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        console.log("curent location: ", coords);
        console.log(coords.longitude);
        console.log(coords.latitude);
       
    //    console.log("curent location: ", coords)
        //   this.map.animateToRegion({
        //     latitude: coords.latitude,
        //     longitude: coords.longitude,
        //     latitudeDelta: 0.005,
        //     longitudeDelta: 0.005
        //   })
        var config = {
            'latitude': coords.latitude,
            'longitude': coords.longitude
        };
       
        let locationEE = coords.latitude +'/'+ coords.longitude
        setCoord(locationEE);
        console.log("Location", coord);
        // geocoding(config, (err, data) => {
        //     console.log(err ? err : data);
        // });
        const geocode = () =>{
                axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
                    params:{
                        latlng: coords.latitude + ',' + coords.longitude,
                        key: 'AIzaSyBGE9OzcruNl7s-rIZygUkNIk-jpzRRxtI',
                    }
                }).then(
                function(response){
                    console.log(response)
                }
                )
                .catch(function(error){
                    console.log(error);
                })
        }

        geocode();

       
      },
      (error) => alert('Error: Are location services on?'),
      { enableHighAccuracy: true }
    )
  }

  return (
    <>
      <Box
        w="80%"
        mx="auto"
        mt="10px"
        padding="15px"
        bg="#c1c1c1"
        borderRadius="5px"
      >
        <Text mb="10px">
          Would you like to add a Crime! The gun icon is not for threats!
        </Text>

        <Center w="100%">
          <Button
            mx="auto"
            onClick={Task}
            rightIcon={<Box as={GiPistolGun} fontSize="30px" />}
          >
            Add Crime
          </Button>
        </Center>
      </Box>

      {posts.map(({ id, post }) => {
        return (
          <Post
            key={id}
            id={id}
            profileUrl={post.profileUrl}
            username={post.username}
            photoUrl={post.mediaUrl}
            Discription={post.description}
            Title={post.Title}
            location={currentLocation}
             error={currentError}
          />
        );
      })}
    </>
  );
};
export default Dashhome;
