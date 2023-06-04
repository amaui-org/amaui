import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter7W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter7W100'

      short_name='Filter7'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.2 14.35h.75l3.75-8v-.7H11v.7h3.95ZM6.65 16.7V3.3h13.4v13.4Zm.7-.7h12V4h-12Zm-3.4 3.4V6.8h.7v11.9h11.9v.7Zm3.4-3.4V4v12Z"/>
    </Icon>
  );
});

IconMaterialFilter7W100.displayName = 'AmauiIconMaterialFilter7W100';

export default IconMaterialFilter7W100;
