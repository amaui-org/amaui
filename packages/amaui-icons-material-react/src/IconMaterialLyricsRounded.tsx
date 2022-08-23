import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLyricsRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LyricsRounded'
      short_name='Lyrics'

      {...props}
    >
      <path d="M4 16V4Q4 4 4 4Q4 4 4 4Q4 4 4 4Q4 4 4 4V6Q4 6.625 4 7.387Q4 8.15 4 9Q4 9.85 4 10.613Q4 11.375 4 12V16Q4 16 4 16Q4 16 4 16ZM2 22V4Q2 3.175 2.588 2.587Q3.175 2 4 2H15Q15.825 2 16.413 2.587Q17 3.175 17 4V4.425Q16.4 4.7 15.9 5.1Q15.4 5.5 15 6V4Q15 4 15 4Q15 4 15 4H4Q4 4 4 4Q4 4 4 4V16H15Q15 16 15 16Q15 16 15 16V12Q15.4 12.5 15.9 12.9Q16.4 13.3 17 13.575V16Q17 16.825 16.413 17.413Q15.825 18 15 18H6ZM6 14H10V12H6ZM19 12Q17.75 12 16.875 11.125Q16 10.25 16 9Q16 7.75 16.875 6.875Q17.75 6 19 6Q19.275 6 19.525 6.05Q19.775 6.1 20 6.175V1H24V3H22V9Q22 10.25 21.125 11.125Q20.25 12 19 12ZM6 11H13V9H6ZM6 8H13V6H6Z"/>
    </Icon>
  );
});

IconMaterialLyricsRounded.displayName = 'AmauiIconMaterialLyricsRounded';

export default IconMaterialLyricsRounded;
