import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFloatPortraitW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FloatPortraitW100Filled'

      short_name='FloatPortrait'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M608 924V704h140v220H608Zm-396 0V228h536v376H508v320H212Z"/>
    </Icon>
  );
});

IconMaterialFloatPortraitW100Filled.displayName = 'AmauiIconMaterialFloatPortraitW100Filled';

export default IconMaterialFloatPortraitW100Filled;
