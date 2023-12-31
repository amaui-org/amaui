import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStockpot = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stockpot'

      short_name='Stockpot'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-160v-480h720v480H120Zm80-80h560v-320H200v320Zm-80-440v-80h240v-80h240v80h240v80H120Zm360 280Z"/>
    </Icon>
  );
});

IconMaterialStockpot.displayName = 'AmauiIconMaterialStockpot';

export default IconMaterialStockpot;
