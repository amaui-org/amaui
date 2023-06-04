import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNightlifeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightlifeW100Filled'

      short_name='Nightlife'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.85 19.35v-.7h2V12.9l-4.4-6.6h9.5l-4.4 6.6v5.75h2v.7ZM5.1 9h4.2l1.35-2h-6.9Zm10.1 10.35q-.975 0-1.662-.687-.688-.688-.688-1.663 0-.975.688-1.663.687-.687 1.662-.687.425 0 .825.162.4.163.825.538V6.3h3.7v1.4h-3V17q0 .975-.687 1.663-.688.687-1.663.687Z"/>
    </Icon>
  );
});

IconMaterialNightlifeW100Filled.displayName = 'AmauiIconMaterialNightlifeW100Filled';

export default IconMaterialNightlifeW100Filled;
