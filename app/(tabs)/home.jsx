import React, { useEffect, useState } from 'react';
import { SafeAreaView, TextInput, StyleSheet, Text, TouchableOpacity, View, FlatList, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useLocalSearchParams, useRouter } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import images from '../../constants/images';
import ProductItem from '../../components/ProductItem';
import CityModal from '../../components/CityModal';
import FilterModal from '../../components/FilterModal';
import { allProduct } from '../../redux/features/allProductSlice';
import { allProductSelector } from '../../redux/selectors/allProductSelectors';
import { filterAndSortProducts } from '../../utils/filter';

const Home = () => {
    // get city from params 
    const params = useLocalSearchParams();
    const city = params.city

    const [isModalVisible, setModalVisible] = useState(false);
    const [isFilterModalVisible, setFilterModalVisible] = useState(false);
    const [filter, setFilter] = useState(null);
    const [selectedCity, setSelectedCity] = useState(city || "All");
    const [searchTerm, setSearchTerm] = useState("");
    

    // dispatch data

    const dispatch = useDispatch();
    const dispatchAllProduct = useSelector(allProductSelector);

    const router = useRouter();

    useEffect(() => {
        dispatch(allProduct());
    }, [dispatch]);

    const handleSelectCity = (city) => {
        setSelectedCity(city);
        setModalVisible(false);
    };

    const handleFilterChange = (filterType) => {
        setFilter(filterType);
        setFilterModalVisible(false);
    };

    // filter
    const filteredData = filterAndSortProducts(dispatchAllProduct, {
        selectedCity,
        filter,
        searchTerm,
    });

    const handleCreateProduct = () => {
        router.push('/addProduct');
        setFilterModalVisible(false);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.navbar}>
                    <Text style={{ fontSize: 17, width: '100%', paddingLeft: 25, paddingTop: 25, color: 'gray' }}>Location</Text>
                    <TouchableOpacity onPress={() => setModalVisible(true)} style={{ flexDirection: 'row', alignItems: 'center', width: '50%', height: 44 }}>
                        <Text style={{ fontSize: 17, width: '100%', paddingLeft: 25, color: 'white' }}>{selectedCity} , MA</Text>
                        <AntDesign name="down" size={20} color="white" />
                    </TouchableOpacity>

                    <CityModal
                        isVisible={isModalVisible}
                        onClose={() => setModalVisible(false)}
                        onSelectCity={handleSelectCity}
                    />

                    <View style={{ width: '100%', height: 70, marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <View style={{ flexDirection: 'row', width: '70%', height: 60, backgroundColor: '#313131', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', borderRadius: 13 }}>
                            <EvilIcons name="search" size={47} color="white" />
                            <TextInput
                                value={searchTerm}
                                onChangeText={(text) => setSearchTerm(text)}
                                placeholder='Search...'
                                style={{ width: '85%', height: '100%', color: 'white' }}
                            />
                        </View>
                        <TouchableOpacity onPress={() => setFilterModalVisible(true)} style={{ width: '18%', height: 60, backgroundColor: '#C67C4E', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', borderRadius: 13 }}>
                            <Ionicons name="options" size={40} color="white" />
                        </TouchableOpacity>
                    </View>

                    <FilterModal
                        isVisible={isFilterModalVisible}
                        onClose={() => setFilterModalVisible(false)}
                        onCreateProduct={handleCreateProduct}
                        onFilterChange={handleFilterChange}
                    />
                </View>

                <View style={{ position: 'absolute', top: 190, left: 20, zIndex: 10, height: 160, width: '90%', backgroundColor: '#C67C4E', borderRadius: 20, shadowColor: '#313131', shadowOffset: { width: 4, height: 4 }, shadowOpacity: 0.2 }}>
                    <View style={{ width: '100%', height: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 33, width: '60%', fontWeight: 'bold', position: 'relative', left: 30, textShadowColor: 'rgba(0, 0, 0, 0.75)', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 5 }}>
                            Optimize your Stock Management
                        </Text>
                        <Image
                            source={images.homeImage}
                            style={{ width: '47%', height: '70%' }}
                        />
                    </View>
                </View>

                <View style={{ width: '100%', height: 90, backgroundColor: 'white' }}></View>

            </View>

            {filteredData.length === 0 && (
                <Text style={{ textAlign: 'center', fontSize: 19, backgroundColor: 'white' }}>
                    No items available
                </Text>
            )}

            <FlatList
                data={filteredData}
                renderItem={({ item }) => <ProductItem item={item} />}
                keyExtractor={(item) => item.id}
                numColumns={2}
                style={{ backgroundColor: 'white' }}
                showsHorizontalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        height: 841,
        backgroundColor: '#292929'
    },
    navbar: {
        height: 280,
        width: '100%',
    },
    item: {
        margin: 5,
        borderRadius: 8,
        overflow: 'hidden',
        height: 250,
        backgroundColor: '#F9F2ED',
    },
});
