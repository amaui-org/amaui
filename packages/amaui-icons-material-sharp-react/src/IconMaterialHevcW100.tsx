import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHevcW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HevcW100'

      short_name='Hevc'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.4 14.6V9.4h.7v2h1.8v-2h.7v5.2h-.7v-2.5H4.1v2.5Zm14 0V9.4h3.2v1.2h-.7v-.5h-1.8v3.8h1.8v-.5h.7v1.2Zm-3.7 0-1.25-5.2h.725l1.075 4.45 1.075-4.45h.725l-1.25 5.2Zm-5.35 0V9.4h2.7v.7h-2v1.3h2v.7h-2v1.8h2v.7Z"/>
    </Icon>
  );
});

IconMaterialHevcW100.displayName = 'AmauiIconMaterialHevcW100';

export default IconMaterialHevcW100;
