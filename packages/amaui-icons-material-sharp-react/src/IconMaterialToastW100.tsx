import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialToastW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToastW100'

      short_name='Toast'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-266h428v-28H266v28Zm-94 94v-616h616v616H172Zm28-28h560v-560H200v560Zm0 0v-560 560Z"/>
    </Icon>
  );
});

IconMaterialToastW100.displayName = 'AmauiIconMaterialToastW100';

export default IconMaterialToastW100;
