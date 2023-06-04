import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrightnessEmptyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrightnessEmptyFilled'

      short_name='BrightnessEmpty'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 1028 346 896H160V710L28 576l132-134V256h186l134-132 134 132h186v186l132 134-132 134v186H614l-134 132Z"/>
    </Icon>
  );
});

IconMaterialBrightnessEmptyFilled.displayName = 'AmauiIconMaterialBrightnessEmptyFilled';

export default IconMaterialBrightnessEmptyFilled;
