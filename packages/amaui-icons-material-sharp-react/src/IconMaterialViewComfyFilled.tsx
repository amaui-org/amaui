import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewComfyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewComfyFilled'

      short_name='ViewComfy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 11V4h20v7Zm8 9v-7h12v7Zm-8 0v-7h6v7Z"/>
    </Icon>
  );
});

IconMaterialViewComfyFilled.displayName = 'AmauiIconMaterialViewComfyFilled';

export default IconMaterialViewComfyFilled;
