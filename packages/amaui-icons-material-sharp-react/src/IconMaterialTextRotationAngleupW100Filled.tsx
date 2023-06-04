import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextRotationAngleupW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotationAngleupW100Filled'

      short_name='TextRotationAngleup'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.65 20.1-.5-.5 9.95-9.95h-2.4v-.7h3.6v3.6h-.7v-2.4ZM8.5 14.475l-4.4-9.85.475-.5 9.8 4.475-.525.55-2.75-1.275L7.775 11.2l1.275 2.75ZM7.475 10.55l2.975-2.975L5.15 5.1l-.075.075Z"/>
    </Icon>
  );
});

IconMaterialTextRotationAngleupW100Filled.displayName = 'AmauiIconMaterialTextRotationAngleupW100Filled';

export default IconMaterialTextRotationAngleupW100Filled;
