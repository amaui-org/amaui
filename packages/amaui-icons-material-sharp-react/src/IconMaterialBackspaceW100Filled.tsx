import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBackspaceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackspaceW100Filled'

      short_name='Backspace'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.95 15.1 2.6-2.6 2.6 2.6.5-.5-2.6-2.6 2.6-2.6-.5-.5-2.6 2.6-2.6-2.6-.5.5 2.6 2.6-2.6 2.6Zm-2.425 2.6L4.45 12l4.025-5.7H19.55v11.4Z"/>
    </Icon>
  );
});

IconMaterialBackspaceW100Filled.displayName = 'AmauiIconMaterialBackspaceW100Filled';

export default IconMaterialBackspaceW100Filled;
