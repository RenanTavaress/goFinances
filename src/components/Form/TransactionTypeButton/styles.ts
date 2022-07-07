import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface PropsIcon {
	type: "up" | "down";
	isActive: boolean;
}

export const Container = styled(TouchableOpacity)<PropsIcon>`
	width: 48%;
	//height: ${RFValue(56)}px;

	flex-direction: row;
	justify-content: center;
	align-items: center;

	${({ isActive, type }) => isActive && type === "up" && css`
	 background-color: ${({theme}) => theme.colors.success_light}
	
	`};
	
	 ${({ isActive, type }) => isActive && type === "down" && css`
	 background-color: ${({theme}) => theme.colors.attention_light}
	`};


	border-width: ${({isActive}) => isActive ? 0 : 1.5}px;
	border-style: solid;
	border-color: ${({ theme }) => theme.colors.text};
	border-radius: 5px;
	padding: 13px;
`;

export const Icon = styled(Feather)<PropsIcon>`
	margin-right: 12px;
	font-size: ${RFValue(20)}px;

	color: ${({ theme, type }) =>
		type === "up" ? theme.colors.success : theme.colors.attention};
`;

export const Title = styled.Text`
	font-size: ${RFValue(16)}px;
	color: ${({ theme }) => theme.colors.text_dark};
	font-family: ${({ theme }) => theme.fonts.regular};
`;
