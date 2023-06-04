import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMailW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MailW100'

      short_name='Mail'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7V5.3h17.4v13.4Zm8.7-6.85-8-5.3V18h16V6.55Zm0-.85 7.6-5H4.4ZM4 6.55V6v12Z"/>
    </Icon>
  );
});

IconMaterialMailW100.displayName = 'AmauiIconMaterialMailW100';

export default IconMaterialMailW100;
