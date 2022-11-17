export const logInfo = (...info: any[]) => {
  if (info[0] instanceof Error) {
    console.error(info)
  } else {
    if (process.env.NODE_ENV === 'development') {
      console.log(...info)
    }
  }
}
