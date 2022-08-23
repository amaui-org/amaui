import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCrop75Rounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop75Rounded'
      short_name='Crop75'

      {...props}
    >
      <path d="M5 17Q4.175 17 3.587 16.413Q3 15.825 3 15V9Q3 8.175 3.587 7.587Q4.175 7 5 7H19Q19.825 7 20.413 7.587Q21 8.175 21 9V15Q21 15.825 20.413 16.413Q19.825 17 19 17ZM5 15H19Q19 15 19 15Q19 15 19 15V9Q19 9 19 9Q19 9 19 9H5Q5 9 5 9Q5 9 5 9V15Q5 15 5 15Q5 15 5 15ZM5 15Q5 15 5 15Q5 15 5 15V9Q5 9 5 9Q5 9 5 9Q5 9 5 9Q5 9 5 9V15Q5 15 5 15Q5 15 5 15Z"/>
    </Icon>
  );
});

IconMaterialCrop75Rounded.displayName = 'AmauiIconMaterialCrop75Rounded';

export default IconMaterialCrop75Rounded;
