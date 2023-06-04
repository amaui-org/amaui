import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWidthNormalW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidthNormalW100'

      short_name='WidthNormal'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7V5.3h17.4v13.4ZM4 18h4.875V6H4Zm5.575 0h4.85V6h-4.85Zm5.55 0H20V6h-4.875ZM9.575 6v12Z"/>
    </Icon>
  );
});

IconMaterialWidthNormalW100.displayName = 'AmauiIconMaterialWidthNormalW100';

export default IconMaterialWidthNormalW100;
