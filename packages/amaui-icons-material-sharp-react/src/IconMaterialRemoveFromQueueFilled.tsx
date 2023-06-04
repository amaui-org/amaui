import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRemoveFromQueueFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveFromQueueFilled'

      short_name='RemoveFromQueue'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 12h8v-2H8Zm0 9v-2H2V3h20v16h-6v2Z"/>
    </Icon>
  );
});

IconMaterialRemoveFromQueueFilled.displayName = 'AmauiIconMaterialRemoveFromQueueFilled';

export default IconMaterialRemoveFromQueueFilled;
