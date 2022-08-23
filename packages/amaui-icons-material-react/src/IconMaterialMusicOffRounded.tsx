import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMusicOffRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MusicOffRounded'
      short_name='MusicOff'

      {...props}
    >
      <path d="M19.1 21.9 14 16.8V17Q14 18.65 12.85 19.825Q11.7 21 10 21Q8.35 21 7.175 19.825Q6 18.65 6 17Q6 15.825 6.925 14.412Q7.85 13 10.2 13L2.1 4.9Q1.825 4.625 1.825 4.2Q1.825 3.775 2.1 3.5Q2.375 3.225 2.8 3.225Q3.225 3.225 3.5 3.5L20.5 20.5Q20.775 20.775 20.775 21.2Q20.775 21.625 20.5 21.9Q20.225 22.175 19.8 22.175Q19.375 22.175 19.1 21.9ZM14 11.15 12 9.15V5Q12 4.175 12.588 3.587Q13.175 3 14 3H16Q16.825 3 17.413 3.587Q18 4.175 18 5Q18 5.825 17.413 6.412Q16.825 7 16 7H14Z"/>
    </Icon>
  );
});

IconMaterialMusicOffRounded.displayName = 'AmauiIconMaterialMusicOffRounded';

export default IconMaterialMusicOffRounded;
