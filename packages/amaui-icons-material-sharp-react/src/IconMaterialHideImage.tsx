import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHideImage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HideImage'

      short_name='HideImage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21 18.15-2-2V5H7.85l-2-2H21Zm-1.2 4.45L18.2 21H3V5.8L1.4 4.2l1.4-1.4 18.4 18.4ZM6 17l3-4 2.25 3 .825-1.1L5 7.825V19h11.175l-2-2Zm6-5Zm-1.4 1.4Z"/>
    </Icon>
  );
});

IconMaterialHideImage.displayName = 'AmauiIconMaterialHideImage';

export default IconMaterialHideImage;
