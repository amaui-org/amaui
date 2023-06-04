import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMagnificationLargeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MagnificationLargeFilled'

      short_name='MagnificationLarge'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 15h12V7H5Zm-3 5V4h20v16Z"/>
    </Icon>
  );
});

IconMaterialMagnificationLargeFilled.displayName = 'AmauiIconMaterialMagnificationLargeFilled';

export default IconMaterialMagnificationLargeFilled;
