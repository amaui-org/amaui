import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEnterpriseOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EnterpriseOffFilled'

      short_name='EnterpriseOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M880-194 320-754v-46q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v446ZM400-720h160v-80H400v80ZM820-28l-92-92H160q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h80v112L28-820l56-56L876-84l-56 56Z"/>
    </Icon>
  );
});

IconMaterialEnterpriseOffFilled.displayName = 'AmauiIconMaterialEnterpriseOffFilled';

export default IconMaterialEnterpriseOffFilled;
