import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHttpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HttpW100Filled'

      short_name='Http'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1.95 14.6V9.4h.7v2h2.8v-2h.7v5.2h-.7v-2.5h-2.8v2.5Zm7.2 0v-4.5H7.4v-.7h4.2v.7H9.85v4.5Zm5 0v-4.5H12.4v-.7h4.2v.7h-1.75v4.5Zm3.7 0V9.4h4.2v3.2h-3.5v2Zm.7-2.7h2.8v-1.8h-2.8Z"/>
    </Icon>
  );
});

IconMaterialHttpW100Filled.displayName = 'AmauiIconMaterialHttpW100Filled';

export default IconMaterialHttpW100Filled;
