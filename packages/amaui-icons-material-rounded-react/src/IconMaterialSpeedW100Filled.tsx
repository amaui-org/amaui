import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeedW100Filled'

      short_name='Speed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.85 15.1q.425.425 1.088.375.662-.05.962-.475l3.625-4.95q.2-.275-.037-.513-.238-.237-.513-.037L11 13.1q-.45.3-.512.937-.063.638.362 1.063ZM5.1 18.7q-.2 0-.362-.1-.163-.1-.288-.3-.45-.8-.8-1.85Q3.3 15.4 3.3 14q0-1.775.675-3.363.675-1.587 1.837-2.775 1.163-1.187 2.763-1.874Q10.175 5.3 12 5.3q1.85 0 3.438.675 1.587.675 2.75 1.837 1.162 1.163 1.837 2.738t.675 3.35q0 1.25-.275 2.312-.275 1.063-.875 2.188-.075.125-.25.212-.175.088-.4.088Z"/>
    </Icon>
  );
});

IconMaterialSpeedW100Filled.displayName = 'AmauiIconMaterialSpeedW100Filled';

export default IconMaterialSpeedW100Filled;
