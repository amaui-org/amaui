import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQueuePlayNextFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QueuePlayNextFilled'

      short_name='QueuePlayNext'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 15h2v-3h3v-2h-3V7h-2v3H8v2h3Zm8.5 7.5L18 21l3-3-3-3 1.5-1.5L24 18ZM8 21v-2H2V3h20v9h-5v7h-2v2Z"/>
    </Icon>
  );
});

IconMaterialQueuePlayNextFilled.displayName = 'AmauiIconMaterialQueuePlayNextFilled';

export default IconMaterialQueuePlayNextFilled;
