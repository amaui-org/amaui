import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddToQueue = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToQueue'

      short_name='AddToQueue'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 15h2v-3h3v-2h-3V7h-2v3H8v2h3Zm-3 6v-2H2V3h20v16h-6v2Zm-4-4h16V5H4Zm0 0V5v12Z"/>
    </Icon>
  );
});

IconMaterialAddToQueue.displayName = 'AmauiIconMaterialAddToQueue';

export default IconMaterialAddToQueue;
