import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurtainsClosedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurtainsClosedW100'

      short_name='CurtainsClosed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 19.7V19h2V4.3h13.4V19h2v.7ZM6 19h3.975V5H6Zm4.675 0h2.65V5h-2.65Zm3.35 0H18V5h-3.975ZM6 19V5v14Zm12 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialCurtainsClosedW100.displayName = 'AmauiIconMaterialCurtainsClosedW100';

export default IconMaterialCurtainsClosedW100;
