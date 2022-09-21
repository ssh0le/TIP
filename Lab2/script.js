const getGypo = () => {
    const a = prompt('Введите первый катет', '');
    const b = prompt('Введите второй катет', '');
    alert("Гипотенуза: " + Math.sqrt(a*a + b*b).toFixed(2));
}

const f = () => 1;

f();