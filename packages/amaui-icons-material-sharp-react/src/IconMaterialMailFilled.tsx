import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMailFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MailFilled'

      short_name='Mail'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h20v16Zm10-7 8-5V6l-8 5-8-5v2Z"/>
    </Icon>
  );
});

IconMaterialMailFilled.displayName = 'AmauiIconMaterialMailFilled';

export default IconMaterialMailFilled;
