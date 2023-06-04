import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBoyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoyW100Filled'

      short_name='Boy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 7.5q-.525 0-.887-.363-.363-.362-.363-.887t.363-.888Q11.475 5 12 5t.887.362q.363.363.363.888t-.363.887Q12.525 7.5 12 7.5Zm-1.15 11.15v-4.5h-1v-4.4q0-.475.338-.812.337-.338.812-.338h2q.475 0 .812.338.338.337.338.812v4.4h-1v4.5Z"/>
    </Icon>
  );
});

IconMaterialBoyW100Filled.displayName = 'AmauiIconMaterialBoyW100Filled';

export default IconMaterialBoyW100Filled;
