import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScienceOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScienceOffFilled'

      short_name='ScienceOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-473 360-713v-47h-80v-80h400v80h-80v287ZM792-56l-64-64H200q-51 0-72.5-45.5T138-250l208-252L56-792l56-56 736 736-56 56Z"/>
    </Icon>
  );
});

IconMaterialScienceOffFilled.displayName = 'AmauiIconMaterialScienceOffFilled';

export default IconMaterialScienceOffFilled;
