import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVolumeDownSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeDownSharpFilled'
      short_name='VolumeDown'

      {...props}
    >
      <path d="M14 20 9 15H5V9H9L14 4ZM16 16V7.95Q17.125 8.475 17.812 9.575Q18.5 10.675 18.5 12Q18.5 13.325 17.812 14.4Q17.125 15.475 16 16Z"/>
    </Icon>
  );
});

IconMaterialVolumeDownSharpFilled.displayName = 'AmauiIconMaterialVolumeDownSharpFilled';

export default IconMaterialVolumeDownSharpFilled;
