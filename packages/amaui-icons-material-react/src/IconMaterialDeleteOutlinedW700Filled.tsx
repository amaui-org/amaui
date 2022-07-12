import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeleteOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteOutlinedW700Filled'
      short_name='Delete'

      {...props}
    >
      <path d="M3.7 5.8V2.65H8.275L9.275 1.65H14.725L15.725 2.65H20.3V5.8ZM7.85 22.35Q6.525 22.35 5.613 21.438Q4.7 20.525 4.7 19.2V6.8H19.3V19.2Q19.3 20.525 18.388 21.438Q17.475 22.35 16.15 22.35Z"/>
    </Icon>
  )
});

export default IconMaterialDeleteOutlinedW700Filled;
