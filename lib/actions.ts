'use server'
import { z } from "zod";
import prisma from "./prisma";
import { revalidatePath } from "next/cache";

export async function editProfile(userId:any, formData: FormData) {
    const schema = z.object({
        give: z.string().min(1),
        receive: z.string().min(1)
    })
    
    const parse = schema.safeParse({
        give: formData.get('give'),
        receive: formData.get('receive'),
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
            },
          })
      revalidatePath('/timeline')
      return { message: `update profile ${dataUser}` }
    } catch (e) {
      return { message: 'Failed to update profile' }
    }
  }