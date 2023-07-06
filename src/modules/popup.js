const popUpPage = document.getElementById('pop-up');
const recipeBoard = document.getElementById('recipe-board');
const header = document.querySelector('header');
const popUpRender = async (id) => {
  popUpPage.innerHTML = '';
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const { meals } = await response.json();
  const popUpCard = document.createElement('section');
  popUpCard.classList.add('pop-up-card');
  const cancelIcon = document.createElement('p');
  cancelIcon.innerHTML = '<span class="material-symbols-outlined cancel-icon">close</span>';
  const popUpImgDiv = document.createElement('div');
  popUpImgDiv.classList.add('pop-up-img');
  const popUpImg = document.createElement('img');
  popUpImg.src = `${meals[0].strMealThumb}`;
  const itemName = document.createElement('p');
  itemName.classList.add('pop-up-item-name');
  itemName.textContent = `${meals[0].strMeal}`;
  popUpImgDiv.appendChild(popUpImg);
  const itemDetails = document.createElement('div');
  itemDetails.classList.add('pop-up-item-details');
  const detail1 = document.createElement('p');
  detail1.textContent = `Category: ${meals[0].strCategory}`;
  const detail2 = document.createElement('p');
  detail2.textContent = `Area: ${meals[0].strArea}`;
  const detail3 = document.createElement('p');
  detail3.textContent = `Ingredient-A: ${meals[0].strIngredient1}`;
  const detail4 = document.createElement('p');
  detail4.textContent = `Ingredient-B: ${meals[0].strIngredient3}`;
  itemDetails.appendChild(detail1);
  itemDetails.appendChild(detail2);
  itemDetails.appendChild(detail3);
  itemDetails.appendChild(detail4);
  popUpCard.appendChild(cancelIcon);
  popUpCard.appendChild(popUpImgDiv);
  popUpCard.appendChild(itemName);
  popUpCard.appendChild(itemDetails);
  popUpPage.appendChild(popUpCard);
  cancelIcon.addEventListener('click', () => {
    recipeBoard.style.display = 'grid';
    header.style.display = 'block';
    popUpPage.style.display = 'none';
  });
};
export default popUpRender;