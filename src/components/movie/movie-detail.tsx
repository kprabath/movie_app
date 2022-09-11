import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {ADD, IMDB, RELEASE_DATE, REMOVE} from '../../library/constants';

import {Movie} from '../../library/types';
import {getScalenNumber, toPrecision} from '../../library/utils';

import StarIcon from '../../res/icons/start-icon';
import TimeIcon from '../../res/icons/time-icon';

import ActionButton from '../action-button';
import IconText from '../icon-text';
import MovieText, {MovieTextTypes} from '../movie-text';
import TitleSubtitle from '../title-subtitle';
import GenreList from './genre-list';

type MovieDetailsIProps = {
  movie: Movie;
  containerStyles?: StyleProp<ViewStyle>;
  onAdd?: () => void;
  isAlreadySaved?: boolean;
};

const MovieDetailComponent = ({
  movie,
  containerStyles,
  onAdd,
  isAlreadySaved,
}: MovieDetailsIProps) => (
  <View style={[styles.paddingHorizontal20, containerStyles]}>
    <View style={[styles.row, styles.centerAlign, styles.spaceBetween]}>
      <View style={styles.flex6}>
        <MovieText type={MovieTextTypes.DISPLAY_TEXT} text={movie?.title} />
        <View style={styles.row}>
          <IconText
            icon={<TimeIcon />}
            text={movie?.runtime + ' minutes'}
            containerStyle={styles.marginRight10}
          />
          <IconText
            icon={<StarIcon />}
            text={toPrecision(movie?.vote_average, 2).toString() + IMDB}
          />
        </View>
      </View>
      <View style={styles.flex4}>
        <ActionButton
          onPress={onAdd}
          textType={MovieTextTypes.P1}
          text={isAlreadySaved ? REMOVE : ADD}
        />
      </View>
    </View>
    <View style={[styles.row, styles.marginVertical10]}>
      <View style={styles.flex5}>
        <TitleSubtitle
          titleText={RELEASE_DATE}
          subtitleText={movie?.release_date}
        />
      </View>
      <View style={styles.flex5}>
        <GenreList genres={movie?.genres} />
      </View>
    </View>
    <View style={styles.flex5}>
      <TitleSubtitle titleText="Synopsis" subtitleText={movie?.overview} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  paddingHorizontal20: {
    paddingHorizontal: getScalenNumber(20),
  },
  marginRight10: {
    marginRight: getScalenNumber(10),
  },
  marginVertical10: {
    marginVertical: getScalenNumber(10),
  },
  flex5: {
    flex: 5,
  },
  centerAlign: {
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  flex6: {
    flex: 6,
  },
  flex4: {
    flex: 4,
  },
});

export default MovieDetailComponent;
