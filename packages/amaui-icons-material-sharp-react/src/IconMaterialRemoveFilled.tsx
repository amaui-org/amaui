import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRemoveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveFilled'

      short_name='Remove'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 13v-2h14v2Z"/>
    </Icon>
  );
});

IconMaterialRemoveFilled.displayName = 'AmauiIconMaterialRemoveFilled';

export default IconMaterialRemoveFilled;
