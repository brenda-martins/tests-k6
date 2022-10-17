import http from 'k6/http';
import { sleep } from 'k6';

//Init

//Base Function
export default function(){
    //The K6 get its virtual users(VUs) and make a request to url
    http.get('https://test.k6.io');
    sleep(1);
}