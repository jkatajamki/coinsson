import React from 'react';
import { Query } from 'react-apollo';
import { GET_POINTS } from './queries';
import { PointsContainer } from './styles';
import { getPointCount } from '../helpers';

const Points = () => (
  <Query query={GET_POINTS}>
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return `Error! ${error.message}`;
      return (
        <PointsContainer>
          <h2>{getPointCount(data.points)}</h2>
        </PointsContainer>
      );
    }}
  </Query>
);

export default Points;