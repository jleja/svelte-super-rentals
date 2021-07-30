import prisma from '$lib/db'

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