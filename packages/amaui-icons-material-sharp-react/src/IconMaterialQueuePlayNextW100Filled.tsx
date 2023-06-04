import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQueuePlayNextW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QueuePlayNextW100Filled'

      short_name='QueuePlayNext'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.5 14.35h.7v-3h3v-.7h-3v-3h-.7v3h-3v.7h3Zm7.85 7.15-.5-.5 3-3-3-3 .5-.5 3.5 3.5ZM8.5 19.7v-2H3.15V4.3h17.4V12h-3.7v5.7H14.2v2Z"/>
    </Icon>
  );
});

IconMaterialQueuePlayNextW100Filled.displayName = 'AmauiIconMaterialQueuePlayNextW100Filled';

export default IconMaterialQueuePlayNextW100Filled;
