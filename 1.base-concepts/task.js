"use strict";

function solveEquation(a, b, c) {
    if (a === 0) {
        throw new Error("Коэффициент a не может быть равен 0");
    }

    const d = b ** 2 - 4 * a * c;

    if (d < 0) {
        return [];
    } else if (d === 0) {
        const root = -b / (2 * a);
        return [root];
    } else {
        const sqrtD = Math.sqrt(d);
        const root1 = (-b + sqrtD) / (2 * a);
        const root2 = (-b - sqrtD) / (2 * a);
        return [root1, root2];
    }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    if (typeof percent !== 'number' || typeof contribution !== 'number' ||
        typeof amount !== 'number' || typeof countMonths !== 'number') {
        throw new Error('Все параметры должны быть числами');
    }

    const monthlyRate = (percent / 100) / 12;

    const loanBody = amount - contribution;

    if (loanBody <= 0) {
        return 0;
    }

    const payment = loanBody * (monthlyRate + (monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1)));

    const totalPayment = payment * countMonths;

    return Number(totalPayment.toFixed(2));
}