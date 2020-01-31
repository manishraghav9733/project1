import react, {useState, useEffect}
import axios from 'axios';

export default axios.create({
    baseURL: 'https://bizeminence.com/yougee/api/test/get_data'
});