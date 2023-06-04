import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStarHalf = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarHalf'

      short_name='StarHalf'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0z" fill="none"/><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>
    </Icon>
  );
});

IconMaterialStarHalf.displayName = 'AmauiIconMaterialStarHalf';

export default IconMaterialStarHalf;
