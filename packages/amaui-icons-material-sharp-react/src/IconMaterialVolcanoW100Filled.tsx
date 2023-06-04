import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVolcanoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolcanoW100Filled'

      short_name='Volcano'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m4 20.7 2.85-6.4h3.025l2-5h5.15l3.25 11.4ZM14.15 5.35v-2.7h.7v2.7Zm3.875 1.6-.475-.475 1.9-1.9.5.475Zm-7.05 0-1.9-1.9.475-.5 1.9 1.925Z"/>
    </Icon>
  );
});

IconMaterialVolcanoW100Filled.displayName = 'AmauiIconMaterialVolcanoW100Filled';

export default IconMaterialVolcanoW100Filled;
