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
      message: "Check out the top 50 Netflix titles, handpicked for you! 🎉",
      totalTitles: titles.length,
      data: titles,
    };
  }
}
