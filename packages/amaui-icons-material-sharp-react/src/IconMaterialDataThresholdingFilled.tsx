import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDataThresholdingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataThresholdingFilled'

      short_name='DataThresholding'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h18v18Zm12.15-2h2.125L19 17.275V16h-.85Zm-7.5-5 3.025-3 2 2 5.075-5.1-1.4-1.4-3.675 3.675-2-2L6.25 12.6ZM5 19h.85l3-3H6.725L5 17.725Zm8.525 0 3-3H14.4l-3 3ZM9.8 19l3-3h-2.125l-3 3Z"/>
    </Icon>
  );
});

IconMaterialDataThresholdingFilled.displayName = 'AmauiIconMaterialDataThresholdingFilled';

export default IconMaterialDataThresholdingFilled;
