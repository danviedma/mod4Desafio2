export const formatNumber = (number) => {
    if (typeof number !== "number" || isNaN(number)) {
      return "0"; 
    }
    return number.toLocaleString("es-CL");
  };
  