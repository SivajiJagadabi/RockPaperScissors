import {ListOptions, OptionButton, OptionImage} from './styledComponents'

const GameOptions = props => {
  const {gameDetails, setUserChoice} = props
  const {id, imageUrl} = gameDetails

  const onClickGameOption = () => setUserChoice(id)

  return (
    <ListOptions>
      <OptionButton
        type="button"
        onClick={onClickGameOption}
        data-testid={`${id.toLowerCase()}Button`}
      >
        <OptionImage src={imageUrl} alt={id} />
      </OptionButton>
    </ListOptions>
  )
}

export default GameOptions
