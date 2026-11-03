import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Produtos({ data, addToCart }) {
 return (
    <LinearGradient 
      colors={['#b4edffff', '#efdcffff', '#ffffffff']}
      style={styles.container}
    >
        <View style={styles.infoContainer}>
            <Text style={styles.title}>{data.name}</Text>
            <Text style={styles.price}>
              {Number(data.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </Text>
        </View>

        {/* TouchableOpacity agora envolve o LinearGradient */}
        <TouchableOpacity onPress={addToCart} activeOpacity={0.8}>
            <LinearGradient
              colors={["#d3d3d3ff", "#bad0ffff", "#bbbbbbff"]} // Suas 3 cores no botão!
              //start={{ x: 0, y: 0 }}
              //end={{ x: 1, y: 0 }} // Faz a cor ir da esquerda para a direita
              style={styles.buttonAdd}
            >
                <Text style={styles.buttonText}>+</Text>
            </LinearGradient>
        </TouchableOpacity>
    </LinearGradient>
 );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    marginBottom: 14,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoContainer: {
    flex: 1,
    marginRight: 12,
  },
  title: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 16,
    marginBottom: 4,
  },
  price: {
    color: '#020002ff',
    fontSize: 14,
  },
  buttonAdd: {
    // Tiramos o backgroundColor daqui e passamos o padding/borderRadius para o gradiente
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  }
});