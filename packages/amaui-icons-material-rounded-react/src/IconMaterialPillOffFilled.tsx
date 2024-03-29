import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPillOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PillOffFilled'

      short_name='PillOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M694 680 376 362l80-80q32-32 73-49t86-17q94 0 159.5 65.5T840 441q0 45-17 86t-49 73l-80 80ZM581 793l-77 77q-32 32-73 49t-86 17q-94 0-159.5-65.5T120 711q0-45 17-86t49-73l77-77L84 296q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11L581 793Z"/>
    </Icon>
  );
});

IconMaterialPillOffFilled.displayName = 'AmauiIconMaterialPillOffFilled';

export default IconMaterialPillOffFilled;
