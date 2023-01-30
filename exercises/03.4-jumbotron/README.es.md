# `03.4` Jumbotron

Usando todo lo que has aprendido...

## 📝 Instrucciones:

1. Construye un componente `Jumbotron` que reciba las siguientes propiedades:

```jsx
<Jumbotron
    title="Welcome to react"
    description="React is the most popular rendering library in the world"
    buttonLabel="Go to the official website"
    buttonURL="https://reactjs.org/"
/>
```

##  Resultado Esperado:
  
  ![Jumbotron](../../.learn/assets/03.4-1.png?raw=true)

## 💡 Pistas:

+ Recuerda usar los prop-types para validar las propiedades de tu componente.

+ Tu componente debería generar un HTML similar a este:

```html
<div class="jumbotron m-5">
  <h1 class="display-4">Welcome to react</h1>
  <p class="lead">React is the most popular rendering library in the world</p>
  <a class="btn btn-primary btn-lg" href="https://reactjs.org/" role="button">Go to the official website</a>
</div>
```
