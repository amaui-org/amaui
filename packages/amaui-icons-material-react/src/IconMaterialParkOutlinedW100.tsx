import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialParkOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ParkOutlinedW100'
      short_name='Park'

      {...props}
    >
      <path d="M12.7 20.7H11.3V16.7H5.45L9.45 10.7H7.5L12 4.25L16.5 10.7H14.55L18.55 16.7H12.7ZM6.75 16H10.75H8.85H12H15.15H13.25H17.25ZM6.75 16H17.25L13.25 10H15.15L12 5.5L8.85 10H10.75Z"/>
    </Icon>
  )
});

export default IconMaterialParkOutlinedW100;
