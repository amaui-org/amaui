import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRollerSkating = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RollerSkating'

      short_name='RollerSkating'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 16V1h9v4.5q0 .675.413 1.225.412.55 1.062.725L20 8.975V16ZM9 4.5q0-.2.15-.35Q9.3 4 9.5 4H11V3H6v11h12v-3.475L13.9 9.35q-.9-.275-1.575-.888Q11.65 7.85 11.3 7H9.5q-.2 0-.35-.15Q9 6.7 9 6.5q0-.2.15-.35Q9.3 6 9.5 6h1.6q-.05-.3-.062-.5-.013-.2-.038-.5H9.5q-.2 0-.35-.15Q9 4.7 9 4.5ZM6 14Zm-1 9q-1.25 0-2.125-.875T2 20q0-1.25.875-2.125T5 17q1.25 0 2.125.875T8 20q0 1.25-.875 2.125T5 23Zm0-2q.425 0 .713-.288Q6 20.425 6 20t-.287-.712Q5.425 19 5 19t-.713.288Q4 19.575 4 20t.287.712Q4.575 21 5 21Zm14 2q-1.25 0-2.125-.875T16 20q0-1.25.875-2.125T19 17q1.25 0 2.125.875T22 20q0 1.25-.875 2.125T19 23Zm0-2q.425 0 .712-.288Q20 20.425 20 20t-.288-.712Q19.425 19 19 19t-.712.288Q18 19.575 18 20t.288.712Q18.575 21 19 21Zm-7 2q-1.25 0-2.125-.875T9 20q0-1.25.875-2.125T12 17q1.25 0 2.125.875T15 20q0 1.25-.875 2.125T12 23Zm0-2q.425 0 .713-.288Q13 20.425 13 20t-.287-.712Q12.425 19 12 19t-.712.288Q11 19.575 11 20t.288.712Q11.575 21 12 21Zm-7-1Zm7 0Zm7 0Z"/>
    </Icon>
  );
});

IconMaterialRollerSkating.displayName = 'AmauiIconMaterialRollerSkating';

export default IconMaterialRollerSkating;
