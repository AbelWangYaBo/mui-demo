

export const getList = (query: AnyObject): Promise<{ rows: any[], total: number }> => {

  return new Promise((res) => {
    setTimeout(() => {
      res({
        rows: [
          {
            customer: 'N Sunderlal & Company',
            webOrderNo: 'Z04/0006201603/22/95',
            poNo: '33234324324',
            date: '09-May-2023',
            plant: '62B6',
            createdBy: 'Mr. Saurabh Devlekar',
            shipToParty: 'N. Sunderlal & Co. (Anish)-Navi Mumbai [0006233732] -',
            asPerContract: '6,646.20',
            requestedTotal: '.00',
            comment: '',
            smComment: ''
          }
        ],
        total: 0,
      })
    }, 800)
  })

}

export const getDetail = (query: AnyObject): Promise<any> => {

  return new Promise((res) => {

    setTimeout(() => {

      res({
        customer: 'N Sunderlal & Company',
        webOrderNo: 'Z04/0006201603/22/95',
        poNo: '33234324324',
        date: '09-May-2023',
        plant: '62B6',
        createdBy: 'Mr. Saurabh Devlekar',
        shipToParty: 'N. Sunderlal & Co. (Anish)-Navi Mumbai [0006233732] -',
        asPerContract: '6,646.20',
        requestedTotal: '.00',
        comment: '',
        smComment: ''
      })
    }, 800)
  })

}