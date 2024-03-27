'use server'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import prisma from "./prisma";

const userProfileSchema = z.object({
  give: z.string(),
  receive: z.string(),
  country: z.string(),
  city: z.string(),
  personal_info: z.string(),
  birth_year: z.string(),
});

async function parseFormData(formData: any, schema: any) {
  const formDataObject = Object.fromEntries([...formData.entries()]);
  return schema.safeParse(formDataObject);
}

async function updateUserProfile(userId: string, data: any, extraData = {}) {
  try {
    await prisma.user.update({
      where: { id: userId },
      data: { ...data, ...extraData },
    });
    return { success: true };
  } catch (e) {
    return { message: 'Failed to update profile', success: false };
  }
}

export async function editProfile(userId: string, formData: FormData) {
  const parse = await parseFormData(formData, userProfileSchema);

  if (!parse.success) {
    return { message: 'Failed to update profile' };
  }

  const result = await updateUserProfile(userId, parse.data);
  if (result.success) {
    revalidatePath('my-profile');
  }
  return result;
}

export async function editProfileFirstTime(userId: string, formData: FormData) {
  const parse = await parseFormData(formData, userProfileSchema);

  if (!parse.success) {
    return { message: 'Failed to update profile' };
  }

  const result = await updateUserProfile(userId, parse.data, { has_first_time: false });
  if (result.success) {
    redirect('/');
  }
  return result;
}

export async function filterByCountry(userId: string | undefined, country: string) {

  const schema = z.object({
    country: z.string()
  })

  const parse = schema.safeParse({
    country: country
  })

  if (!parse.success) {
    return { message: 'Failed to update profile' };
  }

  try {
    const usersByCountry = await prisma.user.findMany({
      where: {
        id: { not: userId },
        country: parse.data.country,
      },
      select: { id: true, name: true, email: true, image: true, give: true, receive: true, country: true, city: true },
    });
    revalidatePath('/timeline');
    return usersByCountry;
  } catch (e) {
    throw new Error('error in filter users');
  }
}
