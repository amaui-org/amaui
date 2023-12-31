import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrintLockW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintLockW100'

      short_name='PrintLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M629-171v-164h35v-40q0-26.812 19.133-45.906 19.133-19.094 46-19.094t45.367 19.094Q793-401.812 793-375v40h35v164H629Zm63-164h73v-40q0-17-9.5-27T729-412q-17 0-27 10t-10 27v40ZM190-580h580-580Zm101.649 408v-160H162v-276h636v101l-14-2q-7-1-14-1v-70H190v220h102v-56h286q-5 7-9.5 13.5T560-388H320v188h223q2 8 5.5 14.5T555-172H291.649ZM640-608v-120H320v120h-28v-148h376v148h-28Z"/>
    </Icon>
  );
});

IconMaterialPrintLockW100.displayName = 'AmauiIconMaterialPrintLockW100';

export default IconMaterialPrintLockW100;
