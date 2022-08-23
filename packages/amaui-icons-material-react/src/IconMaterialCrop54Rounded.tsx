import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCrop54Rounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop54Rounded'
      short_name='Crop54'

      {...props}
    >
      <path d="M5 19Q4.175 19 3.587 18.413Q3 17.825 3 17V7Q3 6.175 3.587 5.588Q4.175 5 5 5H19Q19.825 5 20.413 5.588Q21 6.175 21 7V17Q21 17.825 20.413 18.413Q19.825 19 19 19ZM5 17H19Q19 17 19 17Q19 17 19 17V7Q19 7 19 7Q19 7 19 7H5Q5 7 5 7Q5 7 5 7V17Q5 17 5 17Q5 17 5 17ZM5 17Q5 17 5 17Q5 17 5 17V7Q5 7 5 7Q5 7 5 7Q5 7 5 7Q5 7 5 7V17Q5 17 5 17Q5 17 5 17Z"/>
    </Icon>
  );
});

IconMaterialCrop54Rounded.displayName = 'AmauiIconMaterialCrop54Rounded';

export default IconMaterialCrop54Rounded;
