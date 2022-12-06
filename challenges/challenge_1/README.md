# Challenge 1 (en)
The elves bought a gift-wrapping machine this year. But it's not programmed! **We need to create an algorithm that helps it in the task.**

The machine receives an array of gifts. Each gift is a `string`. We need the machine to wrap each gift in wrapping paper and place it in an array of wrapped gifts.

The wrapping paper is the `*` symbol, and in order to wrap a gift, you need to place it surrounding the string. For example:

```javascript
const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
/* [
  "*****\\n*cat*\\n*****",
  "******\\n*game*\\n******",
  "*******\\n*socks*\\n*******"
] */
```

As you can see, the wrapping paper wraps the string. On top and bottom, so as not to leave any gaps, the corners are also covered with wrapping paper.

**Note:** The `\n` represents a line break.

**Watch out!** Make sure you put the right number of `*` symbols to wrap completely the string. But not too many! Just enough to cover the string.

Ah, **and do not mutate the original array!**

# Challenge 1 (es)
Este año los elfos han comprado una máquina que envuelve regalos. Pero… ¡no viene programada! Necesitamos crear un algoritmo que le ayude en la tarea.

A la máquina se le pasa un array con los regalos. Cada regalo es un string. Necesitamos que la máquina envuelva cada regalo en papel de regalo y lo coloque en un array de regalos envueltos.

El papel de regalo es el símbolo `*` y para envolver un regalo se coloca el símbolo `*` de forma que rodee totalmente al string por todos los lados. Por ejemplo:

```javascript
const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
/* [
  "*****\\n*cat*\\n*****",
  "******\\n*game*\\n******",
  "*******\\n*socks*\\n*******"
] */
```

Como ves, el papel de regalo envuelve el string. Por arriba y por abajo, para no dejar ningún hueco, las esquinas también están cubiertas por el papel de regalo.

**Nota:** El carácter `\n` representa un salto de línea.

**¡Ojo!** Asegúrate que pones el número correcto de `*` para envolver completamente el string. Pero no demasiados. Sólo los necesarios para cubrir el string.

Ah, **y no modifiques (mutes) el array original.**