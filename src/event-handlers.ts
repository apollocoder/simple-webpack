import { add } from './calculator'

export function initEventHandlers() {
  const button = document.getElementById('my-button')
  button.addEventListener('click', () => {
    const sum = add(getA(), getB())
    write(sum.toString())
  })
}

const getA = () =>
  (document.getElementById('input-a') as HTMLInputElement).value

const getB = () =>
  (document.getElementById('input-b') as HTMLInputElement).value

const write = (value: string) =>
  (document.getElementById('output').innerHTML = value)
