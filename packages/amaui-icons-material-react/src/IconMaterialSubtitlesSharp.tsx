import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSubtitlesSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubtitlesSharp'
      short_name='Subtitles'

      {...props}
    >
      <path d="M6 12H8V10H6ZM6 16H14V14H6ZM16 16H18V14H16ZM10 12H18V10H10ZM2 20V4H22V20ZM4 18V6ZM20 18V6H4V18Z"/>
    </Icon>
  );
});

export default IconMaterialSubtitlesSharp;
