import {Component} from 'react'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'
import GameOptions from '../GameOptions'

import {
  AppContainer,
  ResultContainer,
  OptionsContainer,
  Option,
  ScoreCard,
  ScoreText,
  Score,
  GameViewContainer,
  UnOrderList,
  PopupContainer,
  TriggerButton,
  CloseButton,
  PopupBody,
  PopUpImage,
  GameResultContainer,
  SelectedOptionContainer,
  UserText,
  UserChoiceImage,
  ResultText,
  PlayAgainButton,
  ResponsiveContainer,
} from './styledComponents'

const gameStatusConstant = {
  inProgress: 'IN_PROGRESS',
  win: 'WIN',
  lost: 'LOST',
  draw: 'DRAW',
}

class RockPaperScissorsGame extends Component {
  state = {
    userChoice: '',
    gameChoice: '',
    score: 0,
    gameStatus: gameStatusConstant.inProgress,
  }

  onClickPlayAgain = () => {
    this.setState({gameStatus: gameStatusConstant.inProgress})
  }

  setUserChoice = id => {
    this.setState(
      {userChoice: id, gameChoice: this.getGameChoice()},
      this.evaluateGame,
    )
  }

  getGameChoice = () => {
    const {choicesList} = this.props
    const gameChoiceList = choicesList.map(choice => choice.id)
    const randomIndex = Math.floor(Math.random() * 3)
    return gameChoiceList[randomIndex]
  }

  evaluateGame = () => {
    const {userChoice, gameChoice} = this.state
    if (userChoice === gameChoice) {
      this.setState({gameStatus: gameStatusConstant.draw})
    } else if (userChoice === 'ROCK') {
      if (gameChoice === 'SCISSORS') {
        this.setState(prevState => ({
          gameStatus: gameStatusConstant.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusConstant.lost,
          score: prevState.score - 1,
        }))
      }
    } else if (userChoice === 'PAPER') {
      if (gameChoice === 'ROCK') {
        this.setState(prevState => ({
          gameStatus: gameStatusConstant.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusConstant.lost,
          score: prevState.score - 1,
        }))
      }
    } else if (userChoice === 'SCISSORS') {
      if (gameChoice === 'PAPER') {
        this.setState(prevState => ({
          gameStatus: gameStatusConstant.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusConstant.lost,
          score: prevState.score - 1,
        }))
      }
    }
  }

  renderInProgressView = () => {
    const {choicesList} = this.props
    return (
      <UnOrderList>
        {choicesList.map(eachItem => (
          <GameOptions
            key={eachItem.id}
            gameDetails={eachItem}
            setUserChoice={this.setUserChoice}
          />
        ))}
      </UnOrderList>
    )
  }

  renderGameWonView = () => {
    const {userChoice, gameChoice} = this.state
    const {choicesList} = this.props
    const userChoiceObjList = choicesList.filter(
      choice => choice.id === userChoice,
    )
    const userChoiceObj = userChoiceObjList[0]

    const gameChoiceObjList = choicesList.filter(
      choice => choice.id === gameChoice,
    )
    const gameChoiceObj = gameChoiceObjList[0]

    return (
      <ResponsiveContainer>
        <GameResultContainer>
          <SelectedOptionContainer>
            <UserText>YOU</UserText>
            <UserChoiceImage src={userChoiceObj.imageUrl} alt="your choice" />
          </SelectedOptionContainer>
          <SelectedOptionContainer>
            <UserText>OPPONENT</UserText>
            <UserChoiceImage
              src={gameChoiceObj.imageUrl}
              alt="opponent choice"
            />
          </SelectedOptionContainer>
        </GameResultContainer>
        <ResultText>YOU WON</ResultText>
        <PlayAgainButton type="button" onClick={this.onClickPlayAgain}>
          PLAY AGAIN
        </PlayAgainButton>
      </ResponsiveContainer>
    )
  }

  renderGameLostView = () => {
    const {userChoice, gameChoice} = this.state
    const {choicesList} = this.props
    const userChoiceObjList = choicesList.filter(
      choice => choice.id === userChoice,
    )
    const userChoiceObj = userChoiceObjList[0]

    const gameChoiceObjList = choicesList.filter(
      choice => choice.id === gameChoice,
    )
    const gameChoiceObj = gameChoiceObjList[0]

    return (
      <ResponsiveContainer>
        <GameResultContainer>
          <SelectedOptionContainer>
            <UserText>YOU</UserText>
            <UserChoiceImage src={userChoiceObj.imageUrl} alt="your choice" />
          </SelectedOptionContainer>
          <SelectedOptionContainer>
            <UserText>OPPONENT</UserText>
            <UserChoiceImage
              src={gameChoiceObj.imageUrl}
              alt="opponent choice"
            />
          </SelectedOptionContainer>
        </GameResultContainer>
        <ResultText>YOU LOSE</ResultText>
        <PlayAgainButton type="button" onClick={this.onClickPlayAgain}>
          PLAY AGAIN
        </PlayAgainButton>
      </ResponsiveContainer>
    )
  }

  renderGameDrawView = () => {
    const {userChoice, gameChoice} = this.state
    const {choicesList} = this.props
    const userChoiceObjList = choicesList.filter(
      choice => choice.id === userChoice,
    )
    const userChoiceObj = userChoiceObjList[0]

    const gameChoiceObjList = choicesList.filter(
      choice => choice.id === gameChoice,
    )
    const gameChoiceObj = gameChoiceObjList[0]

    return (
      <ResponsiveContainer>
        <GameResultContainer>
          <SelectedOptionContainer>
            <UserText>YOU</UserText>
            <UserChoiceImage src={userChoiceObj.imageUrl} alt="your choice" />
          </SelectedOptionContainer>
          <SelectedOptionContainer>
            <UserText>OPPONENT</UserText>
            <UserChoiceImage
              src={gameChoiceObj.imageUrl}
              alt="opponent choice"
            />
          </SelectedOptionContainer>
        </GameResultContainer>
        <ResultText>IT IS DRAW</ResultText>
        <PlayAgainButton type="button" onClick={this.onClickPlayAgain}>
          PLAY AGAIN
        </PlayAgainButton>
      </ResponsiveContainer>
    )
  }

  renderGameView = () => {
    const {gameStatus} = this.state
    switch (gameStatus) {
      case gameStatusConstant.inProgress:
        return this.renderInProgressView()
      case gameStatusConstant.win:
        return this.renderGameWonView()
      case gameStatusConstant.lost:
        return this.renderGameLostView()
      case gameStatusConstant.draw:
        return this.renderGameDrawView()

      default:
        return null
    }
  }

  render() {
    const {score} = this.state

    return (
      <AppContainer>
        <ResultContainer>
          <OptionsContainer>
            <Option>
              ROCK
              <br />
              PAPER
              <br />
              SCISSORS
            </Option>
          </OptionsContainer>
          <ScoreCard>
            <ScoreText>Score</ScoreText>
            <Score>{score}</Score>
          </ScoreCard>
        </ResultContainer>
        <GameViewContainer>{this.renderGameView()}</GameViewContainer>
        <PopupContainer>
          <Popup
            modal
            trigger={<TriggerButton type="button">Rules</TriggerButton>}
          >
            {close => (
              <PopupBody>
                <PopUpImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
                <CloseButton
                  type="button"
                  className="close-button"
                  onClick={() => close()}
                >
                  <RiCloseLine type="button" />
                </CloseButton>
              </PopupBody>
            )}
          </Popup>
        </PopupContainer>
      </AppContainer>
    )
  }
}

export default RockPaperScissorsGame
