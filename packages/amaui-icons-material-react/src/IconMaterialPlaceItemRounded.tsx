import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlaceItemRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaceItemRounded'
      short_name='PlaceItem'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V9Q3 8.175 3.587 7.587Q4.175 7 5 7H9V9H5Q5 9 5 9Q5 9 5 9V19Q5 19 5 19Q5 19 5 19H19Q19 19 19 19Q19 19 19 19V9Q19 9 19 9Q19 9 19 9H15V7H19Q19.825 7 20.413 7.587Q21 8.175 21 9V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM12 16 8 12 9.4 10.6 11 12.175V0H13V12.175L14.6 10.6L16 12Z"/>
    </Icon>
  );
});

IconMaterialPlaceItemRounded.displayName = 'AmauiIconMaterialPlaceItemRounded';

export default IconMaterialPlaceItemRounded;
