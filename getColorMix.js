function resetBaseColor(baseColor)
{
	baseColor.red = { r: 255, g: 0, b: 0 };
	baseColor.magenta = { r: 255, g: 0, b: 255 };
	baseColor.yellow = { r: 255, g: 255, b: 0 };
	baseColor.white = { r: 255, g: 255, b: 255 };
	baseColor.black = { r: 0, g: 0, b: 0 };
}
  
function withoutBlack(baseColor, target)
{
	const res = {};
  
	const d = Math.min(target.g, target.b) / 255;
	const b = (target.b - 255 * d) / 255;
	const c = (target.g - 255 * d) / 255;
	const a = 1 - b - c - d;
  
	res.red = a;
	res.magenta = b;
	res.yellow = c;
	res.white = d;
	res.black = 0;
  
	return res;
}
  
function withBlack(baseColor, target)
{
	const temp = {};
  
	temp.r = 255;
	temp.g = target.g + ((255 - target.r) * (target.g / target.r));
	temp.b = target.b + ((255 - target.r) * (target.b / target.r));
  
	const res = withoutBlack(baseColor, temp);
  
	res.red = res.red * (target.r / 255);
	res.magenta = res.magenta * (target.r / 255);
	res.yellow = res.yellow * (target.r / 255);
	res.white = res.white * (target.r / 255);
	res.black = 1 - (target.r / 255);
  
	return res;
}
  
function getColorMix(baseColor, target)
{
	if (target.r === 255)
	  return withoutBlack(baseColor, target);
	else
	  return withBlack(baseColor, target);
}
  
const baseColor = {};
resetBaseColor(baseColor);
const target = { r: 228, g: 189, b: 160};
  
const res = getColorMix(baseColor, target);
  
console.log
(
	"red: " + res.red * 100 +
	"\nmagenta: " + res.magenta * 100 +
	"\nyellow: " + res.yellow * 100 +
	"\nwhite: " + res.white * 100 +
	"\nblack: " + res.black * 100
);
  
