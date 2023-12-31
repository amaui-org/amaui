import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUpload2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Upload2'

      short_name='Upload2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80v-80h640v80H160Zm200-160v-280H200l280-360 280 360H600v280H360Zm80-80h80v-280h76L480-750 364-600h76v280Zm40-280Z"/>
    </Icon>
  );
});

IconMaterialUpload2.displayName = 'AmauiIconMaterialUpload2';

export default IconMaterialUpload2;
