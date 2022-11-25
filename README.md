# Tsks - Task Tracker Web Application.

## Table of contents

- [Overview](#overview)
  - [Screenshot](./assets/screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview
### _Tsks...a web application that is used to keep track of daily tasks in life_. 

### Screenshot
![712AA5DC-74EB-408E-B10F-3130307BDDB5_1_201_a](https://user-images.githubusercontent.com/93778975/204041029-e701d49d-b4ed-4a63-bf42-b3733ea83d53.jpeg)


### Links

- Solution URL: (https://github.com/Wizzy-05/Tsks)
- Live Site URL: (https://tsks-three.vercel.app/)

## My process

### Built with

- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React js](https://beta.reactjs.org/) - JS library
- [Sass](https://sass-lang.com) - CSS Preprocessor 
- [Firebase](https://firebase.google.com/docs) - Backend as a Service.


### Some Nice Stuffs

```JS
      const handleSubmit = async(e) => {
        e.preventDefault();
        if (taskRef.current.value === "") {
            setValid("Enter a valid input");
            return
        }else{
            setValid("Add a Task");
        }

        setNum(tasks.length + 1);

        await addDoc(collection(db,`${authentication.currentUser.uid}-${General}`), {
            text:taskRef.current.value.toLowerCase(),
            day:day
        })
        taskRef.current.value = "";
      } 
```
```scss
      %home-error{
          width: 100%;
          height: 100vh;
          background-image: url(./assets/Desktop/Error.png);
          background-repeat: no-repeat;
          background-size: cover;
          display: grid;
          grid-template-columns: 150px 1fr 150px;
          grid-template-rows: 80px 350px 1fr 250px 400px 80px;
          grid-template-areas:
          'div nav divs'
          'div header divs'
          'div image divs'
          'div expertise divs'
          'tsksPeople tsksPeople tsksPeople'
          'footer footer footer';
      }
```
```JSX
      <div className="expertise" id="features">
        <h2>Harness Expertise, Unleash Innovations</h2>
        <p>
          Whether you are in the office, school, or at home, TSKS can always meet your requirements for instant creativity and collaboration in daily-life           scenarios. We will always help you convey passion, inspire innovation, and stand out among peers, whether you are a business professional or a             student.
        </p>

        <NavLink to="/SignUp" style={{textDecoration:"none"}}>
          <Button className='black' variant="contained">Explore Tsks</Button>
        </NavLink>

      </div>
```



### Continued development

- Css Grid
- Sass functions
- React js
- Sass
- Node js
- Express js


### Useful resources

- [Firbase Docs](https://firebase.google.com/docs): This helped me while working with Backend. I'll Like to work with it in upcoming projects.

## Author
- Github - [@Wizzy-05](https://github.com/Wizzy-05)
- Twitter - [@ahuzi_wisdom](https://twitter.com/ahuzi_wisdom)


## Acknowledgments
I really appreciate Harry @OpeAbidemi.


