export default class API{
    static ID                  = '6d8e710f9b34dc5e705f46f30da44c87 ';
    static BASE_URL            = 'http://adavitya.predot.co.in/';
    static BASE_IMAGE_URL      = 'http://adavitya.predot.co.in/';
  
    static post(url, ext_data, success) {
      let data = new FormData();
      for (let key in ext_data) {
          if ((typeof ext_data[key]) == 'object') {
              data.append(key, JSON.stringify(ext_data[key]));
          } else {
              data.append(key, ext_data[key]);
          }
      }
      fetch(url, {
              method: 'POST',
              body: data,
          }).then((response) => response.json())
          .then((responseJson) => {
              success(responseJson);
          })
          .catch((error) => {
              console.error(error);
          });
  }
}  