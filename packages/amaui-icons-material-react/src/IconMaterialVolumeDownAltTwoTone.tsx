import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVolumeDownAltTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeDownAltTwoTone'
      short_name='VolumeDownAlt'

      {...props}
    >
      <path d="M14.525 21.675 8.55 15.7H4.175V8.3H8.55L14.525 2.325ZM16.4 16.2V7.775Q17.775 8.425 18.55 9.55Q19.325 10.675 19.325 12Q19.325 13.3 18.55 14.425Q17.775 15.55 16.4 16.2Z"/>
    </Icon>
  )
});

export default IconMaterialVolumeDownAltTwoTone;
