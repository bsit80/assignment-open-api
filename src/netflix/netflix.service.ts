import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class NetflixService {
  private readonly baseUrl = 'https://netflix-api10.p.rapidapi.com/api';

  /**
   * Fetch titles from the Netflix API and format them for the response.
   * Returns an array of titles limited to 50 with formatted data.
   */
  async getTitles(): Promise<{ id: number; name: string; creativeTagline: string }[]> {
    try {
      // Fetch data from the API
      const response = await axios.get(`${this.baseUrl}/titles`, {
        headers: {
          'X-Rapidapi-Key': '97bfee352bmsh529350ac99792e5p171b11jsnee6aeb5b17f3',
          'X-Rapidapi-Host': 'netflix-api10.p.rapidapi.com',
        },
      });

      // Get the first 50 titles
      const rawTitles = (response.data as string[]).slice(0, 50);

      // Transform the data
      return rawTitles.map((title: string, index: number) => ({
        id: index + 1,
        name: title || 'Untitled', // Default to 'Untitled' if the title is empty
        creativeTagline: `✨ #${index + 1}: "${title || 'Untitled'}" is ready to binge! 🍿`,
      }));
    } catch (error) {
      // Log the error and throw an HTTP exception
      console.error('Error fetching titles:', error.response?.data || error.message);
      throw new HttpException(
        'Failed to fetch titles',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getCountries() {
    try {
      const response = await axios.get(`${this.baseUrl}/countries`, {
        headers: {
            'X-Rapidapi-Key': '97bfee352bmsh529350ac99792e5p171b11jsnee6aeb5b17f3',
            'X-Rapidapi-Host': 'netflix-api10.p.rapidapi.com',
        },
      });
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch countries',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  
}
