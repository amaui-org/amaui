import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBakeryDiningFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BakeryDiningFilled'

      short_name='BakeryDining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.45 18.2-1.95-.95 1.825-4.5 2.2 4.25ZM15.5 17l.85-9.425 3.8 1.525L17 17ZM7 17 3.85 9.1l3.8-1.525L8.5 17Zm-3.45 1.2L1.475 17l2.2-4.25 1.825 4.5ZM10 17 9 6h6l-1 11Z"/>
    </Icon>
  );
});

IconMaterialBakeryDiningFilled.displayName = 'AmauiIconMaterialBakeryDiningFilled';

export default IconMaterialBakeryDiningFilled;
