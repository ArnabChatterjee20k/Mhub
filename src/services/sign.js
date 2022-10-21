import { client } from "./client";

export const signInWithEmail = async (email,password) => {
    const { data, error } = await client.auth.signInWithPassword({
        email: email,
        password: password,
    })

    if (error) return error
    return data
}

async function signOut() {
    const { error } = await supabase.auth.signOut()
    error?error:null
}
  
export async  function signInWithEmail(email,password){
    const { data, error } = await client.auth.signInWithPassword({
        email: email,
        password: password,
    })

    if (error) return error
    return data
}