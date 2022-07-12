import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDangerousOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DangerousOutlinedW700Filled'
      short_name='Dangerous'

      {...props}
    >
      <path d="M7.9 21.85 2.15 16.1V7.9L7.9 2.15H16.1L21.85 7.9V16.1L16.1 21.85ZM9.275 16.4 12 13.675 14.725 16.4 16.4 14.725 13.675 12 16.4 9.275 14.725 7.6 12 10.325 9.275 7.6 7.6 9.275 10.325 12 7.6 14.725Z"/>
    </Icon>
  )
});

export default IconMaterialDangerousOutlinedW700Filled;
