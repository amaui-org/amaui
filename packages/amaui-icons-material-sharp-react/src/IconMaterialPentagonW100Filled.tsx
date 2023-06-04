import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPentagonW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PentagonW100Filled'

      short_name='Pentagon'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6.475 20.35-3.7-11.1L12 2.8l9.225 6.45-3.7 11.1Z"/>
    </Icon>
  );
});

IconMaterialPentagonW100Filled.displayName = 'AmauiIconMaterialPentagonW100Filled';

export default IconMaterialPentagonW100Filled;
