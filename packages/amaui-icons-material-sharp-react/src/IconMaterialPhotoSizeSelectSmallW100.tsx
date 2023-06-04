import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhotoSizeSelectSmallW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoSizeSelectSmallW100'

      short_name='PhotoSizeSelectSmall'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V11H13v8.7ZM4.3 9V7H5v2Zm0-4v-.7H5V5Zm1 12.7H12l-2.15-2.95-1.6 2.1-1.2-1.55ZM7 5v-.7h2V5Zm4 0v-.7h2V5Zm4 14.7V19h2v.7ZM15 5v-.7h2V5Zm4 14.7V19h.7v.7Zm0-2.7v-2h.7v2Zm0-4v-2h.7v2Zm0-4V7h.7v2Zm0-4v-.7h.7V5Z"/>
    </Icon>
  );
});

IconMaterialPhotoSizeSelectSmallW100.displayName = 'AmauiIconMaterialPhotoSizeSelectSmallW100';

export default IconMaterialPhotoSizeSelectSmallW100;
