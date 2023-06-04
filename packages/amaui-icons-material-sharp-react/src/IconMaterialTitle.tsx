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
      <path d="M10.5 20V7H5V4h14v3h-5.5v13Z"/>
    </Icon>
  );
});

IconMaterialTitle.displayName = 'AmauiIconMaterialTitle';

export default IconMaterialTitle;
