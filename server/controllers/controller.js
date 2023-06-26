export function controllerFunction1 = (req, res) => {

    const controllerData1 ={

    ID: req.params['ID'],
    name: "Robert Pulson",
    type: 'example',
    url: "https://en.wikipedia.org/wiki/Special:Random"

    };
return controllerData1
};
