import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhotoSizeSelectLarge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoSizeSelectLarge'

      short_name='PhotoSizeSelectLarge'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V7h14v14Zm2-3h10l-3.4-4.5L9 17l-1.6-2.15ZM3 5V3h2v2Zm8 0V3h2v2Zm8 0V3h2v2ZM7 5V3h2v2Zm12 8v-2h2v2Zm0 8v-2h2v2Zm0-12V7h2v2Zm0 8v-2h2v2ZM15 5V3h2v2Z"/>
    </Icon>
  );
});

IconMaterialPhotoSizeSelectLarge.displayName = 'AmauiIconMaterialPhotoSizeSelectLarge';

export default IconMaterialPhotoSizeSelectLarge;
