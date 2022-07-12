import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSubtitlesSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubtitlesSharpFilled'
      short_name='Subtitles'

      {...props}
    >
      <path d="M6 12H8V10H6ZM6 16H14V14H6ZM16 16H18V14H16ZM10 12H18V10H10ZM2 20V4H22V20Z"/>
    </Icon>
  )
});

export default IconMaterialSubtitlesSharpFilled;
