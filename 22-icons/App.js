import { View, TouchableOpacity } from "react-native";
import Feather from "@react-native-vector-icons/feather";
import FontAwesome6 from "@react-native-vector-icons/fontawesome6";

export default function App(){

  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#7d05ecff" }}>
        <Feather
        name="box"
        size={45}
        color= "#FF0000"
        />

        <Feather
        name="airplay"
        size={50}
        color= "#000a09ff"
        />

        <Feather
        name="camera-off"
        size={50}
        color= "#cc168fff"
        />

        <FontAwesome6
        iconStyle="solid"
        name="users"
        size={45}
        color="#333"
        />
        <TouchableOpacity style={{
          backgroundColor: "#eb2d0cff", width: 100, borderRadius: 5, alignItems: 'center'
        }}>
          <Feather
            name="video"
            size={60}
            color='#000'
          />
          
        </TouchableOpacity>
    </View>
    
  )
}
