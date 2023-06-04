import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTitle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Title'

      short_name='Title'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 7h5.5v12h3V7H19V4H5z"/>
    </Icon>
  );
});

IconMaterialTitle.displayName = 'AmauiIconMaterialTitle';

export default IconMaterialTitle;
