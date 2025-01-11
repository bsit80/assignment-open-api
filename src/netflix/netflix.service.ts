import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class NetflixService {
  private readonly baseUrl = 'https://netflix-api10.p.rapidapi.com/api';

  async getTitles() {
    try {
      const response = await axios.get(`${this.baseUrl}/titles`, {
        headers: {
          'X-Rapidapi-Key': '97bfee352bmsh529350ac99792e5p171b11jsnee6aeb5b17f3',
          'X-Rapidapi-Host': 'netflix-api10.p.rapidapi.com',
        },
      });
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch titles',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  
}
