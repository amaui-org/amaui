import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrightness2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness2W100Filled'

      short_name='Brightness2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.475 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862-1.588.688-3.388.688-.25 0-.475-.012-.225-.013-.45-.038-.3-.025-.512-.225-.213-.2-.213-.5 0-.125.037-.262.038-.138.138-.238 1.325-1.5 2.05-3.45.725-1.95.725-3.975.05-2.025-.662-3.975-.713-1.95-2.038-3.45-.1-.1-.137-.238Q7.2 4.2 7.2 4.075q0-.3.212-.5.213-.2.513-.225.225-.025.45-.038Q8.6 3.3 8.85 3.3q1.8 0 3.388.687Q13.825 4.675 15 5.85t1.837 2.762Q17.5 10.2 17.475 12Z"/>
    </Icon>
  );
});

IconMaterialBrightness2W100Filled.displayName = 'AmauiIconMaterialBrightness2W100Filled';

export default IconMaterialBrightness2W100Filled;
