import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCrop169RoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop169RoundedFilled'
      short_name='Crop169'

      {...props}
    >
      <path d="M5 18Q4.175 18 3.587 17.413Q3 16.825 3 16V8Q3 7.175 3.587 6.588Q4.175 6 5 6H19Q19.825 6 20.413 6.588Q21 7.175 21 8V16Q21 16.825 20.413 17.413Q19.825 18 19 18Z"/>
    </Icon>
  );
});

IconMaterialCrop169RoundedFilled.displayName = 'AmauiIconMaterialCrop169RoundedFilled';

export default IconMaterialCrop169RoundedFilled;
