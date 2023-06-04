import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMailLockW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MailLockW100'

      short_name='MailLock'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 18h11.5v.7H3.3V5.3h17.4V9H20V6.55l-8 5.3-8-5.3Zm8-7 7.6-5H4.4Zm-8 7V6v.55Zm13.5.7V14h1v-1.15q0-.775.538-1.313Q19.575 11 20.35 11t1.313.537q.537.538.537 1.313V14h1v4.7Zm1.7-4.7h2.3v-1.15q0-.475-.337-.813-.338-.337-.813-.337-.475 0-.812.337-.338.338-.338.813Z"/>
    </Icon>
  );
});

IconMaterialMailLockW100.displayName = 'AmauiIconMaterialMailLockW100';

export default IconMaterialMailLockW100;
