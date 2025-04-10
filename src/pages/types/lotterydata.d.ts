export interface LotteryData {
    displayDate: {
      date: string;
      month: string;
      year: string;
    };
    data: {
      first: {
        number: { value: string }[];
      };
      second: {
        number: { value: string }[];
      };
  
      third: {
        number: { value: string }[];
      };
      fourth: {
        number: { value: string }[];
      };
      fifth: {
        number: { value: string }[];
      };
      last3f: {
        number: { value: string }[];
      };
      last3b: {
        number: { value: string }[];
      };
      last2: {
        number: { value: string }[];
      };
      near1: {
        number: { value: string }[];
      };
    };
    n3:{
      straight3:{
        price: number;
        number: { value: string }[];
      }
      straight2:{
        price: number;
        number: { value: string }[];
      }
      shuffle3:{        
        price: number;
        number: { value: string }[];
      }
      special:{
        price: number;
        number: { value: string }[];
      }
    }
  }