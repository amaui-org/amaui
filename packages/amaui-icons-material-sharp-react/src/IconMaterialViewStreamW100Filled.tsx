import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewStreamW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewStreamW100Filled'

      short_name='ViewStream'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 17.7v-5.35h15.4v5.35Zm0-6.05V6.3h15.4v5.35Z"/>
    </Icon>
  );
});

IconMaterialViewStreamW100Filled.displayName = 'AmauiIconMaterialViewStreamW100Filled';

export default IconMaterialViewStreamW100Filled;
