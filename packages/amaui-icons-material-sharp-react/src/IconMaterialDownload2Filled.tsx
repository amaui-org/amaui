import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDownload2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Download2Filled'

      short_name='Download2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80v-80h640v80H160Zm320-160L200-600h160v-280h240v280h160L480-240Z"/>
    </Icon>
  );
});

IconMaterialDownload2Filled.displayName = 'AmauiIconMaterialDownload2Filled';

export default IconMaterialDownload2Filled;
