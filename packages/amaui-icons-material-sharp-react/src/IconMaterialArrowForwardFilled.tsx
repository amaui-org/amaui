import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowForwardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowForwardFilled'

      short_name='ArrowForward'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 20-1.425-1.4 5.6-5.6H4v-2h12.175l-5.6-5.6L12 4l8 8Z"/>
    </Icon>
  );
});

IconMaterialArrowForwardFilled.displayName = 'AmauiIconMaterialArrowForwardFilled';

export default IconMaterialArrowForwardFilled;
