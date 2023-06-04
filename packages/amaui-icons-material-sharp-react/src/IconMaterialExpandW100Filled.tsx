import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExpandW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandW100Filled'

      short_name='Expand'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.65 21.35v-.7h14.7v.7ZM12 18.1 8.9 15l.5-.5 2.25 2.25v-9.5L9.4 9.5 8.9 9 12 5.9 15.1 9l-.5.5-2.25-2.25v9.5l2.25-2.25.5.5ZM4.65 3.35v-.7h14.7v.7Z"/>
    </Icon>
  );
});

IconMaterialExpandW100Filled.displayName = 'AmauiIconMaterialExpandW100Filled';

export default IconMaterialExpandW100Filled;
