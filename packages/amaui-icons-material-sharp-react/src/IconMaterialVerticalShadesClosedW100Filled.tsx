import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVerticalShadesClosedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalShadesClosedW100Filled'

      short_name='VerticalShadesClosed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 19.7V19h2V4.3h13.4V19h2v.7ZM6 19h2.475V5H6Zm3.175 0h2.475V5H9.175Zm3.175 0h2.475V5H12.35Zm3.175 0H18V5h-2.475Z"/>
    </Icon>
  );
});

IconMaterialVerticalShadesClosedW100Filled.displayName = 'AmauiIconMaterialVerticalShadesClosedW100Filled';

export default IconMaterialVerticalShadesClosedW100Filled;
