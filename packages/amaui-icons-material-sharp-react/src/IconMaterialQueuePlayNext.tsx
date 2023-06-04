import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQueuePlayNext = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QueuePlayNext'

      short_name='QueuePlayNext'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.5 22.5 18 21l3-3-3-3 1.5-1.5L24 18ZM8 21v-2H2V3h20v9h-2V5H4v12h13v2h-2v2Zm3-6h2v-3h3v-2h-3V7h-2v3H8v2h3Zm1-4Z"/>
    </Icon>
  );
});

IconMaterialQueuePlayNext.displayName = 'AmauiIconMaterialQueuePlayNext';

export default IconMaterialQueuePlayNext;
