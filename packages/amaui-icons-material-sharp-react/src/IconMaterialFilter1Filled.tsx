import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilter1Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter1Filled'

      short_name='Filter1'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 15h2V5h-4v2h2Zm-8 3V2h16v16Zm-4 4V6h2v14h14v2Z"/>
    </Icon>
  );
});

IconMaterialFilter1Filled.displayName = 'AmauiIconMaterialFilter1Filled';

export default IconMaterialFilter1Filled;
