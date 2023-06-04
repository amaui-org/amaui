import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHideImageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HideImageFilled'

      short_name='HideImage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M21 18.15 5.85 3H21Zm-1.2 4.45L18.2 21H3V5.8L1.4 4.2l1.4-1.4 18.4 18.4ZM6 17h8.175l-2.1-2.1-.825 1.1L9 13Z"/>
    </Icon>
  );
});

IconMaterialHideImageFilled.displayName = 'AmauiIconMaterialHideImageFilled';

export default IconMaterialHideImageFilled;
