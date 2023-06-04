import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewComfyAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewComfyAlt'

      short_name='ViewComfyAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 11h4V7H7Zm6 0h4V7h-4Zm-6 6h4v-4H7Zm6 0h4v-4h-4ZM2 20V4h20v16Zm2-2h16V6H4ZM4 6v12Z"/>
    </Icon>
  );
});

IconMaterialViewComfyAlt.displayName = 'AmauiIconMaterialViewComfyAlt';

export default IconMaterialViewComfyAlt;
