import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStarHalfOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarHalfOutlinedW700Filled'
      short_name='StarHalf'

      {...props}
    >
      <path d="M12 8.9V14.8L14.4 16.65L13.5 13.6L15.75 12H12.95ZM4.975 23.275 7.625 14.625 0.55 9.575H9.225L12 0.475L14.775 9.575H23.45L16.375 14.625L19.05 23.275L12.025 17.925Z"/>
    </Icon>
  )
});

export default IconMaterialStarHalfOutlinedW700Filled;
