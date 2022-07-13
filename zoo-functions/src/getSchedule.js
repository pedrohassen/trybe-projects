const data = require('../data/zoo_data');

const { species, hours } = data;

// Resolução deste requisito foi graças a dica do Lucas Rodrigues da Turma 23, Tribo B, criar funções pra checar os parâmetros, abriu minha mente pra outras possibilidades lógicas.
// Com certeza não posso esquecer dos dias estudando com o Rafael França da Turma 23, Tribo B, alguns caminhos acabei descobrindo por causa das dicas dele.
// Também tive uma conversa com o Fernando Dornelles da Turma 23, Tribo B, que também me impulsionou em alguns pontos desse requisito.

const returnAnimalDays = (animal) => species.find(({ name }) => name === animal).availability;

function checkParams(param) {
  const paramIsSpecies = species.map(({ name }) => name === param).includes(true);
  const paramIsDays = Object.keys(hours).includes(param);
  if (paramIsSpecies) return this;
  if (paramIsDays) return this;
}

function checkOfficeHour(day) {
  if (day === 'Monday') return 'CLOSED';
  return `Open from ${hours[day].open}am until ${hours[day].close}pm`;
}

function checkExhibition(day) {
  const exhibition = species.reduce((acc, { name, availability }) => {
    if (availability.includes(day)) acc.push(name);
    return acc;
  }, []);
  if (exhibition.length) return exhibition;
  return 'The zoo will be closed!';
}

function generateSchedule(day) {
  return {
    [day]: { officeHour: checkOfficeHour(day), exhibition: checkExhibition(day) },
  };
}

const generateFullSchedule = () => Object.keys(hours)
  .reduce((acc, days) => Object.assign(acc, { ...generateSchedule(days) }), {});

function getSchedule(scheduleTarget) {
  if (!scheduleTarget || !checkParams(scheduleTarget)) return generateFullSchedule();
  if (Object.keys(hours).includes(scheduleTarget)) return generateSchedule(scheduleTarget);
  if (species.map(({ name }) => name)) return returnAnimalDays(scheduleTarget);
}

module.exports = getSchedule;
