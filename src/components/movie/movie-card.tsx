import React, {ReactElement} from 'react';
import {StyleSheet, View} from 'react-native';

import StarIcon from '../../res/icons/start-icon';
import Fonts from '../../theme/typography';

import {Movie} from '../../library/types';
import {getScalenNumber, toPrecision} from '../../library/utils';

import IconText from '../icon-text';
import MovieText, {MovieTextTypes} from '../movie-text';
import PosterComponent from '../poster-component';
import GenreList from './genre-list';

type IProps = {
  movie: Movie;
  children?: ReactElement;
};

// card version of the movie component
const MovieCard = ({movie: item, children}: IProps) => (
  <View style={styles.cardContainer}>
    <View style={styles.flex4}>
      <PosterComponent
        containerStyle={styles.posterStyle}
        imageStyles={styles.imageStyles}
        hideText
        movie={item}
      />
    </View>
    <View style={styles.description}>
      <MovieText
        textStyles={styles.moviesTitle}
        type={MovieTextTypes.DEFAULT}
        text={item.title}
      />
      {item?.genres?.length > 0 && (
        <View style={styles.margin10}>
          <GenreList
            genres={item.genres}
            chipItemProps={{
              textType: MovieTextTypes.DEFAULT,
            }}
          />
        </View>
      )}
      <IconText
        icon={<StarIcon />}
        text={toPrecision(item.vote_average, 2).toString() + ' (IMDb)'}
        textStyles={styles.marginVertical}
      />
    </View>
    {children}
  </View>
);

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    marginVertical: getScalenNumber(10),
    marginHorizontal: getScalenNumber(10),
    backgroundColor: '#15141F',
    borderRadius: 10,
  },
  textStyles: {fontFamily: Fonts.IBMFonts.IBMPlexMono_Bold},
  moviesTitle: {
    fontFamily: Fonts.LatoFonts.Lato_Bold,
    fontSize: getScalenNumber(20),
  },
  container: {flex: 1},
  description: {
    flex: 0.6,
    paddingVertical: 2,
    paddingHorizontal: getScalenNumber(10),
  },
  margin10: {
    marginVertical: getScalenNumber(10),
  },
  imageStyles: {
    borderRadius: 0,
    paddingBottom: 0,
    marginBottom: 0,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  posterStyle: {
    paddingHorizontal: 0,
    marginBottom: 0,
  },
  flex4: {flex: 0.4},
  marginVertical: {
    marginVertical: getScalenNumber(10),
  },
});

export default MovieCard;
