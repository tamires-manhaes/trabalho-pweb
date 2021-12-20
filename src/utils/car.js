export const getCarModel = (model) => {
  switch (model) {
    case 'PEUGEOT3008':
      return '3008';
    case 'PEUGEOT208':
      return '208';
    case 'FOX':
      return 'Fox';
    case 'SAVEIRO':
      return 'Saveiro';
    case 'HONDAFIT':
      return 'Fit';
    case 'HONDACIVIC':
      return 'Civic';
    default:
      return 'Fusca';
  }
};

export const getCarBrand = (brand) => {
  switch (brand) {
    case 'PEUGEOT':
      return 'Peugeot';
    case 'HONDA':
      return 'Honda';
    case 'VOLKSWAGEN':
      return 'Volkswagen';
    default:
      return 'Bizinha';
  }
};

export const getCarDoors = (doors) => {
  switch (doors) {
    case 'DUAS':
      return '2';
    case 'QUATRO':
      return '4';
    default:
      return 'não informado';
  }
};

export const getCarType = (type) => {
  switch (type) {
    case 'UTILITARIO':
      return 'Utilitário';
    case 'PASSEIO':
      return 'Passeio';
    case 'FAMILIAR':
      return 'Familiar';
    case 'ESPORTIVO':
      return 'Esportivo';
    default:
      return '';
  }
};
