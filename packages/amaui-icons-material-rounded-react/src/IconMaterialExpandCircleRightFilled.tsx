import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExpandCircleRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandCircleRightFilled'

      short_name='ExpandCircleRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m507-480-95 95q-11 11-11 27.5t11 28.5q12 12 28.5 12t28.5-12l123-123q12-12 12-28t-12-28L468-632q-12-12-28-11.5T412-631q-11 12-11.5 28t11.5 28l95 95ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialExpandCircleRightFilled.displayName = 'AmauiIconMaterialExpandCircleRightFilled';

export default IconMaterialExpandCircleRightFilled;
