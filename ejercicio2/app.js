// JSON
let values = {
    1: {
        carrier: 'CCH',
        service: 'DEX',
    },
    17: {
        carrier: 'CHP',
        service: 'express',
    },
};
// JSON
let json = {
    data: {
        BUIN: {
            limit: 1,
            over_carrier_service_id: 17,
            under_carrier_service_id: 17,
        },
        LAJA: {
            limit: 1,
            over_carrier_service_id: 1,
            under_carrier_service_id: 1,
        },
        LEBU: {
            limit: 1,
            over_carrier_service_id: 1,
            under_carrier_service_id: 1,
        },
        LOTA: {
            limit: 1,
            over_carrier_service_id: 17,
            under_carrier_service_id: 17,
        },
    },
};

function main() {
    const result = {};
    const operation = Object.keys(json.data);
    operation.forEach((item) => {
        return (result[item] = {
            limit: json.data[item].limit,
            over: values[json.data[item].over_carrier_service_id],
            under: values[json.data[item].under_carrier_service_id],
        });
    });

    return result;
}
const finish = main();

var jsonStr = JSON.stringify(finish);
(regeStr = ''),
(f = {
    brace: 0,
});

//Esto es para que el string del objeto tenga un poco de forma y sea mas agradable a la vista, solo es estilizar con expresiones regulares, nunca lo habia hecho antes pero aprendi algo nuevo, cool
regeStr = jsonStr.replace(/({|}[,]*|[^{}:]+:[^{}:,]*[,{]*)/g, function(m, p1) {
    var rtnFn = function() {
            return (
                '<div style="text-indent: ' + f['brace'] * 20 + 'px;">' + p1 + '</div>'
            );
        },
        rtnStr = 0;
    if (p1.lastIndexOf('{') === p1.length - 1) {
        rtnStr = rtnFn();
        f['brace'] += 1;
    } else if (p1.indexOf('}') === 0) {
        f['brace'] -= 1;
        rtnStr = rtnFn();
    } else {
        rtnStr = rtnFn();
    }
    return rtnStr;
});

document.body.innerHTML += regeStr;