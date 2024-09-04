import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeep = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Keep'

      short_name='Keep'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m640-480 80 80v80H520v240l-40 40-40-40v-240H240v-80l80-80v-280h-40v-80h400v80h-40v280Zm-286 80h252l-46-46v-314H400v314l-46 46Zm126 0Z"/>
    </Icon>
  );
});

IconMaterialKeep.displayName = 'AmauiIconMaterialKeep';

export default IconMaterialKeep;
