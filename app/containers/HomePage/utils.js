import isEmpty from 'lodash/isEmpty';

export const formatDate = date => {
    const d = new Date(date);
    return `${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()}`;
}

export const constructStringMultiSearch = (str, es = '?') => {
    console.log(str);
    Object.keys(str).forEach(d => {
      if (!isEmpty(str[d])) {
        if (d === 'date') {
          es += `${d}=${formatDate(str[d][0])}:${formatDate(str[d][1])}&`;
        } else if (d === 'price') {
          es += `${d}=${str[d].min}:${str[d].max}&`;
        } else {
          es += `${d}=${str[d]}&`;
        }
      }
    });
    console.log(es);
    return es.slice(0, -1);
}

export const constructStringSingleSearch = (str, type) => {
    switch(type){
        case 'name':
        case 'city':
            return `?${type}=${str[type]}`;
        case 'price':
            return `?${type}=${str[type].min}:${str[type].max}`;
        case 'date':
            return `?${type}=${formatDate(str[type][0])}:${formatDate(str[type][1])}`
        default: 
            return '';
    }
}
