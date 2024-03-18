'use server'
import { revalidatePath } from "next/cache";
import { z } from "zod";
import prisma from "./prisma";

export async function editProfile(userId: string | undefined, formData: FormData) {

  const schema = z.object({
    give: z.string(),
    receive: z.string(),
    country: z.string(),
    city: z.string(),
    personal_info: z.string(),
    birth_year: z.string()
  })

  const parse = schema.safeParse({
    give: formData.get('give'),
    receive: formData.get('receive'),
    country: formData.get('country'),
    city: formData.get('city'),
    personal_info: formData.get('personal_info'),
    birth_year: formData.get('birth_year')
  })

  if (!parse.success) {
    return { message: 'Failed to update profile' }
  }

  const dataUser = parse.data

  try {
    await prisma.user.update({
      where: {
        id: userId
      },
      data: {
        give: dataUser.give,
        receive: dataUser.receive,
        country: dataUser.country,
        personal_info: dataUser.personal_info,
        city: dataUser.city,
        birth_year: dataUser.birth_year,
        has_first_time: false
      },
    })
    revalidatePath('/my-profile')
  } catch (e) {
    return { message: 'Failed to update profile' }
  }
}
export async function filterByCountry(userId: string | undefined, country: string) {

  const schema = z.object({
    country: z.string()
  })

  const parse = schema.safeParse({
    country: country
  })

  if (!parse.success) {
    return { message: 'Failed to update profile' }
  }

  const dataUser = parse.data

  try {
    const usersByCountry = await prisma.user.findMany({
      where: {
        id: {
          not: userId
        },
        country: dataUser.country
      },
      select: { id: true, name: true, email: true, image: true, give: true, receive: true, country: true, city: true }
    });
    revalidatePath('/timeline')
    return usersByCountry;
  } catch (e) {
    throw new Error('error in filter users')
  }
}
