import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextRotateUpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotateUpW100Filled'

      short_name='TextRotateUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.6 19.05h-.7V4.95l-1.7 1.7-.5-.5 2.55-2.55 2.55 2.55-.5.5-1.7-1.7Zm-4.8-3.2L3.7 12v-.7l10.1-3.75v.75l-2.85 1.05v4.7l2.85 1.05Zm-3.5-2.05V9.6l-5.5 2v.1Z"/>
    </Icon>
  );
});

IconMaterialTextRotateUpW100Filled.displayName = 'AmauiIconMaterialTextRotateUpW100Filled';

export default IconMaterialTextRotateUpW100Filled;
