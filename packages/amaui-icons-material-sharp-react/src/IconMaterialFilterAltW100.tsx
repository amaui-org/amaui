import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterAltW100'

      short_name='FilterAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.7 12.55v6.15h-1.4v-6.15L5.6 5.3h12.825Zm-.7-.25L16.95 6h-9.9Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialFilterAltW100.displayName = 'AmauiIconMaterialFilterAltW100';

export default IconMaterialFilterAltW100;
