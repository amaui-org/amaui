import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWidthFullFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidthFullFilled'

      short_name='WidthFull'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h20v16Zm2-2h1V6H4Zm15 0h1V6h-1Z"/>
    </Icon>
  );
});

IconMaterialWidthFullFilled.displayName = 'AmauiIconMaterialWidthFullFilled';

export default IconMaterialWidthFullFilled;
