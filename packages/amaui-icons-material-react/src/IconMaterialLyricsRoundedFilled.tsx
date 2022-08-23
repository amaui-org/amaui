import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLyricsRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LyricsRoundedFilled'
      short_name='Lyrics'

      {...props}
    >
      <path d="M2 22V4Q2 3.175 2.588 2.587Q3.175 2 4 2H15Q15.825 2 16.413 2.587Q17 3.175 17 4V4.425Q15.625 5.025 14.812 6.262Q14 7.5 14 9Q14 10.5 14.812 11.738Q15.625 12.975 17 13.575V16Q17 16.825 16.413 17.413Q15.825 18 15 18H6ZM6 14H10V12H6ZM19 12Q17.75 12 16.875 11.125Q16 10.25 16 9Q16 7.725 16.875 6.862Q17.75 6 19 6Q19.275 6 19.525 6.05Q19.775 6.1 20 6.175V1H24V3H22V9Q22 10.25 21.125 11.125Q20.25 12 19 12ZM6 11H13V9H6ZM6 8H13V6H6Z"/>
    </Icon>
  );
});

IconMaterialLyricsRoundedFilled.displayName = 'AmauiIconMaterialLyricsRoundedFilled';

export default IconMaterialLyricsRoundedFilled;
