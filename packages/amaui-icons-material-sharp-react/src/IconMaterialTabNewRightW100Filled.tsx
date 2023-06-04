import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabNewRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabNewRightW100Filled'

      short_name='TabNewRight'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m760 979-19-19 88-90H626v-28h203l-88-90 19-19 123 123-123 123Zm-588-95V268h616v366q-6.568-1-13.654-1.5-7.087-.5-14.346-.5-93 0-158.5 65.333Q536 762.667 536 856q0 7.35.5 14.35T538 884H172Zm294-134h28V590h160v-28H494V402h-28v160H306v28h160v160Z"/>
    </Icon>
  );
});

IconMaterialTabNewRightW100Filled.displayName = 'AmauiIconMaterialTabNewRightW100Filled';

export default IconMaterialTabNewRightW100Filled;
