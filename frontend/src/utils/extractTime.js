export function extractTime(dateString) {
	const date = new Date(dateString);
    const month = padZero(date.getMonth() + 1);
    const days = padZero(date.getDate());
	const hours = padZero(date.getHours());
	const minutes = padZero(date.getMinutes());
	return `${month}/${days} ${hours}:${minutes}`;
}

// Helper function to pad single-digit numbers with a leading zero
function padZero(number) {
	return number.toString().padStart(2, "0");
}