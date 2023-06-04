import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPermMediaW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermMediaW100'

      short_name='PermMedia'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.65 16.75V5.05h6.4l1.3 1.3h7.7v10.4Zm.7-.7h14v-9h-7.275l-1.3-1.3H6.35Zm-3.4 3.4V8.35h.7v10.4h14.4v.7Zm6.225-5.75h8.3l-2.55-3.4-2.5 3.1-1.6-1.85ZM6.35 16.05V5.75v10.3Z"/>
    </Icon>
  );
});

IconMaterialPermMediaW100.displayName = 'AmauiIconMaterialPermMediaW100';

export default IconMaterialPermMediaW100;
