# Cofre Bugadão

Um novo cofre foi desenvolvido com a mais moderna tecnologia em segurança e criptografia. Na porta do cofre há um teclado com todas as letras do alfabeto em que a pessoa pode digitar a senha predefinida para abrir a porta.

Durante alguns testes de rotina foi descoberto um bug na hora de validar a senha: O cofre ignora letras erradas durante a digitação da senha, desde que todas as letras da senha tenham sido digitadas na ordem correta.

Por exemplo, se a senha for “cubos” e for digitado “cuggbyos”, o cofre irá abrir.

## Input Format

A entrada consistirá em duas linhas, na primeira linha estará a senha correta. Na segunda linha estará a palavra digitada pela pessoa.

## Output Format

Imprima “SIM” caso o cofre abra. Caso contrário, imprimir “NAO”.

---
### Sample Input 0
> cubos
> cuggbyos

### Sample Output 0
> SIM
---
### Sample Input 1
> cubos
> uewvelrabsocaeln

### Sample Output 1
> NAO