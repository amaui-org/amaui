import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter6W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter6W100'

      short_name='Filter6'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.7 9.65v-3.3h3v-.7H11v8.7h4.7v-4.7Zm0 .7H15v3.3h-3.3ZM6.65 16.7V3.3h13.4v13.4Zm.7-.7h12V4h-12Zm-3.4 3.4V6.8h.7v11.9h11.9v.7Zm3.4-3.4V4v12Z"/>
    </Icon>
  );
});

IconMaterialFilter6W100.displayName = 'AmauiIconMaterialFilter6W100';

export default IconMaterialFilter6W100;
