import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrintAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintAddW100'

      short_name='PrintAdd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M190 476h580-580Zm101.649 408V724H162V448h636v101l-14-2q-7-1-14-1v-70H190v220h102v-56h286q-5 7-9.5 13.5T560 668H320v188h223q2 8 5.5 14.5T555 884H291.649ZM640 448V328H320v120h-28V300h376v148h-28Zm111 467V795H631v-28h120V647h28v120h120v28H779v120h-28Z"/>
    </Icon>
  );
});

IconMaterialPrintAddW100.displayName = 'AmauiIconMaterialPrintAddW100';

export default IconMaterialPrintAddW100;
