import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhonelinkOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkOff'

      short_name='PhonelinkOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.85 6-2-2H21v2ZM22 19.15l-2-2V10h-4v3.15l-2-2V8h8Zm-2.2 3.45L17.15 20H14v-3.2l-8-8V17h6v3H2v-3h2V6.8L1.4 4.2l1.4-1.4 18.4 18.4Z"/>
    </Icon>
  );
});

IconMaterialPhonelinkOff.displayName = 'AmauiIconMaterialPhonelinkOff';

export default IconMaterialPhonelinkOff;
