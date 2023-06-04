import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLooksTwoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksTwoW100'

      short_name='LooksTwo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.65 16.35h4.7v-.7h-4v-3.3h4v-4.7h-4.7v.7h4v3.3h-4ZM4.3 19.7V4.3h15.4v15.4ZM5 19h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialLooksTwoW100.displayName = 'AmauiIconMaterialLooksTwoW100';

export default IconMaterialLooksTwoW100;
