import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeedFilled'

      short_name='Speed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.45 15.5q.6.6 1.55.587.95-.012 1.4-.687l4.225-6.325q.225-.35-.063-.637-.287-.288-.637-.063L10.6 12.6q-.675.45-.712 1.375-.038.925.562 1.525ZM5.1 20q-.525 0-1-.25t-.75-.7q-.65-1.125-1-2.387Q2 15.4 2 14q0-2.075.788-3.888.787-1.812 2.15-3.175Q6.3 5.575 8.125 4.787 9.95 4 12 4q2.075 0 3.887.787 1.813.788 3.175 2.15 1.363 1.363 2.15 3.175Q22 11.925 22 14q0 1.4-.337 2.637-.338 1.238-1.013 2.413-.275.45-.75.7-.475.25-1 .25Z"/>
    </Icon>
  );
});

IconMaterialSpeedFilled.displayName = 'AmauiIconMaterialSpeedFilled';

export default IconMaterialSpeedFilled;
