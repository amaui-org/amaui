import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDockFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockFilled'

      short_name='Dock'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 23v-2h8v2Zm-2-4V1h12v18Zm2-5h8V6H8Z"/>
    </Icon>
  );
});

IconMaterialDockFilled.displayName = 'AmauiIconMaterialDockFilled';

export default IconMaterialDockFilled;
