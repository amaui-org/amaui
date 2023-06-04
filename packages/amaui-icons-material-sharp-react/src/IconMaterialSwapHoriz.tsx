import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwapHoriz = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapHoriz'

      short_name='SwapHoriz'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7 20-5-5 5-5 1.4 1.425L5.825 14H13v2H5.825L8.4 18.575Zm10-6-1.4-1.425L18.175 10H11V8h7.175L15.6 5.425 17 4l5 5Z"/>
    </Icon>
  );
});

IconMaterialSwapHoriz.displayName = 'AmauiIconMaterialSwapHoriz';

export default IconMaterialSwapHoriz;
