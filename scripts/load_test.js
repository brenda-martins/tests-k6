import http from 'k6/http';
import { sleep } from 'k6';


export const options = {
    stages: [
        {duration: '30s', target: 4}, //ramp-up
        {duration: '30s', target: 4}, //stress
        {duration: '30s', target: 0},//rump-down
    ]
}

export default function(){
    http.get('https://test.k6.io');
    sleep(1);
}