import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoto = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Photo'

      short_name='Photo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 5H5v14h14V5zM6 17l3-3.86 2.14 2.58 3-3.87L18 17H6z" opacity=".3"/><path d="M5 21h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2zM5 5h14v14H5V5zm6.14 10.72L9 13.14 6 17h12l-3.86-5.14z"/>
    </Icon>
  );
});

IconMaterialPhoto.displayName = 'AmauiIconMaterialPhoto';

export default IconMaterialPhoto;
