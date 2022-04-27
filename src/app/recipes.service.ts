import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Observable, of } from 'rxjs';

// instructions
//
//
//
//
//

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 1,
      name: 'Coconut Curry Lentils',
      ingredients: [
        {
          name: 'Red onion',
          quantity: '1',
        },
        {
          name: 'Garlic',
          quantity: '3 cloves',
        },
        {
          name: 'Chopped peppers',
          quantity: 'Your preference',
        },
        {
          name: 'Brown lentils',
          quantity: '1 C',
        },
        {
          name: 'Curry powder',
          quantity: '1 Tbsp',
        },
        {
          name: 'Ginger',
          quantity: '1 tsp',
        },
        {
          name: 'Turmeric',
          quantity: '1 tsp',
        },
        {
          name: 'Olive oil',
          quantity: '1 Tbsp',
        },
        {
          name: 'Salt',
          quantity: '10 twists',
        },
        {
          name: 'Black pepper',
          quantity: '10 twists',
        },
        {
          name: 'Coconut milk',
          quantity: '1 13oz can',
        },
        {
          name: 'Vegetable broth',
          quantity: '2 C',
        },
      ],
      instructions: [
        'Heat pan over medium heat and add the oil. Once the oil is heated up add the garlic, peppers and ginger and sautee for 1 minute.',
        'Add the onion, curry powder and turmeric mix and saute until the onion is soft and translucent.',
        'Add the vegetable broth, turn the heat up to medium high until it comes to a boil. Once boiling, then simmer for 20 minutes with the lid on stirring occasionally.',
        'Add the coconut milk and mix. Then turn the heat up to medium high until it comes to a boil, then simmer for 10 minutes.',
        'Server over rice, with naan or eat on its own.',
      ],
    },
    {
      id: 2,
      name: 'Lentil Tacos',
      ingredients: [
        {
          name: 'Brown lentils',
          quantity: '1 C',
        },
        {
          name: 'Water',
          quantity: '1 3/4 C',
        },
        {
          name: 'Tomato sauce',
          quantity: '4 oz',
        },
        {
          name: 'Salt',
          quantity: '1 tsp',
        },
        {
          name: 'Cumin',
          quantity: '2 tsp',
        },
        {
          name: 'Garlic powder',
          quantity: '1 tsp',
        },
        {
          name: 'Chili powder',
          quantity: '1 tsp',
        },
        {
          name: 'Onion powder',
          quantity: '1 tsp',
        },
      ],
      instructions: [
        'Put all ingredients in the Instant Pot and mix together',
        "Close the lid, and make sure it's sealed",
        'Press the manual button and set for 15 minutes',
        "When it's done turn off and release pressure",
        'Let sit for a few minutes before serving',
      ],
    },
    {
      id: 3,
      name: 'Broccoli Mac & Cheese',
      ingredients: [
        {
          name: 'Olive oil',
          quantity: '2 Tbsp',
        },
        {
          name: 'Onion (chopped)',
          quantity: '1 ',
        },
        {
          name: 'Macaroni pasta',
          quantity: '1 lb',
        },
        {
          name: 'Broccoli florets',
          quantity: '2 1/2 C',
        },
        {
          name: 'Butter',
          quantity: '3 Tbsp',
        },
        {
          name: 'Flour',
          quantity: '4 Tbsp',
        },
        {
          name: 'Cayenne pepper',
          quantity: '1/2 tsp',
        },
        {
          name: 'Paprika',
          quantity: '1 tsp',
        },
        {
          name: 'Whole milk',
          quantity: '3 C',
        },
        {
          name: 'Vegetable stock',
          quantity: '1 C',
        },
        {
          name: 'Sharp cheddar',
          quantity: '3 C',
        },
        {
          name: 'Dijon mustard',
          quantity: '1 Tbsp',
        },
      ],
      instructions: [
        'Place a pot of water on to boil the macaroni',
        'Heat a medium pan over medium to medium-high heat. Add olive oil and onion and cook 5 to 7 minutes until onions are tender. Turn off heat and reserve.',
        'Add pasta and salt to boiling water. Cook for 5 minutes, then add broccoli and cook 3 more minutes or until pasta is cooked to al dente and florets are just tender.',
        'While pasta cooks, heat a medium sauce pot over medium heat. Add butter and melt, then add flour, cayenne and paprika and whisk together over heat until roux bubbles then cook a minute more. Whisk in milk and stock and raise the heat a little to bring sauce to a quick boil. Simmer sauce to thicken about 5 minutes.',
        'Drain macaroni or pasta and broccoli florets. Add broccoli, onion and pasta to the pot.',
        'Add cheese to milk sauce and stir to melt it in, about a minute or so. Stir in mustard and season sauce with salt and pepper. Pour sauce over pasta and broccoli and stir to combine. Adjust seasonings, transfer to a large platter and serve.',
      ],
    },
    {
      id: 4,
      name: 'Veggie Chili',
      ingredients: [
        {
          name: 'Olive oil',
          quantity: '2 Tbsp',
        },
        {
          name: 'Red onion (chopped)',
          quantity: '1',
        },
        {
          name: 'Red bell pepper (chopped)',
          quantity: '1',
        },
        {
          name: 'Carrots (chopped)',
          quantity: '2',
        },
        {
          name: 'Celery (chopped)',
          quantity: '2',
        },
        {
          name: 'Salt (divided)',
          quantity: '1/2 tsp',
        },
        {
          name: 'Garlic (pressed or minced)',
          quantity: '4 cloves',
        },
        {
          name: 'Chili powder',
          quantity: '2 Tbsp',
        },
        {
          name: 'Cumin',
          quantity: '2 tsp',
        },
        {
          name: 'Smoked paprika',
          quantity: '1 1/2 tsp',
        },
        {
          name: 'Dried oregano',
          quantity: '1 tsp',
        },
        {
          name: 'Serrano pepper (chopped)',
          quantity: '3',
        },
        {
          name: 'Crushed tomatoes',
          quantity: '28 oz',
        },
        {
          name: 'Black beans',
          quantity: '16 oz',
        },
        {
          name: 'Pinto beans',
          quantity: '16 oz',
        },
        {
          name: 'Vegetable broth',
          quantity: '3 C',
        },
        {
          name: 'Bay leaf',
          quantity: '1',
        },
        {
          name: 'Cilantro',
          quantity: '2 Tbsp',
        },
        {
          name: 'Red win vinegar',
          quantity: '1-2 tsp',
        },
      ],
      instructions: [
        'In a large Dutch oven or heavy-bottomed pot over medium heat, warm the olive oil until shimmering. Add the chopped onion, bell pepper, carrot, celery and ¼ teaspoon of the salt & pepper. Stir to combine and cook, stirring occasionally, until the vegetables are tender and the onion is translucent, about 7 to 10 minutes.',
        'Add the garlic, chili powder, cumin, smoked paprika and oregano. Cook until fragrant while stirring constantly, about 1 minute.',
        'Add the diced tomatoes and their juices, the drained black beans and pinto beans, vegetable broth and bay leaf. Stir to combine and let the mixture come to a simmer. Continue cooking, stirring occasionally and reducing heat as necessary to maintain a gentle simmer, for 30 minutes. Remove the chili from the heat.',
        'For the best texture and flavor, transfer 1 ½ cups of the chili to a blender, making sure to get some of the liquid portion. Securely fasten the lid and blend until smooth (watch out for hot steam), then pour the blended mixture back into the pot. (Or, you can blend the chili briefly with an immersion blender, or mash the chili with a potato masher until it reaches a thicker, more chili-like consistency.) Add the chopped cilantro, stir to blend, and then mix in the vinegar, to taste. Add salt to taste, too—I added ¼ teaspoon more at this point. Divide the mixture into individual bowls and serve with garnishes of your choice. This chili will keep well in the refrigerator for about 4 days or you can freeze it for longer-term storage.',
      ],
    },
    {
      id: 5,
      name: 'Hash browns',
      ingredients: [
        {
          name: 'Frozen hash browns',
          quantity: 'Your preference',
        },
        {
          name: 'Canola oil',
          quantity: 'Enough to cover bottom of pan',
        },
        {
          name: 'Butter',
          quantity: '1 Tbsp',
        },
      ],
      instructions: [
        'Heat your pan just under medium heat for 10 minutes',
        'Add your oil and 1/2 Tbsp butter',
        'Add hash browns around the center of the pan until it\'s about 1/2" tall',
        'Let cook for 5 minutes with a lid on the pan',
        'Add seasoning of your choice to the hash browns',
        'Add the other 1/2 Tbsp of butter to the top of the hash browns and flip',
        'Cook for 4 minutes on this side with the lid on the pan',
        'Enjoy!',
      ],
    },
  ];

  constructor() {}

  public GetRecipes(): Observable<Recipe[]> {
    return of(this.recipes);
  }

  public GetRecipeById(id: number): Observable<Recipe> {
    return of(this.recipes.filter((r) => r.id === id)[0]);
  }
}
