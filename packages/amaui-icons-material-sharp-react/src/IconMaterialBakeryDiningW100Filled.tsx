import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBakeryDiningW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BakeryDiningW100Filled'

      short_name='BakeryDining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.8 17.55-2.2-1.15 1.85-4.55 2.05 3.85Zm-5.4-.9.8-9.125 4.525 1.8-2.975 7.325Zm-7.15 0L4.35 9.3 8.8 7.525l.8 9.125Zm-3.05.9L2.5 15.8l2.1-3.95 1.8 4.55Zm6.1-.9-.9-10.3h5.2l-.9 10.3Z"/>
    </Icon>
  );
});

IconMaterialBakeryDiningW100Filled.displayName = 'AmauiIconMaterialBakeryDiningW100Filled';

export default IconMaterialBakeryDiningW100Filled;
