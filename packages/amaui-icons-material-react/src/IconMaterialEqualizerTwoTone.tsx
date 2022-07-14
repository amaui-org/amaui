import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEqualizerTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EqualizerTwoTone'
      short_name='Equalizer'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9h4v11h-4zm-6-5h4v16h-4zm-6 8h4v8H4z"/>
    </Icon>
  );
});

export default IconMaterialEqualizerTwoTone;
