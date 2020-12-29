import React from 'react'
import styled from 'styled-components/native'
import formatCurrency from '../utils/formatCurrency'
import { PropTypes } from 'prop-types'

const ProductListItem = ({ title, sku, image, currentPrice, previousPrice, onButtonPress }) => (
  <Container>
    <LeftContent>
      <ProductImage source={{ uri: image }} />
      <ProductCode>Cod: {sku}</ProductCode>
    </LeftContent>
    <RightContent>
      <ProductName>{title}</ProductName>
      <ProductCostContainer>
        {previousPrice > currentPrice && (
          <ProductPreviousCost>{formatCurrency(previousPrice)}</ProductPreviousCost>
        )}
        <ProductCurrentCost>{formatCurrency(currentPrice)}</ProductCurrentCost>
      </ProductCostContainer>
      <PrimaryButton onPress={() => onButtonPress(sku)}>
        <PrimaryButtonText>VER DETALHES</PrimaryButtonText>
      </PrimaryButton>
    </RightContent>
  </Container>
)

ProductListItem.propTypes = {
  title: PropTypes
}

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  height: 145px;
  padding: 5px;
  margin-top: 10px;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`

const LeftContent = styled.View`
  width: 122px;
  justify-content: space-between;
`

const RightContent = styled.View`
  flex: 2;
  justify-content: space-between;
`

const ProductCode = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #c4c4c4;
`

const ProductName = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #212121;
`

const ProductCostContainer = styled.View``

const ProductPreviousCost = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 13px;
  text-decoration-line: line-through;
  color: #999999;
`

const ProductCurrentCost = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #e66100;
`

const ProductImage = styled.Image`
  height: 108px;
  width: 108px;
`

const PrimaryButton = styled.Pressable`
  justify-content: center;
  height: 36px;
  background: #ff6c00;
  border-radius: 4px;
`

const PrimaryButtonText = styled.Text`
  text-align: center;
  color: #ffffff;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
`

export default ProductListItem
