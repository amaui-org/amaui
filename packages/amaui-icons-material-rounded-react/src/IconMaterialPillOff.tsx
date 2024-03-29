import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPillOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PillOff'

      short_name='PillOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m694 680-56-56 80-80q20-20 31-47t11-56q0-60-42.5-102.5T615 296q-29 0-56 11t-47 31l-80 80-56-56 80-80q32-32 73-49t86-17q94 0 159.5 65.5T840 441q0 45-17 86t-49 73l-80 80ZM345 856q29 0 56-11t47-31l77-77-206-206-77 77q-20 20-31 47t-11 56q0 60 42.5 102.5T345 856Zm236-63-77 77q-32 32-73 49t-86 17q-94 0-159.5-65.5T120 711q0-45 17-86t49-73l77-77L84 296q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11L581 793ZM422 634Zm113-113Z"/>
    </Icon>
  );
});

IconMaterialPillOff.displayName = 'AmauiIconMaterialPillOff';

export default IconMaterialPillOff;
