import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLooks5W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks5W100Filled'

      short_name='Looks5'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.65 16.35h4.7v-4.7h-4v-3.3h4v-.7h-4.7v4.7h4v3.3h-4ZM4.3 19.7V4.3h15.4v15.4Z"/>
    </Icon>
  );
});

IconMaterialLooks5W100Filled.displayName = 'AmauiIconMaterialLooks5W100Filled';

export default IconMaterialLooks5W100Filled;
