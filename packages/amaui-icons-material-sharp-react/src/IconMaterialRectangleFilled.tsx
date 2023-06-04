import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRectangleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RectangleFilled'

      short_name='Rectangle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h20v16Z"/>
    </Icon>
  );
});

IconMaterialRectangleFilled.displayName = 'AmauiIconMaterialRectangleFilled';

export default IconMaterialRectangleFilled;
