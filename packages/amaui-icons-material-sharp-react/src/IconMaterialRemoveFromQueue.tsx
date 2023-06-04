import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRemoveFromQueue = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveFromQueue'

      short_name='RemoveFromQueue'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 12h8v-2H8Zm0 9v-2H2V3h20v16h-6v2Zm-4-4h16V5H4Zm0 0V5v12Z"/>
    </Icon>
  );
});

IconMaterialRemoveFromQueue.displayName = 'AmauiIconMaterialRemoveFromQueue';

export default IconMaterialRemoveFromQueue;
