import axios from 'axios';
export default {
  GetCollectionData() {
    return axios({
      method: 'GET',
      url: 'https://api.apiopen.top/getSingleJoke?sid=28654780',
    });
  },
  addCollection(params: any) {
    //其他请求....
  },
};
