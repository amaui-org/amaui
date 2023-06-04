import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCarpenterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarpenterW100'

      short_name='Carpenter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14.05 21.8-3.275-3.3 1.325-1.375-8.15-11.65L7 2.425 20.225 15.65Zm-1.475-5.175 3.85-3.8L7 3.4 4.85 5.55Zm1.5 4.175 5.15-5.15L16.9 13.3l-5.175 5.175Zm-1.5-4.175 3.85-3.8Z"/>
    </Icon>
  );
});

IconMaterialCarpenterW100.displayName = 'AmauiIconMaterialCarpenterW100';

export default IconMaterialCarpenterW100;
