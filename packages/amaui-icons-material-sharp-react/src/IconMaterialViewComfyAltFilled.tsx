import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewComfyAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewComfyAltFilled'

      short_name='ViewComfyAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 11h4V7H7Zm6 0h4V7h-4Zm-6 6h4v-4H7Zm6 0h4v-4h-4ZM2 20V4h20v16Z"/>
    </Icon>
  );
});

IconMaterialViewComfyAltFilled.displayName = 'AmauiIconMaterialViewComfyAltFilled';

export default IconMaterialViewComfyAltFilled;
