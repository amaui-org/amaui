import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCrop75RoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop75RoundedW100'
      short_name='Crop75'

      {...props}
    >
      <path d="M5.8 15.7Q5.15 15.7 4.725 15.275Q4.3 14.85 4.3 14.2V9.8Q4.3 9.15 4.725 8.725Q5.15 8.3 5.8 8.3H18.2Q18.85 8.3 19.275 8.725Q19.7 9.15 19.7 9.8V14.2Q19.7 14.85 19.275 15.275Q18.85 15.7 18.2 15.7ZM5.8 15H18.2Q18.5 15 18.75 14.75Q19 14.5 19 14.2V9.8Q19 9.5 18.75 9.25Q18.5 9 18.2 9H5.8Q5.5 9 5.25 9.25Q5 9.5 5 9.8V14.2Q5 14.5 5.25 14.75Q5.5 15 5.8 15ZM5 15Q5 15 5 14.75Q5 14.5 5 14.2V9.8Q5 9.5 5 9.25Q5 9 5 9Q5 9 5 9.25Q5 9.5 5 9.8V14.2Q5 14.5 5 14.75Q5 15 5 15Z"/>
    </Icon>
  );
});

IconMaterialCrop75RoundedW100.displayName = 'AmauiIconMaterialCrop75RoundedW100';

export default IconMaterialCrop75RoundedW100;
