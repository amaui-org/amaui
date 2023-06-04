import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoFixNormal = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoFixNormal'

      short_name='AutoFixNormal'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20 7-.95-2.05L17 4l2.05-.95L20 1l.95 2.05L23 4l-2.05.95ZM5.825 22.425l-4.25-4.25 12.6-12.6 4.25 4.25ZM5.8 19.6l7.2-7.2-1.4-1.4-7.2 7.2Z"/>
    </Icon>
  );
});

IconMaterialAutoFixNormal.displayName = 'AmauiIconMaterialAutoFixNormal';

export default IconMaterialAutoFixNormal;
