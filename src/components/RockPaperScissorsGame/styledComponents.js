import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #223a5f;
`
export const ResultContainer = styled.div`
  border: 2px solid #ffffff;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  width: 65%;
  padding: 25px;
  margin-top: 45px;
  @media screen and (max-width: 767px) {
    width: 90%;
  }
`
export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
`

export const Option = styled.h1`
  font-size: 26px;
  font-family: 'Bree Serif';
  font-weight: 450;
  color: #ffffff;
  margin-top: 0px;
  margin-bottom: 0px;
  @media screen and (max-width: 767px) {
    font-size: 25px;
  }
`

export const ScoreCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 12px;
  width: 150px;
  height: 120px;
  @media screen and (max-width: 767px) {
    width: 120px;
  }
`

export const ScoreText = styled.p`
  font-size: 22px;
  font-family: 'Bree Serif';
  font-weight: 600;
  color: #223a5f;
  margin-bottom: 0px;
`

export const Score = styled.p`
  font-size: 37px;
  font-family: 'Roboto';
  font-weight: 700;
  color: #223a5f;
  margin-top: 0px;
`

export const GameViewContainer = styled.div`
  width: 65%;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  @media screen and (max-width: 767px) {
    width: 90%;
  }
`

export const UnOrderList = styled.ul`
  padding: 0px;
  list-style-type: none;
  display: flex;
  margin: 0px;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 450px;
`

export const PopupContainer = styled.div`
  display: flex;
  align-self: flex-end;
  margin-right: 20px;
`

export const TriggerButton = styled.button`
  font-size: 18px;
  font-weight: 400;
  font-family: 'Bree Serif';
  color: #223a5f;
  padding: 8px 16px 8px 16px;
  margin: 8px;
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
`
export const PopupBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 20px;
  padding-bottom: 10px;
`

export const CloseButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  padding: 8px;
  margin-top: 5px;
`

export const PopUpImage = styled.img`
  width: 90%;/-
  align-self: center;
  margin-top: 25px;
`

export const GameResultContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  justify-content: space-between;
`

export const SelectedOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
`

export const UserText = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Roboto';
`

export const UserChoiceImage = styled.img`
  width: 170px;
  height: 170px;
`

export const ResultText = styled.p`
  color: #ffffff;
  font-size: 28px;
  font-weight: 700;
  font-family: 'Roboto';
  text-align: center;
`

export const PlayAgainButton = styled.button`
  padding: 8px 18px 8px 18px;
  font-size: 18px;
  font-weight: 400;
  font-family: 'Roboto';
  color: #223a5f;
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  align-self: center;
  border-radius: 8px;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`
