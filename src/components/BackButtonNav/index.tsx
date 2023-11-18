import { Platform, TouchableOpacity, View } from "react-native";
import {
  Container,
  Right,
  UserIcon,
  UserIconChar,
  LocationText,
  WellcomeText,
  Divider,
} from "./styles";
import Input from "../Input";
import { useNavigation } from "@react-navigation/native";
import Back from "../../assets/svg/back.svg";

type BackButtonNavProps = { onGoBack?: () => void };

const BackButtonNav = ({ onGoBack }: BackButtonNavProps) => {
  const navigation = useNavigation();

  const handleGoBack = () => (onGoBack ? onGoBack() : navigation.goBack());

  return (
    <>
      <Container>
        <Right>
          <TouchableOpacity
            style={{
              width: 48,
              aspectRatio: 1,
              backgroundColor: "white",
              borderRadius: 16,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={handleGoBack}
          >
            <Back stroke={"black"} />
          </TouchableOpacity>
        </Right>
        <View style={{ display: "flex", flexDirection: "row", gap: 12 }}>
          <View>
            <LocationText>Olá, Pedro!</LocationText>
            <WellcomeText>Merces-Benz GLA-250</WellcomeText>
          </View>
          <UserIcon>
            <UserIconChar>P</UserIconChar>
          </UserIcon>
        </View>
      </Container>
      <Divider />
    </>
  );
};

export default BackButtonNav;
