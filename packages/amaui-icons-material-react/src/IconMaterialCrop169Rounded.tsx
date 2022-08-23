import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCrop169Rounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop169Rounded'
      short_name='Crop169'

      {...props}
    >
      <path d="M5 18Q4.175 18 3.587 17.413Q3 16.825 3 16V8Q3 7.175 3.587 6.588Q4.175 6 5 6H19Q19.825 6 20.413 6.588Q21 7.175 21 8V16Q21 16.825 20.413 17.413Q19.825 18 19 18ZM5 16H19Q19 16 19 16Q19 16 19 16V8Q19 8 19 8Q19 8 19 8H5Q5 8 5 8Q5 8 5 8V16Q5 16 5 16Q5 16 5 16ZM5 16Q5 16 5 16Q5 16 5 16V8Q5 8 5 8Q5 8 5 8Q5 8 5 8Q5 8 5 8V16Q5 16 5 16Q5 16 5 16Z"/>
    </Icon>
  );
});

IconMaterialCrop169Rounded.displayName = 'AmauiIconMaterialCrop169Rounded';

export default IconMaterialCrop169Rounded;
