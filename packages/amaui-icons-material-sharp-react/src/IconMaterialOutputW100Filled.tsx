import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOutputW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutputW100Filled'

      short_name='Output'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 19.85V4.15h15.7v2.7h-.7v-2H4.35v14.3h14.3v-2h.7v2.7ZM16 16.075l-.475-.475 3.2-3.25H9.65v-.7h9.075l-3.2-3.25.475-.475L20.075 12Z"/>
    </Icon>
  );
});

IconMaterialOutputW100Filled.displayName = 'AmauiIconMaterialOutputW100Filled';

export default IconMaterialOutputW100Filled;
