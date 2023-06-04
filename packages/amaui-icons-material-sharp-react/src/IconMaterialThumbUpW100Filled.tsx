import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThumbUpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbUpW100Filled'

      short_name='ThumbUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.55 19.7V9.3l6.05-5.95.575.575L13.1 9.3h8.6v2.8l-3.2 7.6Zm-.7-10.4v10.4H3.3V9.3Z"/>
    </Icon>
  );
});

IconMaterialThumbUpW100Filled.displayName = 'AmauiIconMaterialThumbUpW100Filled';

export default IconMaterialThumbUpW100Filled;
