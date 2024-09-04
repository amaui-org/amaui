import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeed05 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed05'

      short_name='Speed05'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-280v-80h80v80h-80Zm120 0v-80h160v-80H400v-240h240v80H480v80h160v240H400Z"/>
    </Icon>
  );
});

IconMaterialSpeed05.displayName = 'AmauiIconMaterialSpeed05';

export default IconMaterialSpeed05;
