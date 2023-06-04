import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterAltW100Filled'

      short_name='FilterAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.7 12.55v6.15h-1.4v-6.15L5.6 5.3h12.825Z"/>
    </Icon>
  );
});

IconMaterialFilterAltW100Filled.displayName = 'AmauiIconMaterialFilterAltW100Filled';

export default IconMaterialFilterAltW100Filled;
