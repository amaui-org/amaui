import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter9Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter9Filled'

      short_name='Filter9'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15h5V5h-6v6h4v2h-3Zm3-6h-2V7h2Zm-9 9V2h16v16Zm-4 4V6h2v14h14v2Z"/>
    </Icon>
  );
});

IconMaterialFilter9Filled.displayName = 'AmauiIconMaterialFilter9Filled';

export default IconMaterialFilter9Filled;
