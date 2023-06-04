import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMailW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MailW100Filled'

      short_name='Mail'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7V5.3h17.4v13.4Zm8.7-6.85 8-5.3V6l-8 5-8-5v.55Z"/>
    </Icon>
  );
});

IconMaterialMailW100Filled.displayName = 'AmauiIconMaterialMailW100Filled';

export default IconMaterialMailW100Filled;
