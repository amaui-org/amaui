import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilter6TwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter6TwoTone'
      short_name='Filter6'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 17h14V3H7v14zm4-10c0-1.11.9-2 2-2h4v2h-4v2h2c1.1 0 2 .89 2 2v2c0 1.11-.9 2-2 2h-2c-1.1 0-2-.89-2-2V7zm2 4h2v2h-2z" opacity=".3"/><path d="M21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-8-2h2c1.1 0 2-.89 2-2v-2c0-1.11-.9-2-2-2h-2V7h4V5h-4c-1.1 0-2 .89-2 2v6c0 1.11.9 2 2 2zm0-4h2v2h-2v-2zM3 23h16v-2H3V5H1v16c0 1.1.9 2 2 2z"/>
    </Icon>
  );
});

IconMaterialFilter6TwoTone.displayName = 'AmauiIconMaterialFilter6TwoTone';

export default IconMaterialFilter6TwoTone;
