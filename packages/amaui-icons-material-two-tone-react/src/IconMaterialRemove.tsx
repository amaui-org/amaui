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
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 13H5v-2h14v2z"/>
    </Icon>
  );
});

IconMaterialRemove.displayName = 'AmauiIconMaterialRemove';

export default IconMaterialRemove;
