import moment from "moment"

export function log(message: string, optionalParams?: string) {
  const finalOptionalParams = optionalParams || 'color: cyan'
  const now = moment().format('HH:mm:ss.SSS')
  const prefix = `[${now}]`
  console.log(`%c${prefix} %c${message}`, 'color: gray', finalOptionalParams)
}