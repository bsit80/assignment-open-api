import { Controller, Get } from '@nestjs/common';
import { NetflixService } from './netflix.service';

@Controller('netflix')
export class NetflixController {
  constructor(private readonly netflixService: NetflixService) {}

  /**
   * Endpoint to fetch limited titles
   * GET /netflix/titles
   */
  @Get('titles')
  async getAllTitles() {
    const titles = await this.netflixService.getTitles();
    return {
      success: true,
      message: "🎥 Netflix Binge-Worthy Picks! 🍿",
      subtitle: "Here are the top 50 trending titles, ready for your next watch party! 🎉",
      totalTitles: titles.length,
      data: titles.map((title) => ({
        ...title,
        cuteTag: `📽️ Dive into "${title.name}" and enjoy the cinematic magic! ✨`,
      })),
    };
  }

  /**
   * Endpoint to fetch available countries
   * GET /netflix/countries
   */
  @Get('countries')
  async getCountries() {
    const countries = await this.netflixService.getCountries();
    return {
      success: true,
      message: "🌍 Netflix Global Availability",
      subtitle: "Find Netflix in your country! 📺",
      totalCountries: countries.length,
      data: countries.map((country, index) => ({
        id: index + 1,
        code: country,
        cuteTag: `📍 Netflix is available in ${country} 🌟`,
      })),
    };
  }
}
