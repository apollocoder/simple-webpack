export const getButton = () => document.getElementById('my-button')

export const onClick = (element: HTMLElement, callback: () => void) =>
  element.addEventListener('click', callback)

export const getA = () =>
  (document.getElementById('input-a') as HTMLInputElement).value

export const getB = () =>
  (document.getElementById('input-b') as HTMLInputElement).value

export const write = (value: string) =>
  (document.getElementById('output').innerHTML = value)
