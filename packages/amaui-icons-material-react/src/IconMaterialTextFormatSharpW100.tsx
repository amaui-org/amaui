import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTextFormatSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextFormatSharpW100'
      short_name='TextFormat'

      {...props}
    >
      <path d="M5.65 18.4V17.7H18.35V18.4ZM7.825 14.7 11.675 4.6H12.375L16.125 14.7H15.375L14.325 11.85H9.625L8.575 14.7ZM9.875 11.2H14.075L12.075 5.7H11.975Z"/>
    </Icon>
  );
});

IconMaterialTextFormatSharpW100.displayName = 'AmauiIconMaterialTextFormatSharpW100';

export default IconMaterialTextFormatSharpW100;
