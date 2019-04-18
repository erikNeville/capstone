const initState = {
    jobs: [
        {"job_no":1,"project":"Pharmacia and Upjohn Company","address":"56 Erie Point","permit":8819,"contractor":"Singlestem Buckwheat","phone":"549-965-7902","manager":"Djokic"},
        {"job_no":2,"project":"Antigen Laboratories, Inc.","address":"707 Clemons Junction","permit":1663,"contractor":"California Rockcress","phone":"412-506-3310","manager":"Lyster"},
        {"job_no":3,"project":"Major Pharmaceuticals","address":"42 Almo Drive","permit":2856,"contractor":"Weber's Xanthoparmelia Lichen","phone":"281-895-2684","manager":"Bayley"},
        {"job_no":4,"project":"AnazaoHealth Corporation","address":"65 Shelley Street","permit":4748,"contractor":"Leucobryum Moss","phone":"250-603-6770","manager":"Binyon"},
        {"job_no":5,"project":"General Injectables \u0026 Vaccines, Inc.","address":"6019 Westerfield Way","permit":8106,"contractor":"Gorman's Buttercup","phone":"437-789-0652","manager":"Lear"},
        {"job_no":6,"project":"CVS","address":"7 Morrow Park","permit":7922,"contractor":"Lecania Lichen","phone":"870-299-0923","manager":"Salzburg"},
        {"job_no":7,"project":"Energetix Corp","address":"62 Ramsey Parkway","permit":6283,"contractor":"Ornithostaphylos","phone":"179-219-0010","manager":"Lavelle"}
    ]
}

const jobReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_JOB': 
            console.log('created job', action.job)
            return state;
        case 'CREATE_JOB_ERROR':
            console.log('create job error ', action.err)
            return state;
        default:
            return state;
    }
}

export default jobReducer