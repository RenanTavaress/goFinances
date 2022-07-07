import React from "react";
import {Container ,TitleCategory, Icon} from './styles'

export const CategoryCard = () => {
   return (
      <Container>
         <TitleCategory>
            Categorias
         </TitleCategory>
         <Icon name="chevron-down"/>
      </Container>
   )
}