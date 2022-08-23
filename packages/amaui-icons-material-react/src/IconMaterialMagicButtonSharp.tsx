import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMagicButtonSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MagicButtonSharp'
      short_name='MagicButton'

      {...props}
    >
      <path d="M10 19 7.5 13.5 2 11 7.5 8.5 10 3 12.5 8.5 18 11 12.5 13.5ZM18 21 16.75 18.25 14 17 16.75 15.75 18 13 19.25 15.75 22 17 19.25 18.25Z"/>
    </Icon>
  );
});

IconMaterialMagicButtonSharp.displayName = 'AmauiIconMaterialMagicButtonSharp';

export default IconMaterialMagicButtonSharp;
