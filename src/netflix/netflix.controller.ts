import { Controller, Get, Query } from '@nestjs/common';
import { NetflixService } from './netflix.service';

@Controller('netflix')
export class NetflixController {
  constructor(private readonly netflixService: NetflixService) {}

  /**
   * Endpoint to fetch all titles
   * GET /netflix/titles
   */
  @Get('titles')
  async getAllTitles() {
    return this.netflixService.getTitles();
  }

 
}
