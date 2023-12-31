import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMimoDisconnect = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MimoDisconnect'

      short_name='MimoDisconnect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-120v-80l40-40H80v-593h47l73 73h-40v440h368L28-820l56-56L876-84l-56 56-212-212h72l40 40v80H240Zm588-126-74-74h46v-440H314l-80-80h646v594h-52ZM534-540Zm-190 36Z"/>
    </Icon>
  );
});

IconMaterialMimoDisconnect.displayName = 'AmauiIconMaterialMimoDisconnect';

export default IconMaterialMimoDisconnect;
