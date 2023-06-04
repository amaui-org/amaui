import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDockW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockW100'

      short_name='Dock'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.65 20.9v-.7h6.7v.7ZM7.3 18.2V2.8h9.4v15.4Zm.7-.7h8v-1.65H8Zm0-2.35h8v-9.3H8Zm0-10h8V3.5H8Zm0 0V3.5v1.65ZM8 17.5v-1.65 1.65Z"/>
    </Icon>
  );
});

IconMaterialDockW100.displayName = 'AmauiIconMaterialDockW100';

export default IconMaterialDockW100;
