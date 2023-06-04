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
      <path d="M4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075V9H20V6.55l-7.575 5.025q-.1.05-.2.087-.1.038-.225.038t-.225-.038q-.1-.037-.2-.087L4 6.55V17.2q0 .35.225.575Q4.45 18 4.8 18h10.7v.7ZM12 11l7.6-5H4.4Zm-8 7V6.55v.2-.625.025V6v.175-.063.638-.2V18Zm14.35.7q-.35 0-.6-.25t-.25-.6v-3q0-.35.288-.6.287-.25.712-.25v-1.15q0-.775.538-1.313Q19.575 11 20.35 11t1.313.537q.537.538.537 1.313V14q.425 0 .713.25.287.25.287.6v3q0 .35-.25.6t-.6.25Zm.85-4.7h2.3v-1.15q0-.475-.337-.813-.338-.337-.813-.337-.475 0-.812.337-.338.338-.338.813Z"/>
    </Icon>
  );
});

IconMaterialMailLockW100.displayName = 'AmauiIconMaterialMailLockW100';

export default IconMaterialMailLockW100;
