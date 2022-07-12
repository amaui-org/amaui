import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVolumeDownAltOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeDownAltOutlined'
      short_name='VolumeDownAlt'

      {...props}
    >
      <path d="M5 15V9H9L14 4V20L9 15ZM16 16V7.95Q17.125 8.475 17.812 9.575Q18.5 10.675 18.5 12Q18.5 13.325 17.812 14.4Q17.125 15.475 16 16ZM12 8.85 9.85 11H7V13H9.85L12 15.15ZM9.5 12Z"/>
    </Icon>
  )
});

export default IconMaterialVolumeDownAltOutlined;
