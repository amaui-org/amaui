import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextRotateUpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotateUpFilled'

      short_name='TextRotateUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 20h-2V6.8l-1.05 1.05-1.4-1.4L18 3l3.5 3.45-1.45 1.4L19 6.8Zm-5-2.9L3 13v-2l11-4.1v1.9l-2.8.95v4.45l2.8 1Zm-4.4-3.45v-3.3l-4.55 1.6v.1Z"/>
    </Icon>
  );
});

IconMaterialTextRotateUpFilled.displayName = 'AmauiIconMaterialTextRotateUpFilled';

export default IconMaterialTextRotateUpFilled;
