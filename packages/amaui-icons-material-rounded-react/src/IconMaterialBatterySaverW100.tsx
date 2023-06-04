import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatterySaverW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatterySaverW100'

      short_name='BatterySaver'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.35 21.35q-.3 0-.5-.2t-.2-.5V5.35q0-.3.2-.5t.5-.2h2.05V3.9q0-.325.213-.538.212-.212.537-.212h1.7q.325 0 .538.212.212.213.212.538v.75h2.05q.3 0 .5.2t.2.5v15.3q0 .3-.2.5t-.5.2Zm3.65-6q.15 0 .25-.1t.1-.25v-1.65H14q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-1.65V11q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v1.65H10q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h1.65V15q0 .15.1.25t.25.1Z"/>
    </Icon>
  );
});

IconMaterialBatterySaverW100.displayName = 'AmauiIconMaterialBatterySaverW100';

export default IconMaterialBatterySaverW100;
