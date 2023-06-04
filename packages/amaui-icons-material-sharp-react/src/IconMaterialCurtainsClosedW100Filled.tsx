import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurtainsClosedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurtainsClosedW100Filled'

      short_name='CurtainsClosed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 19.7V19h2V4.3h13.4V19h2v.7Zm7.375-.7h2.65V5h-2.65Z"/>
    </Icon>
  );
});

IconMaterialCurtainsClosedW100Filled.displayName = 'AmauiIconMaterialCurtainsClosedW100Filled';

export default IconMaterialCurtainsClosedW100Filled;
