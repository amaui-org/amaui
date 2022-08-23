import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMagicButtonRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MagicButtonRoundedW100'
      short_name='MagicButton'

      {...props}
    >
      <path d="M10.4 17.6 8.4 13.2 4 11.2 8.4 9.2 10.4 4.8 12.4 9.2 16.8 11.2 12.4 13.2ZM16.8 19.2 15.8 17 13.6 16 15.8 15 16.8 12.8 17.8 15 20 16 17.8 17Z"/>
    </Icon>
  );
});

IconMaterialMagicButtonRoundedW100.displayName = 'AmauiIconMaterialMagicButtonRoundedW100';

export default IconMaterialMagicButtonRoundedW100;
