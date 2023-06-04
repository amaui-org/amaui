import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDock = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Dock'

      short_name='Dock'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 23v-2h8v2Zm-2-4V1h12v18Zm2-2h8v-1H8Zm0-3h8V6H8ZM8 4h8V3H8Zm0 0V3v1Zm0 13v-1 1Z"/>
    </Icon>
  );
});

IconMaterialDock.displayName = 'AmauiIconMaterialDock';

export default IconMaterialDock;
