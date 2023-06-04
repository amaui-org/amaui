import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhotoSizeSelectLargeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoSizeSelectLargeW100Filled'

      short_name='PhotoSizeSelectLarge'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V8H16v11.7Zm2-1.7H14l-2.6-3.45-2 2.7-1.25-1.65Zm-2-13v-.7H5V5ZM11 5v-.7h2V5Zm8 0v-.7h.7V5ZM7 5v-.7h2V5Zm12 8v-2h.7v2Zm0 6.7V19h.7v.7Zm0-10.95v-2h.7v2Zm0 8.5v-2h.7v2ZM15 5v-.7h2V5Z"/>
    </Icon>
  );
});

IconMaterialPhotoSizeSelectLargeW100Filled.displayName = 'AmauiIconMaterialPhotoSizeSelectLargeW100Filled';

export default IconMaterialPhotoSizeSelectLargeW100Filled;
