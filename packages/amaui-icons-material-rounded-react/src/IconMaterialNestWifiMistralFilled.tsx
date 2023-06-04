import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestWifiMistralFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestWifiMistralFilled'

      short_name='NestWifiMistral'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 21q-1.95 0-3.487-1.113Q3.975 18.775 3.35 17h17.3q-.625 1.75-2.162 2.875Q16.95 21 15 21Zm-6-6V9q0-2.5 1.75-4.25T9 3h6q2.5 0 4.25 1.75T21 9v6Z"/>
    </Icon>
  );
});

IconMaterialNestWifiMistralFilled.displayName = 'AmauiIconMaterialNestWifiMistralFilled';

export default IconMaterialNestWifiMistralFilled;
