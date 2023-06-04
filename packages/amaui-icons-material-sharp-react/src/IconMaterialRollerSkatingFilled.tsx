import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRollerSkatingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RollerSkatingFilled'

      short_name='RollerSkating'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 16V1h8v3H9.5q-.2 0-.35.15Q9 4.3 9 4.5q0 .2.15.35.15.15.35.15H12v.5q0 .2.05.5H9.5q-.2 0-.35.15Q9 6.3 9 6.5q0 .2.15.35.15.15.35.15h2.9q.325.575.863.975.537.4 1.212.6L20 10.1V16Zm1 7q-1.25 0-2.125-.875T2 20q0-1.25.875-2.125T5 17q1.25 0 2.125.875T8 20q0 1.25-.875 2.125T5 23Zm14 0q-1.25 0-2.125-.875T16 20q0-1.25.875-2.125T19 17q1.25 0 2.125.875T22 20q0 1.25-.875 2.125T19 23Zm-7 0q-1.25 0-2.125-.875T9 20q0-1.25.875-2.125T12 17q1.25 0 2.125.875T15 20q0 1.25-.875 2.125T12 23Z"/>
    </Icon>
  );
});

IconMaterialRollerSkatingFilled.displayName = 'AmauiIconMaterialRollerSkatingFilled';

export default IconMaterialRollerSkatingFilled;
