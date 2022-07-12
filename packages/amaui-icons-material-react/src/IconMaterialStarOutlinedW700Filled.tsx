import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStarOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarOutlinedW700Filled'
      short_name='Star'

      {...props}
    >
      <path d="M4.975 23.275 7.625 14.625 0.55 9.575H9.225L12 0.475L14.775 9.575H23.45L16.375 14.625L19.05 23.275L12.025 17.925Z"/>
    </Icon>
  )
});

export default IconMaterialStarOutlinedW700Filled;
