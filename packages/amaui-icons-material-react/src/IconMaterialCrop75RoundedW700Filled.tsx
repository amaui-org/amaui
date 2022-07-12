import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCrop75RoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop75RoundedW700Filled'
      short_name='Crop75'

      {...props}
    >
      <path d="M5.3 17.85Q3.975 17.85 3.062 16.938Q2.15 16.025 2.15 14.7V9.3Q2.15 7.975 3.062 7.062Q3.975 6.15 5.3 6.15H18.7Q20.025 6.15 20.938 7.062Q21.85 7.975 21.85 9.3V14.7Q21.85 16.025 20.938 16.938Q20.025 17.85 18.7 17.85Z"/>
    </Icon>
  )
});

export default IconMaterialCrop75RoundedW700Filled;
