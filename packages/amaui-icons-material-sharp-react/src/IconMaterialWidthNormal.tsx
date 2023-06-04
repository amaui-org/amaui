import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWidthNormal = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidthNormal'

      short_name='WidthNormal'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h20v16Zm2-2h4V6H4Zm6 0h4V6h-4Zm6 0h4V6h-4ZM10 6v12Z"/>
    </Icon>
  );
});

IconMaterialWidthNormal.displayName = 'AmauiIconMaterialWidthNormal';

export default IconMaterialWidthNormal;
