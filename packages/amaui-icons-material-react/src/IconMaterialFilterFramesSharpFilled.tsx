import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterFramesSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterFramesSharpFilled'
      short_name='FilterFrames'

      {...props}
    >
      <path d="M2 22V4H8L12 0L16 4H22V22ZM4 20H20V6H4ZM6 18V8H18V18Z"/>
    </Icon>
  );
});

IconMaterialFilterFramesSharpFilled.displayName = 'AmauiIconMaterialFilterFramesSharpFilled';

export default IconMaterialFilterFramesSharpFilled;
