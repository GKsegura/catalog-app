export function formatDate(date) {
    if (!date) return 'Data desconhecida';
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
}
