import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSubtitlesOffSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubtitlesOffSharp'
      short_name='SubtitlesOff'

      {...props}
    >
      <path d="M22 19.15 20 17.15V6H8.85L6.85 4H22ZM20.55 23.35 17.15 20H2V4.8L0.65 3.45L2.05 2.05L21.95 21.95ZM11.15 14 4 6.85V18H15.15L13.15 16H6V14ZM6 12V10H8V12ZM14.85 12 12.85 10H18V12ZM14.425 11.575ZM9.575 12.425Z"/>
    </Icon>
  );
});

IconMaterialSubtitlesOffSharp.displayName = 'AmauiIconMaterialSubtitlesOffSharp';

export default IconMaterialSubtitlesOffSharp;
