import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderAllW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderAllW100Filled'

      short_name='BorderAll'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.35 4.3h7.35v7.35h-7.35Zm0 15.4v-7.35h7.35v7.35ZM4.3 11.65V4.3h7.35v7.35Zm0 8.05v-7.35h7.35v7.35Z"/>
    </Icon>
  );
});

IconMaterialBorderAllW100Filled.displayName = 'AmauiIconMaterialBorderAllW100Filled';

export default IconMaterialBorderAllW100Filled;
