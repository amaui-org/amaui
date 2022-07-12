import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKitchenOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KitchenOutlinedW700Filled'
      short_name='Kitchen'

      {...props}
    >
      <path d="M3.15 9.8V4.3Q3.15 3 4.075 2.075Q5 1.15 6.3 1.15H17.7Q19 1.15 19.925 2.075Q20.85 3 20.85 4.3V9.8ZM7.925 8.3H10.3V5.3H7.925ZM7.925 17.075H10.3V12.3H7.925ZM17.7 22.85H6.3Q5 22.85 4.075 21.925Q3.15 21 3.15 19.7V10.8H20.85V19.7Q20.85 21 19.925 21.925Q19 22.85 17.7 22.85Z"/>
    </Icon>
  )
});

export default IconMaterialKitchenOutlinedW700Filled;
