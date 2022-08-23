import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCarpenterSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarpenterSharpW100'
      short_name='Carpenter'

      {...props}
    >
      <path d="M14.05 21.8 10.775 18.5 12.1 17.125 3.95 5.475 7 2.425 20.225 15.65ZM12.575 16.625 16.425 12.825 7 3.4 4.85 5.55ZM14.075 20.8 19.225 15.65 16.9 13.3 11.725 18.475ZM12.575 16.625 16.425 12.825Z"/>
    </Icon>
  );
});

IconMaterialCarpenterSharpW100.displayName = 'AmauiIconMaterialCarpenterSharpW100';

export default IconMaterialCarpenterSharpW100;
