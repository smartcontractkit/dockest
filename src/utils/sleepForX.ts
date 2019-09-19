import sleep from './sleep'
import Logger from '../Logger'

export default async (reason = '', secondsToSleep = 30): Promise<void> => {
  for (let i = 0; i < secondsToSleep; i++) {
    Logger.replacePrevLine(`${reason}: ${i + 1}/${secondsToSleep}`, i === secondsToSleep - 1)

    await sleep()
  }
}