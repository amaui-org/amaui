import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMusicOffSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MusicOffSharpFilled'
      short_name='MusicOff'

      {...props}
    >
      <path d="M19.8 22.6 14 16.8V17Q14 18.65 12.85 19.825Q11.7 21 10 21Q8.35 21 7.175 19.825Q6 18.65 6 17Q6 15.825 6.925 14.412Q7.85 13 10.2 13L1.4 4.2L2.8 2.8L21.2 21.2ZM14 11.15 12 9.15V3H18V7H14Z"/>
    </Icon>
  );
});

IconMaterialMusicOffSharpFilled.displayName = 'AmauiIconMaterialMusicOffSharpFilled';

export default IconMaterialMusicOffSharpFilled;
