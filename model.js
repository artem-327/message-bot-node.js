const store = [];

export const createMsg = () => {
  if(store.length) {
    const id = store[store.length - 1].id + 1;
    store.push({
      id: id,
      firstName: '',
      birthday: '0000-00-00'
    });
  } else {
    store.push({
      id: 0,
      firstName: '',
      birthday: '0000-00-00'
    });
  }
  
  return {success: 'ok'};
};

export const deleteMsg = (id) => {
  const index = store.findIndex((msg) => msg.id === id);
  return index ? store.splice(index, 1) : null;
};

export const updateMsg = (id, details) => {
  const em = store.find((msg) => msg.id === id);
  if (!em.length) {
    return null;
  }
  let updated = em[0]
  updated.firstName = details.firstName ? details.firstName : updated.firstName;
  updated.birthday = details.birthday ? details.birthday : updated.birthday;
  return updated;
};

export const findMsg = (id) => {
  const em = store.filter((msg) => msg.id === id);
  if (em.length) {
    return em[0];
  } else {
    return null;
  }
};

export const getAllMsg = () => {
  return store;
};

export const findDateToBirthday = (id) => {
  const em = store.find((msg) => msg.id === id);
  if (!em.length) {
    return null;
  }
  const birthday = em[0].birthday.split('-');
  const Bmonth = Number(birthday[1]) - 1;
  const Bday = Number(birthday[2]);

  const oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
  const firstDate = new Date();
  const secondDate = new Date(new Date().getFullYear(), Bmonth, Bday);
  const thridDate = new Date(new Date().getFullYear() + 1, Bmonth, Bday);
  
  if (secondDate.getTime() > firstDate.getTime()) {
    return Math.round(Math.abs((secondDate.getTime() - firstDate.getTime())/(oneDay)));
  } else {
    return Math.round(Math.abs((thridDate.getTime() - firstDate.getTime())/(oneDay)));
  }
};
