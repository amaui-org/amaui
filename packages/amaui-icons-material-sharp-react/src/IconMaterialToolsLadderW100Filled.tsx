import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialToolsLadderW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsLadderW100Filled'

      short_name='ToolsLadder'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6.25 20.35 4.6-16.7h.65l-.825 3h5.6l.85-3h.625l-4.6 16.7h-.65l.825-3h-5.6l-.85 3Zm3.05-8.7h5.6l1.2-4.3h-5.625Zm-1.4 5h5.625l1.175-4.3H9.1Z"/>
    </Icon>
  );
});

IconMaterialToolsLadderW100Filled.displayName = 'AmauiIconMaterialToolsLadderW100Filled';

export default IconMaterialToolsLadderW100Filled;
