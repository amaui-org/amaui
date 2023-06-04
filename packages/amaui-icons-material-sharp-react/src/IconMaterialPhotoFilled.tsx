import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhotoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoFilled'

      short_name='Photo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 17h12l-3.75-5-3 4L9 13Zm-3 4V3h18v18Z"/>
    </Icon>
  );
});

IconMaterialPhotoFilled.displayName = 'AmauiIconMaterialPhotoFilled';

export default IconMaterialPhotoFilled;
