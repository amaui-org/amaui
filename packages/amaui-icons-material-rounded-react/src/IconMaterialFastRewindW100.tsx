import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFastRewindW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastRewindW100'

      short_name='FastRewind'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.25 15.425-4.2-2.8Q13.7 12.4 13.7 12t.35-.625l4.2-2.8q.375-.275.775-.05.4.225.4.675v5.6q0 .45-.4.675-.4.225-.775-.05Zm-8.55 0-4.2-2.8Q5.15 12.4 5.15 12t.35-.625l4.2-2.8q.375-.275.775-.05.4.225.4.675v5.6q0 .45-.4.675-.4.225-.775-.05ZM10.175 12Zm8.55 0Zm-8.55 2.9V9.1L5.825 12Zm8.55 0V9.1l-4.35 2.9Z"/>
    </Icon>
  );
});

IconMaterialFastRewindW100.displayName = 'AmauiIconMaterialFastRewindW100';

export default IconMaterialFastRewindW100;
