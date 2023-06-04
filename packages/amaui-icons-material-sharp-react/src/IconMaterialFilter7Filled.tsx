import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter7Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter7Filled'

      short_name='Filter7'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 15h2l4-8V5h-6v2h4Zm-5 3V2h16v16Zm-4 4V6h2v14h14v2Z"/>
    </Icon>
  );
});

IconMaterialFilter7Filled.displayName = 'AmauiIconMaterialFilter7Filled';

export default IconMaterialFilter7Filled;
