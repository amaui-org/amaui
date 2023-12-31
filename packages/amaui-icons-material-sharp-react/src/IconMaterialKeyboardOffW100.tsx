import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardOffW100'

      short_name='KeyboardOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M834-92 136-790l20-20 698 698-20 20ZM332-332v-56h246l56 56H332ZM212-452v-56h56v56h-56Zm120 0v-56h56v56h-56Zm360 0v-56h56v56h-56ZM212-572v-56h56v56h-56Zm360 0v-56h56v56h-56Zm120 0v-56h56v56h-56Zm108 293v-401H400l-28-28h456v457l-28-28Zm-668 27v-456h126l28 28H160v400h526l28 28H132Zm320-376h56v56l-56-56Zm120 120h56l-1 56-55-56Zm-126 28Zm154 0Z"/>
    </Icon>
  );
});

IconMaterialKeyboardOffW100.displayName = 'AmauiIconMaterialKeyboardOffW100';

export default IconMaterialKeyboardOffW100;
