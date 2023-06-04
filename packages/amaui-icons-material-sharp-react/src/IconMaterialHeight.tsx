import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Height'

      short_name='Height'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 21-4-4 1.4-1.4 1.6 1.6V6.8L9.4 8.4 8 7l4-4 4 4-1.4 1.4L13 6.8v10.4l1.6-1.6L16 17Z"/>
    </Icon>
  );
});

IconMaterialHeight.displayName = 'AmauiIconMaterialHeight';

export default IconMaterialHeight;
