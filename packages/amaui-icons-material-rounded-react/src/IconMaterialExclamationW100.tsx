import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExclamationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExclamationW100'

      short_name='Exclamation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 14.1V6.4h.7v7.7Zm0 3.5v-.7h.7v.7Z"/>
    </Icon>
  );
});

IconMaterialExclamationW100.displayName = 'AmauiIconMaterialExclamationW100';

export default IconMaterialExclamationW100;
