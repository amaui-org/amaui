import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialThumbDownOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbDownOffW100'

      short_name='ThumbDownOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.3 14.7v-2.8l3.2-7.6h10.95v10.4l-6.05 5.95-.575-.575L10.9 14.7ZM15.75 5H5.975L3 12.025V14h8.75l-1.1 5.45 5.1-5.05Zm0 9.4V5Zm.7.3V14H20V5h-3.55v-.7h4.25v10.4Z"/>
    </Icon>
  );
});

IconMaterialThumbDownOffW100.displayName = 'AmauiIconMaterialThumbDownOffW100';

export default IconMaterialThumbDownOffW100;
