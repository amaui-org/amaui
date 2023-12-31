import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialToastW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToastW100Filled'

      short_name='Toast'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-266h428v-28H266v28Zm-94 94v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialToastW100Filled.displayName = 'AmauiIconMaterialToastW100Filled';

export default IconMaterialToastW100Filled;
