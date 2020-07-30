import React from 'react'

import Button from 'components/Button'
import { gaEvent } from 'utils/ga'

import * as S from './styles'
import { PricingBoxProps } from 'types/api'

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

const PricingBox = ({
  totalPrice,
  numberInstallments,
  priceInstallments,
  benefits,
  button
}: PricingBoxProps) => (
  <S.Box>
    <S.Prices>
      <S.FullPrice>
        De <span>R$ {totalPrice}</span> por apenas
      </S.FullPrice>
      <S.DiscountPrice>
        <span>{numberInstallments}x de</span> R$ {priceInstallments}
      </S.DiscountPrice>
    </S.Prices>
    <S.BenefitsList
      dangerouslySetInnerHTML={{ __html: benefits }}
    ></S.BenefitsList>

<<<<<<< HEAD
    <Button href={button.url} onClick={onClick} withPrice>
      <p>{button.label}</p>
=======
      <S.BenefitsItem>
        Código de <strong>todo o projeto</strong> separado em commits
      </S.BenefitsItem>

      <S.BenefitsItem>
        Contato <strong>direto</strong> com os instrutores via Slack
      </S.BenefitsItem>

      <S.BenefitsItem>
        <strong>Lives exclusivas</strong> durante o curso
      </S.BenefitsItem>
    </S.BenefitsList>

    <Button
      href="https://www.udemy.com/course/react-avancado/?couponCode=BESTSELLER"
      onClick={onClick}
      withPrice
    >
      <p>Comprar o curso</p>
>>>>>>> 531f95fc3892fdfbd04297f14de82ca120484702
      <div>
        <S.ButtonFullPrice>R$ {totalPrice}</S.ButtonFullPrice>
        <S.ButtonDiscountPrice>
          R$ {numberInstallments * priceInstallments}
        </S.ButtonDiscountPrice>
      </div>
    </Button>
  </S.Box>
)

export default PricingBox
