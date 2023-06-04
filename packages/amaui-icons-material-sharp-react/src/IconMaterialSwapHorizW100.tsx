import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwapHorizW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapHorizW100'

      short_name='SwapHoriz'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 19.1 2.9 15 7 10.9l.5.5-3.25 3.25h8.1v.7h-8.1L7.5 18.6Zm10-6-.5-.5 3.25-3.25h-8.1v-.7h8.1L16.5 5.4l.5-.5L21.1 9Z"/>
    </Icon>
  );
});

IconMaterialSwapHorizW100.displayName = 'AmauiIconMaterialSwapHorizW100';

export default IconMaterialSwapHorizW100;
