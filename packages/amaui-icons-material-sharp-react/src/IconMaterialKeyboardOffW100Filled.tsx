import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardOffW100Filled'

      short_name='KeyboardOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M834-92 136-790l20-20 698 698-20 20ZM332-332h302l-56-56H332v56ZM212-452h56v-56h-56v56Zm120 0h56v-56h-56v56Zm360 0h56v-56h-56v56ZM212-572h56v-56h-56v56Zm360 0h56v-56h-56v56Zm120 0h56v-56h-56v56ZM132-252v-456h126l456 456H132Zm696 1L628-452v-56h-57l-63-64v-56h-57l-79-80h456v457Z"/>
    </Icon>
  );
});

IconMaterialKeyboardOffW100Filled.displayName = 'AmauiIconMaterialKeyboardOffW100Filled';

export default IconMaterialKeyboardOffW100Filled;
