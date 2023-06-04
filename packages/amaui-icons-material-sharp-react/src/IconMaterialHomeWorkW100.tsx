import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeWorkW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeWorkW100'

      short_name='HomeWork'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.3 8.7h1.4V7.3h-1.4Zm0 4h1.4v-1.4h-1.4Zm0 4h1.4v-1.4h-1.4Zm-1.6 3V19H21V5h-9.8v2.425l-.7-.5V4.3h11.2v15.4Zm-13.4 0v-8.05L8 7.6l5.7 4.05v8.05H9.35v-4.35h-2.7v4.35ZM3 19h2.95v-4.35h4.1V19H13v-7L8 8.5 3 12Zm12.7-8.35ZM10.05 19v-4.35h-4.1V19v-4.35h4.1Z"/>
    </Icon>
  );
});

IconMaterialHomeWorkW100.displayName = 'AmauiIconMaterialHomeWorkW100';

export default IconMaterialHomeWorkW100;
