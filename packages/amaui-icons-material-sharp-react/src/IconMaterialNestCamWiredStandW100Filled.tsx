import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestCamWiredStandW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestCamWiredStandW100Filled'

      short_name='NestCamWiredStand'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.2 20.65H8.8v-1.7q0-1.55 1.088-2.625 1.087-1.075 2.612-1.075.275 0 .538.037.262.038.537.113l.7-1.1-2.4-.225q-1.95-.2-3.262-1.637Q7.3 11 7.3 9.05t1.313-3.388q1.312-1.437 3.262-1.687l4.85-.45v11l-1.65-.15-.85 1.275q.875.475 1.425 1.338.55.862.55 1.962Z"/>
    </Icon>
  );
});

IconMaterialNestCamWiredStandW100Filled.displayName = 'AmauiIconMaterialNestCamWiredStandW100Filled';

export default IconMaterialNestCamWiredStandW100Filled;
