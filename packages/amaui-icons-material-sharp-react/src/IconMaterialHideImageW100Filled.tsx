import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHideImageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HideImageW100Filled'

      short_name='HideImage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.7 16.85 7.15 4.3H19.7Zm1 4.85-2-2H4.3V5.3l-2-2 .5-.5 18.4 18.4ZM7.95 16.35h7.4l-2.425-2.425L11.2 16.05 9.6 14.2Z"/>
    </Icon>
  );
});

IconMaterialHideImageW100Filled.displayName = 'AmauiIconMaterialHideImageW100Filled';

export default IconMaterialHideImageW100Filled;
