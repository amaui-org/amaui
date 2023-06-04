import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMailLockW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MailLockW100Filled'

      short_name='MailLock'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 11 4.4 6l-.4.55 8 5.3 8-5.3-.4-.55Zm5.5 7.7V14h1v-1.15q0-.775.538-1.313Q19.575 11 20.35 11t1.313.537q.537.538.537 1.313V14h1v4.7Zm1.7-4.7h2.3v-1.15q0-.475-.337-.813-.338-.337-.813-.337-.475 0-.812.337-.338.338-.338.813ZM3.3 18.7V5.3h17.4V9h-.35q-2.025 0-3.437 1.462-1.413 1.463-1.413 3.513V18.7Z"/>
    </Icon>
  );
});

IconMaterialMailLockW100Filled.displayName = 'AmauiIconMaterialMailLockW100Filled';

export default IconMaterialMailLockW100Filled;
