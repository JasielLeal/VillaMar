export function formatCPF(cpf: string): string {
    const cleanedCPF = cpf.replace(/\D/g, '');
    if (cleanedCPF.length !== 11) {
        return cpf;
    }
    return cleanedCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

export function formatCurrencye(value: string) {
    // Converte o valor para número e formata como moeda brasileira
    const formatted = (Number(value) / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return formatted;
}