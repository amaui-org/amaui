import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialImage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Image'

      short_name='Image'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 17h12l-3.75-5-3 4L9 13Zm-3 4V3h18v18Zm2-2h14V5H5ZM5 5v14Z"/>
    </Icon>
  );
});

IconMaterialImage.displayName = 'AmauiIconMaterialImage';

export default IconMaterialImage;
