import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAdUnitsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdUnitsFilled'

      short_name='AdUnits'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 9V7h8v2ZM5 23V1h14v22Zm2-5h10V6H7Z"/>
    </Icon>
  );
});

IconMaterialAdUnitsFilled.displayName = 'AmauiIconMaterialAdUnitsFilled';

export default IconMaterialAdUnitsFilled;
