import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShieldFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldFilled'

      short_name='Shield'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21.925h-.25q-.125 0-.225-.05-3.275-1.025-5.4-4.063Q4 14.775 4 11.1V6.375q0-.625.363-1.125.362-.5.937-.725l6-2.25q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725.362.5.362 1.125V11.1q0 3.675-2.125 6.712-2.125 3.038-5.4 4.063-.125.05-.475.05Z"/>
    </Icon>
  );
});

IconMaterialShieldFilled.displayName = 'AmauiIconMaterialShieldFilled';

export default IconMaterialShieldFilled;
