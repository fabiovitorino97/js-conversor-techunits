// Objeto que armazena as categorias e suas respectivas unidades
const units = {
    dataStorage: ['Bytes', 'Kilobytes (KB)', 'Megabytes (MB)', 'Gigabytes (GB)', 'Terabytes (TB)', 'Petabytes (PB)', 'Exabytes (EB)', 'Zettabytes (ZB)', 'Yottabytes (YB)'],
    dataSpeed: ['Bits por segundo (bps)', 'Kilobits por segundo (Kbps)', 'Megabits por segundo (Mbps)', 'Gigabits por segundo (Gbps)', 'Terabits por segundo (Tbps)'],
    processingFrequency: ['Hertz (Hz)', 'Kilohertz (KHz)', 'Megahertz (MHz)', 'Gigahertz (GHz)', 'Terahertz (THz)'],
    energy: ['Joules (J)', 'Watt-hora (Wh)', 'Kilowatt-hora (kWh)', 'British Thermal Units (BTU)'],
};

// Função para preencher as opções de unidades no formulário
function updateUnits() {
    // Obtém o valor da categoria selecionada no formulário
    const category = document.getElementById('category').value;
    const fromUnitSelect = document.getElementById('fromUnit');
    const toUnitSelect = document.getElementById('toUnit');

    // Limpa as opções existentes
    fromUnitSelect.innerHTML = '';
    toUnitSelect.innerHTML = '';

    // Preenche as opções com base na categoria selecionada
    units[category].forEach(unit => {
        const fromOption = document.createElement('option');
        const toOption = document.createElement('option');
        fromOption.value = unit;
        toOption.value = unit;
        fromOption.text = unit;
        toOption.text = unit;
        fromUnitSelect.add(fromOption);
        toUnitSelect.add(toOption);
    });
}

// Função para realizar a conversão
function convert() {
    // Obtém os valores dos campos no formulário
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    const category = document.getElementById('category').value;

    // Variável para armazenar o resultado da conversão
    let result;

    // Realiza a conversão com base na categoria selecionada
    switch (category) {
        case 'dataStorage':
            result = convertDataStorage(inputValue, fromUnit, toUnit);
            break;
        case 'dataSpeed':
            result = convertDataSpeed(inputValue, fromUnit, toUnit);
            break;
        case 'processingFrequency':
            result = convertProcessingFrequency(inputValue, fromUnit, toUnit);
            break;
        case 'energy':
            result = convertEnergy(inputValue, fromUnit, toUnit);
            break;
        default:
            result = 'Categoria não suportada';
    }

    // Exibe o resultado no elemento com ID 'result'
    document.getElementById('result').innerText = `Resultado: ${result}`;
}

// Função para converter unidades de armazenamento de dados
function convertDataStorage(value, fromUnit, toUnit) {
    // Fatores de conversão para cada unidade
    const baseConversion = {
        'Bytes': 1,
        'Kilobytes (KB)': 1024,
        'Megabytes (MB)': 1024 * 1024,
        'Gigabytes (GB)': 1024 * 1024 * 1024,
        'Terabytes (TB)': 1024 * 1024 * 1024 * 1024,
        'Petabytes (PB)': 1024 * 1024 * 1024 * 1024 * 1024,
        'Exabytes (EB)': 1024 * 1024 * 1024 * 1024 * 1024 * 1024,
        'Zettabytes (ZB)': 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024,
        'Yottabytes (YB)': 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024,
    };

    // Realiza a conversão
    const result = (value * baseConversion[fromUnit]) / baseConversion[toUnit];
    return result.toFixed(2); // Retorna o resultado com 2 casas decimais
}

// Função para converter unidades de velocidade de dados
function convertDataSpeed(value, fromUnit, toUnit) {
    // Fatores de conversão para cada unidade
    const baseConversion = {
        'Bits por segundo (bps)': 1,
        'Kilobits por segundo (Kbps)': 1000,
        'Megabits por segundo (Mbps)': 1000 * 1000,
        'Gigabits por segundo (Gbps)': 1000 * 1000 * 1000,
        'Terabits por segundo (Tbps)': 1000 * 1000 * 1000 * 1000,
    };

    // Realiza a conversão
    const result = (value * baseConversion[fromUnit]) / baseConversion[toUnit];
    return result.toFixed(2); // Retorna o resultado com 2 casas decimais
}

// Função para converter unidades de frequência de processamento
function convertProcessingFrequency(value, fromUnit, toUnit) {
    // Fatores de conversão para cada unidade
    const baseConversion = {
        'Hertz (Hz)': 1,
        'Kilohertz (KHz)': 1000,
        'Megahertz (MHz)': 1000 * 1000,
        'Gigahertz (GHz)': 1000 * 1000 * 1000,
        'Terahertz (THz)': 1000 * 1000 * 1000 * 1000,
    };

    // Realiza a conversão
    const result = (value * baseConversion[fromUnit]) / baseConversion[toUnit];
    return result.toFixed(2); // Retorna o resultado com 2 casas decimais
}

// Função para converter unidades de energia
function convertEnergy(value, fromUnit, toUnit) {
    // Fatores de conversão para cada unidade
    const baseConversion = {
        'Joules (J)': 1,
        'Watt-hora (Wh)': 1 / 3600, // 1 Watt-hora = 3600 Joules
        'Kilowatt-hora (kWh)': 1 / (3600 * 1000), // 1 Kilowatt-hora = 3600 * 1000 Joules
        'British Thermal Units (BTU)': 0.000947817,
    };

    // Realiza a conversão
    const result = (value * baseConversion[fromUnit]) / baseConversion[toUnit];
    return result.toFixed(2); // Retorna o resultado com 2 casas decimais
}
