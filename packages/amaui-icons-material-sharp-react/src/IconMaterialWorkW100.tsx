import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWorkW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkW100'

      short_name='Work'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 19.7V7.3h6V4.6h5.4v2.7h6v12.4ZM10 7.3h4v-2h-4ZM4 19h16V8H4Zm0 0V8Z"/>
    </Icon>
  );
});

IconMaterialWorkW100.displayName = 'AmauiIconMaterialWorkW100';

export default IconMaterialWorkW100;
