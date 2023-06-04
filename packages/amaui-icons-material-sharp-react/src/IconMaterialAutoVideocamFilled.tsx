import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoVideocamFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoVideocamFilled'

      short_name='AutoVideocam'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M80 896V256h640v260l160-160v440L720 636v260H80Zm320-160 50-110 110-50-110-50-50-110-50 110-110 50 110 50 50 110Z"/>
    </Icon>
  );
});

IconMaterialAutoVideocamFilled.displayName = 'AmauiIconMaterialAutoVideocamFilled';

export default IconMaterialAutoVideocamFilled;
