import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDropdownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DropdownW100Filled'

      short_name='Dropdown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M492-492h228v-228H492v228ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialDropdownW100Filled.displayName = 'AmauiIconMaterialDropdownW100Filled';

export default IconMaterialDropdownW100Filled;
