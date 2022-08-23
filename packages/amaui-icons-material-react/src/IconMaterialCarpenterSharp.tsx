import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCarpenterSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarpenterSharp'
      short_name='Carpenter'

      {...props}
    >
      <path d="M14.075 22.7 9.825 18.475 11.25 17.05 3.1 5.4 7 1.5 21.15 15.625ZM12.675 15.625 15.5 12.825 7 4.325 5.7 5.625ZM14.075 19.875 18.3 15.65 16.9 14.225 12.65 18.475ZM12.675 15.625 15.5 12.825Z"/>
    </Icon>
  );
});

IconMaterialCarpenterSharp.displayName = 'AmauiIconMaterialCarpenterSharp';

export default IconMaterialCarpenterSharp;
