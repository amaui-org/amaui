import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewQuiltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewQuiltW100Filled'

      short_name='ViewQuilt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.825 11.65V6.3H19.7v5.35Zm5.3 6.05v-5.35H19.7v5.35Zm-5.3 0v-5.35h4.6v5.35Zm-5.525 0V6.3h4.825v11.4Z"/>
    </Icon>
  );
});

IconMaterialViewQuiltW100Filled.displayName = 'AmauiIconMaterialViewQuiltW100Filled';

export default IconMaterialViewQuiltW100Filled;
