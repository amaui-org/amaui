import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhotoFrameW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoFrameW100Filled'

      short_name='PhotoFrame'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.825 14.35H17.2L14 10.075l-3 3.85-1.975-2.4Zm-1.275 4.6q-.325 0-.537-.213-.213-.212-.213-.537v-.5h-1q-.65 0-1.075-.425Q2.3 16.85 2.3 16.2V6.8q0-.65.425-1.075Q3.15 5.3 3.8 5.3h16.4q.65 0 1.075.425.425.425.425 1.075v9.4q0 .65-.425 1.075-.425.425-1.075.425h-1v.5q0 .325-.212.537-.213.213-.538.213Z"/>
    </Icon>
  );
});

IconMaterialPhotoFrameW100Filled.displayName = 'AmauiIconMaterialPhotoFrameW100Filled';

export default IconMaterialPhotoFrameW100Filled;
