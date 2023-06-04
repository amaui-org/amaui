import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMapW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MapW100'

      short_name='Map'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15 19.6-6-2.1-4.7 1.825V6L9 4.4l6 2.1 4.7-1.825v13.4Zm-.35-.85V7.05L9.35 5.2v11.7Zm.7 0 3.65-1.2V5.7l-3.65 1.35ZM5 18.3l3.65-1.4V5.2L5 6.45ZM15.35 7.05v11.7ZM8.65 5.2v11.7Z"/>
    </Icon>
  );
});

IconMaterialMapW100.displayName = 'AmauiIconMaterialMapW100';

export default IconMaterialMapW100;
