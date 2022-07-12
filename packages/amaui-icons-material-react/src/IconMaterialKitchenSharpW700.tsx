import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKitchenSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KitchenSharpW700'
      short_name='Kitchen'

      {...props}
    >
      <path d="M7.925 8.3V5.3H10.3V8.3ZM7.925 17.075V12.3H10.3V17.075ZM3.15 22.85V1.15H20.85V22.85ZM6.3 19.7H17.7V11.3H6.3ZM6.3 9.3H17.7V4.3H6.3Z"/>
    </Icon>
  )
});

export default IconMaterialKitchenSharpW700;
