import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRealEstateAgentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RealEstateAgentW100'

      short_name='RealEstateAgent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.65 14.325V7.15L14 3.2 8.35 7.15v3.05h-.7V6.825L14 2.3l6.35 4.525v7.5Zm-6.1 6.325-7.8-2.3v1.25h-3.4v-7.3h5.9l7.15 2.6v1.5h4.85v2.15ZM3.05 18.9h2V13h-2Zm10.45 1 6.05-1.875V17.1h-6.9l-3.1-1 .25-.675 2.925.975H14.7v-1L8.15 13h-2.4v4.6ZM14 3.2Zm.625 4.675h.75v-.75h-.75Zm-2 0h.75v-.75h-.75Zm2 2h.75v-.75h-.75Zm-2 0h.75v-.75h-.75Z"/>
    </Icon>
  );
});

IconMaterialRealEstateAgentW100.displayName = 'AmauiIconMaterialRealEstateAgentW100';

export default IconMaterialRealEstateAgentW100;
