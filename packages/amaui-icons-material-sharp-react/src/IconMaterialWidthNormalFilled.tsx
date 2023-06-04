import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWidthNormalFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidthNormalFilled'

      short_name='WidthNormal'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h20v16Zm2-2h4V6H4Zm12 0h4V6h-4Z"/>
    </Icon>
  );
});

IconMaterialWidthNormalFilled.displayName = 'AmauiIconMaterialWidthNormalFilled';

export default IconMaterialWidthNormalFilled;
