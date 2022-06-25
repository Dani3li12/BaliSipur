import {react, useState} from 'react';
// import { Searchbar } from 'react-native-paper';
import { SearchBar } from 'react-native-elements';

import { View } from 'react-native';

function SearchTool() {
    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
        setSearch(search);
    };
    
    return (
        <View style={{ direction: "rtl", textAlign: "right !important", width: 200}}>
            <SearchBar
                placeholder="חיפוש"
                onChangeText={updateSearch}
                value={search}
                lightTheme={true}
                inputStyle={{ backgroundColor: 'white', direction: 'ltr', textAlign: 'right' }}
                containerStyle={{
                    backgroundColor: 'white', borderWidth: 0, borderRadius: 5, padding: 0, borderRadius: 10
                }}
                inputContainerStyle={{ backgroundColor: 'none' }}
        />
        </View>
    )
}
export default SearchTool;