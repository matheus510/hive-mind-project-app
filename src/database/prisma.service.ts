import "dotenv/config";
import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    constructor() {
        const connectionString = process.env.DATABASE_URL || '';
        console.log('Connecting to database with connection string: ', connectionString);
        const pgAdapter = new PrismaPg({
            connectionString: connectionString,
        });
        super({
            adapter: pgAdapter
        })
    }

    async onModuleInit() {
        await this.$connect();
        console.log('Prisma connected to the database');
    }
}