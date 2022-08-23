import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialYoutubeSearchedForRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='YoutubeSearchedForRounded'
      short_name='YoutubeSearchedFor'

      {...props}
    >
      <path d="M9.3 13.65Q9.7 13.8 10.125 13.9Q10.55 14 11 14Q12.875 14 14.188 12.688Q15.5 11.375 15.5 9.5Q15.5 7.625 14.188 6.312Q12.875 5 11 5Q9.275 5 8.012 6.162Q6.75 7.325 6.55 9.05L7.125 8.475Q7.4 8.2 7.812 8.212Q8.225 8.225 8.5 8.5Q8.775 8.775 8.775 9.2Q8.775 9.625 8.5 9.9L6.2 12.2Q5.925 12.475 5.5 12.475Q5.075 12.475 4.8 12.2L2.475 9.875Q2.2 9.6 2.213 9.188Q2.225 8.775 2.5 8.5Q2.8 8.2 3.213 8.188Q3.625 8.175 3.925 8.475L4.55 9.1Q4.7 6.525 6.55 4.762Q8.4 3 11 3Q13.725 3 15.613 4.887Q17.5 6.775 17.5 9.5Q17.5 10.55 17.175 11.55Q16.85 12.55 16.2 13.3L21.825 18.925Q22.1 19.2 22.088 19.612Q22.075 20.025 21.8 20.3Q21.525 20.575 21.1 20.575Q20.675 20.575 20.4 20.3L14.8 14.7Q14 15.35 13.025 15.675Q12.05 16 11 16Q10.3 16 9.65 15.863Q9 15.725 8.425 15.475Q8.025 15.3 7.925 14.9Q7.825 14.5 8.025 14.1Q8.225 13.75 8.562 13.625Q8.9 13.5 9.3 13.65Z"/>
    </Icon>
  );
});

IconMaterialYoutubeSearchedForRounded.displayName = 'AmauiIconMaterialYoutubeSearchedForRounded';

export default IconMaterialYoutubeSearchedForRounded;
