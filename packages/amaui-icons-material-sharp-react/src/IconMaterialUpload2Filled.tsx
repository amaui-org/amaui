import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUpload2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Upload2Filled'

      short_name='Upload2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80v-80h640v80H160Zm200-160v-280H200l280-360 280 360H600v280H360Z"/>
    </Icon>
  );
});

IconMaterialUpload2Filled.displayName = 'AmauiIconMaterialUpload2Filled';

export default IconMaterialUpload2Filled;
