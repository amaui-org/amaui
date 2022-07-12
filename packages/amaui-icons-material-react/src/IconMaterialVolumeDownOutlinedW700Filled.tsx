import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVolumeDownOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeDownOutlinedW700Filled'
      short_name='VolumeDown'

      {...props}
    >
      <path d="M14.65 22.025 8.475 15.85H3.975V8.15H8.475L14.65 1.975ZM16.65 16.3V7.65Q17.95 8.275 18.738 9.45Q19.525 10.625 19.525 12Q19.525 13.375 18.738 14.525Q17.95 15.675 16.65 16.3Z"/>
    </Icon>
  )
});

export default IconMaterialVolumeDownOutlinedW700Filled;
