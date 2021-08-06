import prisma from '$lib/db'

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