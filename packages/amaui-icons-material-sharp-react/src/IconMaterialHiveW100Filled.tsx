import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHiveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HiveW100Filled'

      short_name='Hive'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15.85 11.65-1.6-2.875 1.6-2.875H19l1.6 2.875L19 11.65Zm-5.425 3.225L8.825 12l1.6-2.875h3.15l1.6 2.875-1.6 2.875Zm0-6.475-1.6-2.875 1.6-2.875h3.15l1.6 2.875-1.6 2.875ZM5 11.65 3.4 8.775 5 5.9h3.15l1.6 2.875-1.6 2.875Zm0 6.45-1.6-2.875L5 12.35h3.15l1.6 2.875-1.6 2.875Zm5.425 3.25-1.6-2.875 1.6-2.875h3.15l1.6 2.875-1.6 2.875Zm5.425-3.25-1.6-2.875 1.6-2.875H19l1.6 2.875L19 18.1Z"/>
    </Icon>
  );
});

IconMaterialHiveW100Filled.displayName = 'AmauiIconMaterialHiveW100Filled';

export default IconMaterialHiveW100Filled;
