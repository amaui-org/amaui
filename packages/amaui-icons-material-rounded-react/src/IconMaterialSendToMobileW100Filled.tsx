import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSendToMobileW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendToMobileW100Filled'

      short_name='SendToMobile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.75 14.85q-.125-.125-.125-.25t.125-.25l2-2H13q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h5.75l-2-2q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l2.325 2.325q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25L17.25 14.85q-.1.1-.237.112-.138.013-.263-.112ZM7.8 21.7q-.625 0-1.062-.438Q6.3 20.825 6.3 20.2V3.8q0-.625.438-1.063Q7.175 2.3 7.8 2.3h8.4q.625 0 1.062.437.438.438.438 1.063v3.1H17V5.35H7v13.3h10V17.1h.7v3.1q0 .625-.438 1.062-.437.438-1.062.438Z"/>
    </Icon>
  );
});

IconMaterialSendToMobileW100Filled.displayName = 'AmauiIconMaterialSendToMobileW100Filled';

export default IconMaterialSendToMobileW100Filled;
