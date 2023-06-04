import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRemove = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Remove'

      short_name='Remove'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 13v-2h14v2Z"/>
    </Icon>
  );
});

IconMaterialRemove.displayName = 'AmauiIconMaterialRemove';

export default IconMaterialRemove;
