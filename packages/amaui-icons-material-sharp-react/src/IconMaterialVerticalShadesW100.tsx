import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVerticalShadesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalShadesW100'

      short_name='VerticalShades'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 19.7V19h2V4.3h13.4V19h2v.7ZM6 19h2.975V5H6Zm3.675 0h4.65V5h-4.65Zm5.35 0H18V5h-2.975ZM6 19V5v14Zm12 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialVerticalShadesW100.displayName = 'AmauiIconMaterialVerticalShadesW100';

export default IconMaterialVerticalShadesW100;
