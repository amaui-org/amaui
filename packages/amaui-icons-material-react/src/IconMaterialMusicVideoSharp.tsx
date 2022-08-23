import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMusicVideoSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MusicVideoSharp'
      short_name='MusicVideo'

      {...props}
    >
      <path d="M2 20V4H22V20ZM4 18V6ZM4 6V18H20V6ZM10.5 17Q11.55 17 12.275 16.275Q13 15.55 13 14.5V9H16V7H12V12.5Q11.675 12.275 11.3 12.137Q10.925 12 10.5 12Q9.45 12 8.725 12.725Q8 13.45 8 14.5Q8 15.55 8.725 16.275Q9.45 17 10.5 17Z"/>
    </Icon>
  );
});

IconMaterialMusicVideoSharp.displayName = 'AmauiIconMaterialMusicVideoSharp';

export default IconMaterialMusicVideoSharp;
