import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhotoFrameW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoFrameW100'

      short_name='PhotoFrame'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.025 11.525-2.2 2.825H17.2L14 10.075l-3 3.85ZM5.55 18.95q-.325 0-.537-.213-.213-.212-.213-.537v-.5h-1q-.65 0-1.075-.425Q2.3 16.85 2.3 16.2V6.8q0-.65.425-1.075Q3.15 5.3 3.8 5.3h16.4q.65 0 1.075.425.425.425.425 1.075v9.4q0 .65-.425 1.075-.425.425-1.075.425h-1v.5q0 .325-.212.537-.213.213-.538.213ZM3.8 17h16.4q.3 0 .55-.25.25-.25.25-.55V6.8q0-.3-.25-.55Q20.5 6 20.2 6H3.8q-.3 0-.55.25Q3 6.5 3 6.8v9.4q0 .3.25.55.25.25.55.25ZM3 17V6v11Z"/>
    </Icon>
  );
});

IconMaterialPhotoFrameW100.displayName = 'AmauiIconMaterialPhotoFrameW100';

export default IconMaterialPhotoFrameW100;
