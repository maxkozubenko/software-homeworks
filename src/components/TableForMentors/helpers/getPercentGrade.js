import { MAX_GRADE } from '../constants';

export const getPercentGrade = (data, points) => {
  const commonPoints = data
    .map(item => item.items)
    .map(test => test.map(value => value.points))
    .flat()
    .reduce((acc, value) => acc + value);

  return Math.round((points * MAX_GRADE) / commonPoints);
};
