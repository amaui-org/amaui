import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStreamAppsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StreamAppsW100'

      short_name='StreamApps'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M594 652h234V480H594v172Zm-28 81V452h290v228H619l-53 53ZM252 964V188h456v184h-28v-62H280v532h400v-62h28v184H252Zm28-94v66h400v-66H280Zm0-588h400v-66H280v66Zm0 0v-66 66Zm0 588v66-66Zm314-218V480v172Z"/>
    </Icon>
  );
});

IconMaterialStreamAppsW100.displayName = 'AmauiIconMaterialStreamAppsW100';

export default IconMaterialStreamAppsW100;
