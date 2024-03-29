import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoSim = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoSim'

      short_name='NoSim'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20 17.175-2-2V4h-7.15l-2 2L7.4 4.6 10 2h10Zm-6.475-6.5Zm-1.875 3.8ZM20.5 23.3 6 8.8V20h12v-2.025l2 2V22H4V8l.6-.6L.7 3.5l1.425-1.4L21.9 21.875Z"/>
    </Icon>
  );
});

IconMaterialNoSim.displayName = 'AmauiIconMaterialNoSim';

export default IconMaterialNoSim;
