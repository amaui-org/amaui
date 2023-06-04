import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextRotationDown = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotationDown'

      short_name='TextRotationDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6 21-3.5-3.45 1.45-1.4L5 17.2V4h2v13.2l1.05-1.05 1.4 1.4Zm4-3.9v-1.9l2.8-.95V9.8l-2.8-1V6.9L21 11v2Zm4.4-3.45 4.55-1.6v-.1l-4.55-1.6Z"/>
    </Icon>
  );
});

IconMaterialTextRotationDown.displayName = 'AmauiIconMaterialTextRotationDown';

export default IconMaterialTextRotationDown;
