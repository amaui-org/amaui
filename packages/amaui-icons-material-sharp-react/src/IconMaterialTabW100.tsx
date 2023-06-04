import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabW100'

      short_name='Tab'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7V5.3h17.4v13.4ZM20 18v-8h-7V6H4v12ZM4 18V6v12Z"/>
    </Icon>
  );
});

IconMaterialTabW100.displayName = 'AmauiIconMaterialTabW100';

export default IconMaterialTabW100;
