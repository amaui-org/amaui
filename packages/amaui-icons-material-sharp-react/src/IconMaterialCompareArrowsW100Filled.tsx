import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCompareArrowsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompareArrowsW100Filled'

      short_name='CompareArrows'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8 19.1-.5-.5 3.25-3.25h-8.1v-.7h8.1L7.5 11.4l.5-.5 4.1 4.1Zm8-6L11.9 9 16 4.9l.5.5-3.25 3.25h8.1v.7h-8.1l3.25 3.25Z"/>
    </Icon>
  );
});

IconMaterialCompareArrowsW100Filled.displayName = 'AmauiIconMaterialCompareArrowsW100Filled';

export default IconMaterialCompareArrowsW100Filled;
