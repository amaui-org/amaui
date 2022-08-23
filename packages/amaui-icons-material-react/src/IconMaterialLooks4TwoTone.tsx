import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLooks4TwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks4TwoTone'
      short_name='Looks4'

      {...props}
    >
      <path d="M.04 0h24v24h-24V0z" fill="none"/><path d="M5.04 19h14V5h-14v14zm4-12h2v4h2V7h2v10h-2v-4h-4V7z" opacity=".3"/><path d="M19.04 3h-14c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16h-14V5h14v14zm-6-2h2V7h-2v4h-2V7h-2v6h4z"/>
    </Icon>
  );
});

IconMaterialLooks4TwoTone.displayName = 'AmauiIconMaterialLooks4TwoTone';

export default IconMaterialLooks4TwoTone;
