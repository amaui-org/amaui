import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHiveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HiveW100'

      short_name='Hive'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.125 21.35-1.7-3h-3.3L3.25 15l1.7-3-1.7-3 1.875-3.35h3.3l1.7-3h3.75l1.7 3h3.3L20.75 9l-1.7 3 1.7 3-1.875 3.35h-3.3l-1.7 3Zm5.45-9.7h2.9L19.95 9l-1.475-2.65h-2.9L14.075 9Zm-5 3h2.85l1.5-2.65-1.5-2.65h-2.85L9.075 12Zm0-6h2.85l1.525-2.675-1.5-2.625h-2.9l-1.5 2.625Zm-5.025 3h2.875L9.925 9l-1.5-2.65H5.55L4.05 9Zm0 6h2.875l1.5-2.65-1.5-2.65h-2.9L4.05 15Zm5 3h2.9l1.5-2.625-1.525-2.675h-2.85L9.05 18.025Zm5.025-3h2.875l1.5-2.65-1.5-2.65h-2.875l-1.5 2.65Z"/>
    </Icon>
  );
});

IconMaterialHiveW100.displayName = 'AmauiIconMaterialHiveW100';

export default IconMaterialHiveW100;
