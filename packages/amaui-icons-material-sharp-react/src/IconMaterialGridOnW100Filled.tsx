import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGridOnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridOnW100Filled'

      short_name='GridOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.6 19.4V4.6h14.8v14.8Zm.7-.7h4v-4h-4Zm0-4.7h4v-4h-4Zm0-4.7h4v-4h-4Zm4.7 9.4h4v-4h-4Zm0-4.7h4v-4h-4Zm0-4.7h4v-4h-4Zm4.7 9.4h4v-4h-4Zm0-4.7h4v-4h-4Zm0-4.7h4v-4h-4Z"/>
    </Icon>
  );
});

IconMaterialGridOnW100Filled.displayName = 'AmauiIconMaterialGridOnW100Filled';

export default IconMaterialGridOnW100Filled;
