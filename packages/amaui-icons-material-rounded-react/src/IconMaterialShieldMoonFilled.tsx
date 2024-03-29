import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShieldMoonFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldMoonFilled'

      short_name='ShieldMoon'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.525 16q.95 0 1.863-.4.912-.4 1.587-1.2.175-.2.075-.45-.1-.25-.35-.3-.95-.15-1.8-.712-.85-.563-1.375-1.488-.525-.9-.6-1.913-.075-1.012.275-1.937.1-.25-.062-.45-.163-.2-.438-.15-1.725.325-2.725 1.625t-1 2.875q0 1.875 1.337 3.188Q10.65 16 12.525 16ZM12 21.925h-.25q-.125 0-.225-.05-3.275-1.025-5.4-4.063Q4 14.775 4 11.1V6.375q0-.625.363-1.125.362-.5.937-.725l6-2.25q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725.362.5.362 1.125V11.1q0 3.675-2.125 6.712-2.125 3.038-5.4 4.063-.125.05-.475.05Z"/>
    </Icon>
  );
});

IconMaterialShieldMoonFilled.displayName = 'AmauiIconMaterialShieldMoonFilled';

export default IconMaterialShieldMoonFilled;
