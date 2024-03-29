import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHive = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Hive'

      short_name='Hive'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.75 22-1.7-3h-3.3L2.5 15l1.7-3-1.7-3 2.25-4h3.3l1.7-3h4.5l1.7 3h3.3l2.25 4-1.7 3 1.7 3-2.25 4h-3.3l-1.7 3Zm6.2-11h2.15l1.1-2-1.1-2h-2.15l-1.125 2Zm-5 3h2.1l1.125-2-1.125-2h-2.1l-1.125 2Zm0-6h2.1l1.15-2.025L13.075 4h-2.15L9.8 5.975Zm-5.025 3H8.05l1.125-2L8.05 7H5.925L4.8 9Zm0 6H8.05l1.125-2-1.125-2H5.9l-1.1 2Zm5 3h2.15l1.125-1.975L13.05 16h-2.1L9.8 18.025Zm5.025-3h2.125l1.125-2-1.125-2H15.95l-1.125 2Z"/>
    </Icon>
  );
});

IconMaterialHive.displayName = 'AmauiIconMaterialHive';

export default IconMaterialHive;
