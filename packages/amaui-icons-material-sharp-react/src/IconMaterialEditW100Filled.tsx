import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditW100Filled'

      short_name='Edit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.15 8.225 16.175 6.25l1.675-1.675 1.975 1.975ZM4.7 19.7v-1.975L15.675 6.75l1.975 1.975L6.675 19.7Z"/>
    </Icon>
  );
});

IconMaterialEditW100Filled.displayName = 'AmauiIconMaterialEditW100Filled';

export default IconMaterialEditW100Filled;
