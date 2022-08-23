import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlaceItemSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaceItemSharpW100Filled'
      short_name='PlaceItem'

      {...props}
    >
      <path d="M5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V9.8Q4.3 9.15 4.725 8.725Q5.15 8.3 5.8 8.3H8.65V9H5.8Q5.5 9 5.25 9.25Q5 9.5 5 9.8V18.2Q5 18.5 5.25 18.75Q5.5 19 5.8 19H18.2Q18.5 19 18.75 18.75Q19 18.5 19 18.2V9.8Q19 9.5 18.75 9.25Q18.5 9 18.2 9H15.35V8.3H18.2Q18.85 8.3 19.275 8.725Q19.7 9.15 19.7 9.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7ZM12 15.1 8.9 12 9.4 11.5 11.65 13.75V1.95H12.35V13.75L14.6 11.5L15.1 12Z"/>
    </Icon>
  );
});

IconMaterialPlaceItemSharpW100Filled.displayName = 'AmauiIconMaterialPlaceItemSharpW100Filled';

export default IconMaterialPlaceItemSharpW100Filled;
