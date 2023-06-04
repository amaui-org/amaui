import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMagnificationLarge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MagnificationLarge'

      short_name='MagnificationLarge'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 15h12V7H5Zm-3 5V4h20v16Zm2-2V6ZM4 6v12h16V6Z"/>
    </Icon>
  );
});

IconMaterialMagnificationLarge.displayName = 'AmauiIconMaterialMagnificationLarge';

export default IconMaterialMagnificationLarge;
