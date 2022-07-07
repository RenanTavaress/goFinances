import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.background} ;
	
`;

export const Header = styled.View`
	width: 100%;
	height: ${RFValue(113)}px;

	background-color: ${({ theme }) => theme.colors.primary};
	justify-content: flex-end;
	align-items: center;
	padding-bottom: ${RFValue(19)}px;
`;

export const Title = styled.Text`
	color: ${({ theme }) => theme.colors.shape};
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: ${RFValue(18)}px;
`;

export const Form = styled.View`
	flex: 1;
	width: 100%;

	padding: 24px;

	justify-content: space-between;
`
export const Field = styled.View``

export const FieldButtonType = styled.View`
	flex-direction: row;
	justify-content: space-between;
	margin: ${RFValue(8)}px 0 ${RFValue(16)}px 0;

`