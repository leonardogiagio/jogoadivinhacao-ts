document.querySelector('#iniciar').addEventListener('click', adivinhacao);

let arrCores: Array <string> = [
	"Black", "grey11", "grey21", "grey31", "DimGray", "Gray", "DarkGray", "Silver", "LightGrey", "Gainsboro", "SlateBlue", "SlateBlue1", "SlateBlue3", "DarkSlateBlue", "MidnightBlue", "Navy", "DarkBlue", "MediumBlue", "Blue", "CornflowerBlue", "RoyalBlue", "DodgerBlue", "DeepSkyBlue", "LightSkyBlue", "SkyBlue", "LightBlue", "SteelBlue", "LightSteelBlue", "SlateGray", "LightSlateGray", "Aqua / Cyan", "DarkTurquoise", "Turquoise", "MediumTurquoise", "LightSeaGreen", "DarkCyan", "Teal", "Aquamarine", "MediumAquamarine", "CadetBlue", "DarkSlateGray", "MediumSpringGreen", "SpringGreen", "PaleGreen", "LightGreen", "DarkSeaGreen", "MediumSeaGreen", "SeaGreen", "DarkGreen", "Green", "ForestGreen", "LimeGreen", "Lime", "LawnGreen", "Chartreuse", "GreenYellow", "YellowGreen", "OliveDrab", "DarkOliveGreen", "Olive", "DarkKhaki", "Goldenrod", "DarkGoldenrod", "SaddleBrown", "Sienna", "RosyBrown", "Peru", "Chocolate", "SandyBrown", "NavajoWhite", "Wheat", "BurlyWood", "Tan", "MediumSlateBlue",
	"MediumPurple", "BlueViolet", "Indigo", "DarkViolet", "DarkOrchid", "MediumOrchid", "Purple", "DarkMagenta", "Fuchsia / Magenta", "Violet", "Orchid", "Plum", "MediumVioletRed", "DeepPink", "HotPink", "PaleVioletRed", "LightPink", "Pink", "LightCoral", "IndianRed", "Crimson", "Maroon", "DarkRed", "FireBrick", "Brown", "Salmon", "DarkSalmon", "LightSalmon", "Coral", "Tomato", "Red", "OrangeRed", "DarkOrange", "Orange", "Gold", "Yellow", "Khaki", "AliceBlue", "GhostWhite", "Snow", "Seashell", "FloralWhite", "WhiteSmoke", "Beige", "OldLace", "Ivory", "Linen", "Cornsilk", "AntiqueWhite", "BlanchedAlmond", "Bisque", "LightYellow", "LemonChiffon", "LightGoldenrodYellow", "PapayaWhip", "PeachPuff", "Moccasin", "PaleGoldenrod", "MistyRose", "LavenderBlush", "Lavender", "Thistle", "Azure", "LightCyan", "PowderBlue", "PaleTurquoise", "Honeydew", "MintCream"
];


function adivinhacao(): void {
	let coresAleatorias: number;
	let vetorCores: Array <string> = [];

	for (let i = 0; i < 10; i++) {
		coresAleatorias = Math.floor((Math.random() * arrCores.length) + 1);
		vetorCores.push(arrCores[coresAleatorias]);
	}

	vetorCores.sort();

	coresAleatorias = Math.floor((Math.random() * (vetorCores.length)) + 1);
	let corSorteada: string = vetorCores[coresAleatorias]

	let chances: number = 5;
	let inputUser: string;
	// console.log(corSorteada);

	while (chances > 0) {
		inputUser = prompt(`Eu escolhi apenas uma dessas cores: ${vetorCores.join(", ")} \n\nVocê tem ${chances} chances de adivinhar a cor! \nDigite uma:`);

		if (inputUser == corSorteada) {
			alert("Você acertou, parabéns!")
			document.body.style.background = corSorteada;
			chances = 0;
		} else if (inputUser == "") {
			alert("O campo está em branco.\nPreencha o campo e tente novamente!");
		} else {
			if (inputUser > corSorteada) {
				alert("Você errou!\n\nSua cor é alfabeticamente maior que a minha.");
			} else if (inputUser < corSorteada) {
				alert("Você errou!\n\nSua cor é alfabeticamente menor que a minha.");
			}
			chances--;
		}
	}
	
}