import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRemoveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveW100'

      short_name='Remove'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.65 12.35v-.7h12.7v.7Z"/>
    </Icon>
  );
});

IconMaterialRemoveW100.displayName = 'AmauiIconMaterialRemoveW100';

export default IconMaterialRemoveW100;
