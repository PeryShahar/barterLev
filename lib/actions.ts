'use server'
import { z } from "zod";
import prisma from "./prisma";
import { revalidatePath } from "next/cache";

export async function editProfile(userId:any, formData: FormData) {
    const schema = z.object({
        give: z.string(),
        receive: z.string(),
        country: z.string()
    })
    
    const parse = schema.safeParse({
        give: formData.get('give'),
        receive: formData.get('receive'),
        country: formData.get('country')
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
            },
          })
      revalidatePath('/timeline')
      return { message: `update profile ${dataUser}` }
    } catch (e) {
      return { message: 'Failed to update profile' }
    }
  }