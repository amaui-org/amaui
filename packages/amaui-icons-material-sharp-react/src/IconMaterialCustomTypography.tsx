import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCustomTypography = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CustomTypography'

      short_name='CustomTypography'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-80v-240h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm137-240h83l44-123h193l43 123h83L523-880h-86L257-400Zm151-192 70-199h4l70 199H408Z"/>
    </Icon>
  );
});

IconMaterialCustomTypography.displayName = 'AmauiIconMaterialCustomTypography';

export default IconMaterialCustomTypography;
