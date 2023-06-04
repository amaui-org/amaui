import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewComfyAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewComfyAltW100Filled'

      short_name='ViewComfyAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.65 10.35h2.7v-2.7h-2.7Zm6 0h2.7v-2.7h-2.7Zm-6 6h2.7v-2.7h-2.7Zm6 0h2.7v-2.7h-2.7ZM3.3 18.7V5.3h17.4v13.4Z"/>
    </Icon>
  );
});

IconMaterialViewComfyAltW100Filled.displayName = 'AmauiIconMaterialViewComfyAltW100Filled';

export default IconMaterialViewComfyAltW100Filled;
