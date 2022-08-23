import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEqualizerSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EqualizerSharpFilled'
      short_name='Equalizer'

      {...props}
    >
      <path d="M4 20V12H8V20ZM10 20V4H14V20ZM16 20V9H20V20Z"/>
    </Icon>
  );
});

IconMaterialEqualizerSharpFilled.displayName = 'AmauiIconMaterialEqualizerSharpFilled';

export default IconMaterialEqualizerSharpFilled;
