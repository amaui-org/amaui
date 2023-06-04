import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRealEstateAgentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RealEstateAgentW100Filled'

      short_name='RealEstateAgent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.65 14.325 8.35 10.2h-.7V6.825L14 2.3l6.35 4.525v7.5ZM2.35 19.6v-7.3h2.7v7.3Zm11.2 1.05-7.8-2.3V12.3h2.5l7.15 2.625V16.4h-2.7l-2.85-1-.3.7 3.1 1h7.6v1.45Zm1.075-12.775h.75v-.75h-.75Zm-2 0h.75v-.75h-.75Zm2 2h.75v-.75h-.75Zm-2 0h.75v-.75h-.75Z"/>
    </Icon>
  );
});

IconMaterialRealEstateAgentW100Filled.displayName = 'AmauiIconMaterialRealEstateAgentW100Filled';

export default IconMaterialRealEstateAgentW100Filled;
