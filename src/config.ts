import { assets } from "$app/paths";

export const config = {
	mainPage: {
		heading: "Привет!",
		invitation: "Ты пойдешь со мной на свидание сегодня? 👉👈🥺",
		yesText: "Да",
		noText: "Нет",
		topImage: `${assets}/Assets/Top_picture/Cute_pic2.jpg`,
		leftHeart: `${assets}/Assets/Hearts/heart_3d.gif`,
		rightHeart: `${assets}/Assets/Hearts/heart_3d.gif`,
	},
	noPage: {
		message: '"Нет" это не вариант😁',
		image: `${assets}/Assets/No_picture/kermit-shooting.gif`,
	},
	yesPage: {
		message: "Увидимся сегодня 😄",
		image: `${assets}/Assets/Yes_picture/Yes.gif`,
	},
};
