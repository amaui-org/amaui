import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEqualizerSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EqualizerSharpW100'
      short_name='Equalizer'

      {...props}
    >
      <path d="M4.65 19.35V12.65H7.35V19.35ZM10.65 19.35V4.65H13.35V19.35ZM16.65 19.35V9.65H19.35V19.35Z"/>
    </Icon>
  );
});

IconMaterialEqualizerSharpW100.displayName = 'AmauiIconMaterialEqualizerSharpW100';

export default IconMaterialEqualizerSharpW100;
