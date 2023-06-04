import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWidthWideFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidthWideFilled'

      short_name='WidthWide'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h20v16Zm2-2h2V6H4Zm14 0h2V6h-2Z"/>
    </Icon>
  );
});

IconMaterialWidthWideFilled.displayName = 'AmauiIconMaterialWidthWideFilled';

export default IconMaterialWidthWideFilled;
