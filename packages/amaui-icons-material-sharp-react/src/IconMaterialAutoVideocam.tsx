import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoVideocam = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoVideocam'

      short_name='AutoVideocam'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 896V256h640v260l160-160v440L720 636v260H80Zm80-80h480V336H160v480Zm0 0V336v480Zm240-80 50-110 110-50-110-50-50-110-50 110-110 50 110 50 50 110Z"/>
    </Icon>
  );
});

IconMaterialAutoVideocam.displayName = 'AmauiIconMaterialAutoVideocam';

export default IconMaterialAutoVideocam;
