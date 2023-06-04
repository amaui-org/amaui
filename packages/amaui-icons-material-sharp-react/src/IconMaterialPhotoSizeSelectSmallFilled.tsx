import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhotoSizeSelectSmallFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoSizeSelectSmallFilled'

      short_name='PhotoSizeSelectSmall'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V11h10v10ZM3 9V7h2v2Zm0-4V3h2v2Zm1 14h8l-2.6-3.5L7.5 18l-1.4-1.85ZM7 5V3h2v2Zm4 0V3h2v2Zm4 16v-2h2v2Zm0-16V3h2v2Zm4 16v-2h2v2Zm0-4v-2h2v2Zm0-4v-2h2v2Zm0-4V7h2v2Zm0-4V3h2v2Z"/>
    </Icon>
  );
});

IconMaterialPhotoSizeSelectSmallFilled.displayName = 'AmauiIconMaterialPhotoSizeSelectSmallFilled';

export default IconMaterialPhotoSizeSelectSmallFilled;
