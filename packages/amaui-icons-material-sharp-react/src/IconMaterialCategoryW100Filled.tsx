import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCategoryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CategoryW100Filled'

      short_name='Category'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.3 10 12 3.9l3.7 6.1Zm9.2 11q-1.475 0-2.487-1.012Q14 18.975 14 17.5t1.013-2.488Q16.025 14 17.5 14t2.488 1.012Q21 16.025 21 17.5t-1.012 2.488Q18.975 21 17.5 21ZM4 20.5v-6h6v6Z"/>
    </Icon>
  );
});

IconMaterialCategoryW100Filled.displayName = 'AmauiIconMaterialCategoryW100Filled';

export default IconMaterialCategoryW100Filled;
