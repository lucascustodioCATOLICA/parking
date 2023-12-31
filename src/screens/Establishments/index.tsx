import { StatusBar } from "expo-status-bar";
import { FlatList } from "react-native";

import GradientBackground from "../../components/GradientBackground";
import EstablishmentsNav from "./components/EstablishmentsNav";
import {
  Container,
  Title,
  Item,
  ItemBottom,
  ItemName,
  ItemLocation,
  ItemBusy,
  Divider,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "Iguatemi Shopping",
    location: "Asa Norte",
    busy: "Médio",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    name: "Shopping Conjunto Nacional",
    location: "Asa Norte",
    busy: "Pouco",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    name: "Aeroporto Internacional de Brasília",
    location: "Asa Norte",
    busy: "Alto",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e21d72",
    name: "Restaurante Coco Bambu",
    location: "Asa Norte",
    busy: "Médio",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e21d71",
    name: "Park Shopping Brasília",
    location: "Asa Norte",
    busy: "Médio",
  },
];

const EstablishmentsScreen = () => {
  const navigation = useNavigation();

  return (
    <GradientBackground>
      <StatusBar translucent style="light" />
      <Container>
        <SafeAreaView>
          <EstablishmentsNav onCloseIconPress={() => navigation.goBack()} />
        </SafeAreaView>

        {DATA.map((item) => (
          <Item key={item.id}>
            <ItemName>{item.name}</ItemName>
            <ItemBottom>
              <ItemLocation>{item.location}</ItemLocation>
              <Divider />
              <ItemBusy>Movimento: {item.busy}</ItemBusy>
            </ItemBottom>
          </Item>
        ))}
      </Container>
    </GradientBackground>
  );
};

export default EstablishmentsScreen;
