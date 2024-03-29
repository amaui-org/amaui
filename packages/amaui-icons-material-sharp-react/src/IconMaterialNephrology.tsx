import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNephrology = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Nephrology'

      short_name='Nephrology'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 21v-4.175q-.25.1-.488.137Q8.275 17 8 17q-2.5 0-4.25-1.75T2 11V9q0-2.5 1.75-4.25T8 3q1.25 0 2.125.875T11 6q0 1.25-.875 2.125T8 9H6V7h2q.425 0 .713-.287Q9 6.425 9 6t-.287-.713Q8.425 5 8 5 6.35 5 5.175 6.175 4 7.35 4 9v2q0 1.65 1.175 2.825Q6.35 15 8 15q.425 0 .713-.288Q9 14.425 9 14t-.287-.713Q8.425 13 8 13H6v-2h2q1.25 0 2.125.875T11 14v7Zm4 0v-7q0-1.25.875-2.125T16 11h2v2h-2q-.425 0-.712.287Q15 13.575 15 14t.288.712Q15.575 15 16 15q1.65 0 2.825-1.175Q20 12.65 20 11V9q0-1.65-1.175-2.825Q17.65 5 16 5q-.425 0-.712.287Q15 5.575 15 6t.288.713Q15.575 7 16 7h2v2h-2q-1.25 0-2.125-.875T13 6q0-1.25.875-2.125T16 3q2.5 0 4.25 1.75T22 9v2q0 2.5-1.75 4.25T16 17q-.275 0-.512-.038-.238-.037-.488-.137V21ZM4 11V9Zm16-2v2Z"/>
    </Icon>
  );
});

IconMaterialNephrology.displayName = 'AmauiIconMaterialNephrology';

export default IconMaterialNephrology;
