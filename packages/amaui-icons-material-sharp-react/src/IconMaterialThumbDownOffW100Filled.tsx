import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThumbDownOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbDownOffW100Filled'

      short_name='ThumbDownOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.3 14.7v-2.8l3.2-7.6h10.95v10.4l-6.05 5.95-.575-.575L10.9 14.7Zm14.85 0V4.3h3.55v10.4Z"/>
    </Icon>
  );
});

IconMaterialThumbDownOffW100Filled.displayName = 'AmauiIconMaterialThumbDownOffW100Filled';

export default IconMaterialThumbDownOffW100Filled;
