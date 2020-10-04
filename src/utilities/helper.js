export const isValidString = (string) => {
  let reg = /^\s*$/;
  if (reg.test(string) === true) {
    return false;
  }
  return true;
};

export const isValidNumber = (string) => {
  let reg = /^\s*[+-]?(\d+|\.\d+|\d+\.\d+|\d+\.)(e[+-]?\d+)?\s*$/;
  if (reg.test(string) === true) {
    return true;
  }
  return false;
};

export const getData = (data) => {
  if(data == null || data == undefined){
    return []
  }
  let datewiseJson = {};
  data.forEach((t) => {
    const date = t.date;
    if (datewiseJson[date]) {
      const allValues = datewiseJson[date];
      datewiseJson[date] = [...allValues, ...[t]];
    } else {
      datewiseJson[date] = [t];
    }
  });
  const section = [];
  for (const key in datewiseJson) {
    let allExpense = 0;
    const allExpenses = datewiseJson[key];
    allExpenses.forEach((element) => {
      allExpense += parseFloat(element.amount);
    });

    const info = {
      header: {date: key, expense: allExpense},
      data: allExpenses,
      footer: '',
    };
    section.push(info);
  }

  return section;
};

Date.prototype.isValid = function () {
  // An invalid date object returns NaN for getTime() and NaN is the only
  // object not strictly equal to itself.
  return this.getTime() === this.getTime();
};  

export const isValidDate = (string) => {
  const d = new Date(string);
  return d.isValid()
}

export const getCategoriesData = (categories, expenseList) => {
  if(categories == null || categories == undefined || expenseList == null || expenseList == undefined){
    return []
  }
  let categoryData = {}
  expenseList.forEach(element => {
    const category = element.category
    if (categoryData[category]) {
      const total =  parseFloat(element.amount) + categoryData[category] || 0;
      categoryData[category] = total;
    } else {
      categoryData[category] = parseFloat(element.amount);
    }
  });

  const newCat = categories.map(cat =>{
    const info = {
      name: cat,
      amount: categoryData[cat] || 0
    }
    return info
  })
  
  return newCat
}