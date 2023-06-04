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
      <path d="M18.35 18.7q-.35 0-.6-.25t-.25-.6v-3q0-.35.288-.6.287-.25.712-.25v-1.15q0-.775.538-1.313Q19.575 11 20.35 11t1.313.537q.537.538.537 1.313V14q.425 0 .713.25.287.25.287.6v3q0 .35-.25.6t-.6.25Zm.85-4.7h2.3v-1.15q0-.475-.337-.813-.338-.337-.813-.337-.475 0-.812.337-.338.338-.338.813ZM4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075V9h-.35q-2.025 0-3.437 1.462-1.413 1.463-1.413 3.513V18.7Zm7.2-7q.125 0 .225-.038.1-.037.2-.087L19.7 6.75q.125-.075.15-.213.025-.137-.05-.262-.05-.1-.2-.138-.15-.037-.275.038L12 11 4.675 6.175q-.125-.075-.263-.063-.137.013-.212.138-.075.125-.05.275.025.15.15.225l7.275 4.825q.1.05.2.087.1.038.225.038Z"/>
    </Icon>
  );
});

IconMaterialMailLockW100Filled.displayName = 'AmauiIconMaterialMailLockW100Filled';

export default IconMaterialMailLockW100Filled;
