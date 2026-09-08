<<<<<<< HEAD
    import { View, Text, Button } from "react-native"

    export default function Home(navigation){
        return(
            <View>

                <Text>Seja bem-vindo(a)!</Text>

                <Text>Usuário:</Text>

                <Button
                    title="Sair"
                    onPress={()=>alert("Sair em construção")}
                />

                

            </View>
        )

    }
=======
import {View, Text, Button} from "react-native"
import {auth} from "../config/firebase"
import {sair} from "../services/auth" 

export default function Home(){
    async function realizarLogout() {
        await sair()
        navigation.navigation("Login")
    }
    return(
        <View>
            <Text>Seja bem-vindo(a)!</Text>
            <Text>Usuário: {auth.currentUser?.email}</Text>
            <Button
                title='Sair'
                onPress={realizarLogout}
            />
        </View>
    )
}
>>>>>>> 285302b (mudanças gerais aula 08/09)
