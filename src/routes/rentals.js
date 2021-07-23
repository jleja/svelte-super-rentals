import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function get() {
	const rentals = await prisma.rental.findMany({
		include: {
			location: true
		}
	});

	if (rentals) {
		return {
			body: {
				rentals
			}
		};
	}
}