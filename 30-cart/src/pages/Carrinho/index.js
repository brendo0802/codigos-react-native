import { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { CartContext } from '../../contexts/CartContext';
import ItemCarrinho from '../../components/ItemCarrinho';
import { LinearGradient } from 'expo-linear-gradient';
 
export default function Carrinho() {
 
    const { cart, addItemCart, removeItemCart, total } = useContext(CartContext);
 
    return(
        <View style={styles.container}>
        <FlatList
        data={cart}
        showsVerticalScrollIndicator={false}
        keyExtractor={ (item) => String(item.id) }
        ListEmptyComponent={() => <Text style={styles.vazio}>SEU CARRINHO ESTÁ VAZIO...</Text>}
        renderItem={ ({item}) => (
            <ItemCarrinho
                data={item}
                addAmount={ () => addItemCart(item)}
                removeAmount = { () => removeItemCart(item)}
            />
         )}

         ListFooterComponent={() => (
            <Text style={styles.total}>
                Total da compra: R$ {Number(total || 0).toFixed(2).replace('.',',')}
            </Text>
         )}
        />
        </View>
    )
}
 
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#0bdd9eff',
        paddingStart: 14,
        paddingEnd: 14,
        paddingTop: 14
    },
    vazio:{
        fontSize: 15,
        color: '#000000ff'
    },
    total: {
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: '#000000ff',
        color: '#fff',
        padding: 15
    }

})