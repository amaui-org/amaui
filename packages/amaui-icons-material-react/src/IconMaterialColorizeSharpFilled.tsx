import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialColorizeSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ColorizeSharpFilled'
      short_name='Colorize'

      {...props}
    >
      <path d="M3 21V16.25L11.95 7.3L10.5 5.9L11.95 4.5L13.85 6.4L17.65 2.6L21.4 6.35L17.625 10.125L19.525 12.075L18.1 13.5L16.7 12.05L7.75 21ZM5 19H6.95L15.25 10.65L13.35 8.75L5 17.05ZM16.175 8.75 18.575 6.35 17.65 5.425 15.25 7.825ZM16.175 8.75 15.25 7.825 17.65 5.425 18.575 6.35Z"/>
    </Icon>
  );
});

IconMaterialColorizeSharpFilled.displayName = 'AmauiIconMaterialColorizeSharpFilled';

export default IconMaterialColorizeSharpFilled;
