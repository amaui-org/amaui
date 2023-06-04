import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLdaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LdaW100Filled'

      short_name='Lda'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 19.8v-3.125L6.05 14.3V11h5.6V8h-2.6V4.1h5.9V8h-2.6v3h5.6v3.3l-5.6 2.375V19.8Zm0-3.9v-4.2h-4.9v2.125Zm.7 0 4.9-2.075V11.7h-4.9Z"/>
    </Icon>
  );
});

IconMaterialLdaW100Filled.displayName = 'AmauiIconMaterialLdaW100Filled';

export default IconMaterialLdaW100Filled;
