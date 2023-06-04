import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWidthFullW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidthFullW100'

      short_name='WidthFull'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7V5.3h17.4v13.4ZM4 18h1.55V6H4Zm2.25 0h11.5V6H6.25Zm12.2 0H20V6h-1.55ZM6.25 6v12Z"/>
    </Icon>
  );
});

IconMaterialWidthFullW100.displayName = 'AmauiIconMaterialWidthFullW100';

export default IconMaterialWidthFullW100;
