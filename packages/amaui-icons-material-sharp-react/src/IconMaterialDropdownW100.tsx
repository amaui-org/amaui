import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDropdownW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DropdownW100'

      short_name='Dropdown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M492-492h228v-228H492v228ZM172-172v-616h616v616H172Zm28-28h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialDropdownW100.displayName = 'AmauiIconMaterialDropdownW100';

export default IconMaterialDropdownW100;
