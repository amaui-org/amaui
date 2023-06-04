import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNearMeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearMeW100Filled'

      short_name='NearMe'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.9 13.05-5-2.025q-.2-.075-.275-.213-.075-.137-.075-.312t.088-.325q.087-.15.287-.225l11.85-4.475q.175-.075.325-.038.15.038.275.163.125.125.163.275.037.15-.038.325L13.925 18q-.075.2-.212.288-.138.087-.313.087t-.312-.087q-.138-.088-.213-.288Z"/>
    </Icon>
  );
});

IconMaterialNearMeW100Filled.displayName = 'AmauiIconMaterialNearMeW100Filled';

export default IconMaterialNearMeW100Filled;
