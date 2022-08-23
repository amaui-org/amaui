import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSubtitlesOffSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubtitlesOffSharpFilled'
      short_name='SubtitlesOff'

      {...props}
    >
      <path d="M20.55 23.35 17.15 20H2V4.8L0.65 3.45L2.05 2.05L21.95 21.95ZM6 12H8V10H6ZM22 4V19.15L14.85 12H18V10H12.85L6.85 4ZM11.15 14H6V16H13.15Z"/>
    </Icon>
  );
});

IconMaterialSubtitlesOffSharpFilled.displayName = 'AmauiIconMaterialSubtitlesOffSharpFilled';

export default IconMaterialSubtitlesOffSharpFilled;
