import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDropdown = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Dropdown'

      short_name='Dropdown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-440h280v-280H440v280ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialDropdown.displayName = 'AmauiIconMaterialDropdown';

export default IconMaterialDropdown;
