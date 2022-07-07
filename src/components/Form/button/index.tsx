import React from "react";
import {TouchableOpacityProps } from "react-native";
import {Container, TitleButton} from './styles'

interface Props extends TouchableOpacityProps {
   title: string;
}


export const Button = ({title, ...rest}: Props) => {
   return (
      <Container {...rest}>
         <TitleButton>
            {title}
         </TitleButton>
      </Container>
   )
}