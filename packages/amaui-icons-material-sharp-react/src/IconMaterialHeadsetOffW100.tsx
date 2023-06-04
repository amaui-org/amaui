import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeadsetOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadsetOffW100'

      short_name='HeadsetOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.8 17.05-.7-.7V13.8H17v.475l-.7-.7V13.1h2.8V11q0-2.9-2.05-4.95Q15 4 12.1 4q-1.1 0-2.162.35-1.063.35-1.888.95l-.5-.5q.75-.6 1.95-1.05 1.2-.45 2.6-.45 1.6 0 3 .6t2.45 1.65Q18.6 6.6 19.2 8q.6 1.4.6 3Zm1.6 5.45-1.6-1.6h-7.7v-.7h7l-1.5-1.5h-1.3v-1.3L6.15 7.25Q5.7 8 5.4 9.012 5.1 10.025 5.1 11v2.1h2.8v5.6H4.4V11q0-1.2.338-2.275.337-1.075.912-1.975L1.6 2.7l.5-.5L21.9 22ZM5.1 18h2.1v-4.2H5.1Zm0 0h2.1Zm14-1.65Z"/>
    </Icon>
  );
});

IconMaterialHeadsetOffW100.displayName = 'AmauiIconMaterialHeadsetOffW100';

export default IconMaterialHeadsetOffW100;
