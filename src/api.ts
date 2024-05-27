const url = import.meta.env.VITE_EXCHANGE_RATE_API_URL;
const apiKey = import.meta.env.VITE_EXCHANGE_RATE_API_KEY;

interface Currency {
  amountFrom: string;
  currencyFrom: string;
  amountTo: string;
  currencyTo: string;
  inputFrom?: boolean;
}

export const getRate = async (currency: Currency) => {
  const apiFrom = currency.inputFrom ? currency.currencyFrom : currency.currencyTo;
  const apiTo = currency.inputFrom ? currency.currencyTo : currency.currencyFrom;

  const response = await fetch(`${url}/${apiKey}/pair/${apiFrom}/${apiTo}`);
  const data = await response.json();
  const result = {
    amountFrom: currency.inputFrom ? currency.amountFrom : (+currency.amountTo * data.conversion_rate).toFixed(2),
    currencyFrom: currency.currencyFrom,
    amountTo: currency.inputFrom ? (+currency.amountFrom * data.conversion_rate).toFixed(2) : currency.amountTo,
    currencyTo: currency.currencyTo,
  };
  return result;
};
