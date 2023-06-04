import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter1W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter1W100'

      short_name='Filter1'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 14.35h.7v-8.7H12v.7h2ZM6.65 16.7V3.3h13.4v13.4Zm.7-.7h12V4h-12Zm-3.4 3.4V6.8h.7v11.9h11.9v.7Zm3.4-3.4V4v12Z"/>
    </Icon>
  );
});

IconMaterialFilter1W100.displayName = 'AmauiIconMaterialFilter1W100';

export default IconMaterialFilter1W100;
