import { format } from 'date-fns'

export const currencyFormatter = data => {
  if (data > 1000 && data < 1000000) {
    return `$${data}  K`
  } else if (data >= 1000000) {
    return `$${data}  MM`
  } else if (data < 1000) {
    return `$${data}`
  }
}

export const dataFormatter = data => {
  if (data > 1000 && data < 1000000) {
    const value = data / 1000
    return value
  } else if (data < 1000) {
    return data
  } else if (data > 1000000) {
    const value = data / 1000000
    return value.toFixed(2)
  }
}

export const dataAndCurrencyFormatter = data => {
  if (data > 1000 && data < 1000000) {
    const value = data / 1000
    return `$${value.toFixed(2)}  K`
  } else if (data >= 1000000) {
    const value = data / 1000000
    return `$${value}  M`
  } else if (data < 1000) {
    return `$${data}`
  }
}

export const percentFormatter = data => {
  const value = data * 100
  return `${value.toFixed(2)}  %`
}

export const dateFormatter = date => {
  const newDate = format(new Date(date.value), 'yyyy/MM/dd')
  return newDate
}
