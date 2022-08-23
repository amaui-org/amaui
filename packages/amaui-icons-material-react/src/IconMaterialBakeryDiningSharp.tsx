import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBakeryDiningSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BakeryDiningSharp'
      short_name='BakeryDining'

      {...props}
    >
      <path d="M12.025 18ZM20.1 16.95 20.95 16.1 19.5 13.4 18.45 16.1ZM15.1 16H16.3L18.85 9.675L15.75 8.45ZM7.7 16H8.9L8.25 8.45L5.15 9.675ZM3.9 16.95 5.55 16.1 4.5 13.4 3.05 16.1ZM10.9 16H13.1L13.9 7H10.1ZM3.525 19.425 0.625 16.525 3.5 11 2.55 8.575 8.05 6.375 7.925 5H16.05L15.95 6.375L21.45 8.575L20.5 10.95L23.4 16.5L20.525 19.375L17.7 18H6.25Z"/>
    </Icon>
  );
});

IconMaterialBakeryDiningSharp.displayName = 'AmauiIconMaterialBakeryDiningSharp';

export default IconMaterialBakeryDiningSharp;
