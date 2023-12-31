import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDropdownFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DropdownFilled'

      short_name='Dropdown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-440h280v-280H440v280ZM120-120v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialDropdownFilled.displayName = 'AmauiIconMaterialDropdownFilled';

export default IconMaterialDropdownFilled;
