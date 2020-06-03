displayInfo = () => {
	let output = "";
	const fullName = "Arhia Bernard";
	const hndId = "HNG-00347";
	const languageChoice = "PHP";

	output = `Hello world, this is ${fullName} with HNGi7 ID ${hndId} using ${languageChoice} for stage 2 task`;
	return output;
};

console.log(displayInfo());
