import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoSizeSelectLargeSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoSizeSelectLargeSharpFilled'
      short_name='PhotoSizeSelectLarge'

      {...props}
    >
      <path d="M3 21V7H17V21ZM5 18H15L11.6 13.5L9 17L7.4 14.85ZM3 5V3H5V5ZM11 5V3H13V5ZM19 5V3H21V5ZM7 5V3H9V5ZM19 13V11H21V13ZM19 21V19H21V21ZM19 9V7H21V9ZM19 17V15H21V17ZM15 5V3H17V5Z"/>
    </Icon>
  );
});

IconMaterialPhotoSizeSelectLargeSharpFilled.displayName = 'AmauiIconMaterialPhotoSizeSelectLargeSharpFilled';

export default IconMaterialPhotoSizeSelectLargeSharpFilled;
