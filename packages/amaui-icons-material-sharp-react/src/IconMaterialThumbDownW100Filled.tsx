import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThumbDownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbDownW100Filled'

      short_name='ThumbDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.3 14.7v-2.8l3.2-7.6h10.95v10.4l-6.05 5.95-.575-.575L10.9 14.7Zm14.85 0V4.3h3.55v10.4Z"/>
    </Icon>
  );
});

IconMaterialThumbDownW100Filled.displayName = 'AmauiIconMaterialThumbDownW100Filled';

export default IconMaterialThumbDownW100Filled;
