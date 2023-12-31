import styled from "styled-components/native";

import Search from "../../assets/svg/search.svg";
import FilterIcon from "../../assets/svg/filter.svg";

export const Container = styled.View`
  position: relative;
`;

export const TextInput = styled.TextInput`
  color: white;
  padding: 12px 48px;
  background-color: hsla(0, 0%, 100%, 0.2);
  border-radius: 10px;
  height: 45px;
`;

export const SearchIcon = styled(Search)`
  position: absolute;

  top: 10px;
  left: 16px;
`;

export const FilterContainer = styled.TouchableOpacity`
  position: absolute;
  background-color: #0461b9;
  padding: 8px;
  border-radius: 12px;

  right: 4px;
  top: 4px;

  z-index: 999;
`;

export const Filter = styled(FilterIcon)``;
