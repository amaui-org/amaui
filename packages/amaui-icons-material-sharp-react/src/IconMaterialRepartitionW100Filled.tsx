import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRepartitionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RepartitionW100Filled'

      short_name='Repartition'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.15 13.1v-.7h12.6q1 0 1.7-.7t.7-1.7q0-1-.7-1.7t-1.7-.7h-12L7 9.825l-.5.5L3.425 7.25 6.5 4.175l.5.475L4.75 6.9h12q1.3 0 2.2.9.9.9.9 2.175 0 1.3-.9 2.213-.9.912-2.2.912Zm0 7.9v-4.65h15.7V21Zm.7-.7h4.375v-3.25H4.85Zm5.075 0h4.125v-3.25H9.925Zm4.85 0h4.375v-3.25h-4.375Z"/>
    </Icon>
  );
});

IconMaterialRepartitionW100Filled.displayName = 'AmauiIconMaterialRepartitionW100Filled';

export default IconMaterialRepartitionW100Filled;
