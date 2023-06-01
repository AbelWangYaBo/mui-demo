
export function submit({ oldPassword, password, password2 }:
  { oldPassword: string, password: string, password2: string }) {
  console.log({ oldPassword, password, password2 })
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        res(true)
      } else {
        rej({
          message: 'Test: mock errors.'
        })
      }
    }, 800)
  })
}