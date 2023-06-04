import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrightnessEmpty = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrightnessEmpty'

      short_name='BrightnessEmpty'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 1028 346 896H160V710L28 576l132-134V256h186l134-132 134 132h186v186l132 134-132 134v186H614l-134 132Zm0-452Zm0 340 100-100h140V676l100-100-100-100V336H580L480 236 380 336H240v140L140 576l100 100v140h140l100 100Z"/>
    </Icon>
  );
});

IconMaterialBrightnessEmpty.displayName = 'AmauiIconMaterialBrightnessEmpty';

export default IconMaterialBrightnessEmpty;
