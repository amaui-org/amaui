import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoFixNormalFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoFixNormalFilled'

      short_name='AutoFixNormal'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20 7-.95-2.05L17 4l2.05-.95L20 1l.95 2.05L23 4l-2.05.95ZM5.825 22.425l-4.25-4.25 12.6-12.6 4.25 4.25Zm8.35-11.2 1.4-1.4-1.4-1.4-1.4 1.4Z"/>
    </Icon>
  );
});

IconMaterialAutoFixNormalFilled.displayName = 'AmauiIconMaterialAutoFixNormalFilled';

export default IconMaterialAutoFixNormalFilled;
