interface Props {
  text: string
}

export default class DefProps {
  public handleSubmit?: (value: string) => void

  public textObj?: Props = {
    text: 'jqx',
  }
}
