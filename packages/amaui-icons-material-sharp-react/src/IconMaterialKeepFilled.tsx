import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeepFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeepFilled'

      short_name='Keep'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m640-480 80 80v80H520v240l-40 40-40-40v-240H240v-80l80-80v-280h-40v-80h400v80h-40v280Z"/>
    </Icon>
  );
});

IconMaterialKeepFilled.displayName = 'AmauiIconMaterialKeepFilled';

export default IconMaterialKeepFilled;
