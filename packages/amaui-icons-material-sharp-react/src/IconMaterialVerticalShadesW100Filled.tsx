import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVerticalShadesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalShadesW100Filled'

      short_name='VerticalShades'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 19.7V19h2V4.3h13.4V19h2v.7Zm6.375-.7h4.65V5h-4.65Z"/>
    </Icon>
  );
});

IconMaterialVerticalShadesW100Filled.displayName = 'AmauiIconMaterialVerticalShadesW100Filled';

export default IconMaterialVerticalShadesW100Filled;
