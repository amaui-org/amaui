import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScienceOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScienceOff'

      short_name='ScienceOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m600-473-80-80v-207h-80v127l-80-80v-47h-80v-80h400v80h-80v287ZM200-200h448L402-446 200-200ZM792-56l-64-64H200q-51 0-72.5-45.5T138-250l208-252L56-792l56-56 736 736-56 56ZM402-446Zm78-147Z"/>
    </Icon>
  );
});

IconMaterialScienceOff.displayName = 'AmauiIconMaterialScienceOff';

export default IconMaterialScienceOff;
