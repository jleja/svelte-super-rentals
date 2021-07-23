import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function get({ params }) {
	const rental = await prisma.rental.findUnique({
		where: {
			id: params.rentalId,
		},
		include: {
			location: true
		}
	});

	if (rental) {
		return {
			body: {
				rental
			}
		};
	}
}