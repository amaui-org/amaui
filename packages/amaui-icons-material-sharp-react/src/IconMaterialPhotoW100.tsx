import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhotoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoW100'

      short_name='Photo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.95 16.35h8.3l-2.55-3.4-2.5 3.1-1.6-1.85ZM4.3 19.7V4.3h15.4v15.4ZM5 19h14V5H5ZM5 5v14Z"/>
    </Icon>
  );
});

IconMaterialPhotoW100.displayName = 'AmauiIconMaterialPhotoW100';

export default IconMaterialPhotoW100;
