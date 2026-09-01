import { View, Text, TextInput, Button, Alert} from "react-native"
import { useState } from "react"

export default function Cadastro({navigation}){
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    return(
        <View>
                <Text>Cadastro</Text>

                <TextInput
                    placeholder="E-mail"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <TextInput
                    placeholder="Senha"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry
                />

                <Button
                    title="Cadastrar"
                    onPress={()=>alert('Cadastro em construção')}
                />

                <Button
                    title="Já tem uma conta? Acesse"
                    onPress={()=>navigation.navigate('Login')}
                />
        </View>

    )
}