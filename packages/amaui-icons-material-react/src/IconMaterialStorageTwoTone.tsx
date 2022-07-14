import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStorageTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StorageTwoTone'
      short_name='Storage'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z"/>
    </Icon>
  );
});

export default IconMaterialStorageTwoTone;
