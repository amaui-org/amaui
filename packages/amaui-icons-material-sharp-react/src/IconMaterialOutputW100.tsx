import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOutputW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutputW100'

      short_name='Output'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h15.4V7H19V5H5v14h14v-2h.7v2.7Zm12.05-3.625-.475-.475 3.2-3.25H10.15v-.7h8.925l-3.2-3.25.475-.475L20.425 12Z"/>
    </Icon>
  );
});

IconMaterialOutputW100.displayName = 'AmauiIconMaterialOutputW100';

export default IconMaterialOutputW100;
