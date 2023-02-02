const showFormattedDate = (date, lang='id') => {
  let locale
  if(lang === 'id') locale = 'id-ID'
  else locale = 'en-GB'
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString(locale, options);
  // return new Date(date).toLocaleTimeString('id-ID');
};

export { showFormattedDate };
