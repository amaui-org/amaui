import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUrology = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Urology'

      short_name='Urology'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 23v-2H7.625l-.975-6H9v-1.175q-.25.1-.488.137Q8.275 14 8 14q-2.5 0-4.25-1.75T2 8V7q0-2.5 1.75-4.25T8 1q1.25 0 2.125.875T11 4q0 1.25-.875 2.125T8 7H6V5h2q.425 0 .713-.288Q9 4.425 9 4t-.287-.713Q8.425 3 8 3 6.35 3 5.175 4.175 4 5.35 4 7v1q0 1.65 1.175 2.825Q6.35 12 8 12q.425 0 .713-.288Q9 11.425 9 11t-.287-.713Q8.425 10 8 10H6V8h2q1.25 0 2.125.875T11 11v4h2v-4q0-1.25.875-2.125T16 8h2v2h-2q-.425 0-.712.287Q15 10.575 15 11t.288.712Q15.575 12 16 12q1.65 0 2.825-1.175Q20 9.65 20 8V7q0-1.65-1.175-2.825Q17.65 3 16 3q-.425 0-.712.287Q15 3.575 15 4t.288.712Q15.575 5 16 5h2v2h-2q-1.25 0-2.125-.875T13 4q0-1.25.875-2.125T16 1q2.5 0 4.25 1.75T22 7v1q0 2.5-1.75 4.25T16 14q-.275 0-.512-.038-.238-.037-.488-.137V15h2.35l-.975 6H15v2h-2v-2h-2v2Zm.325-4h5.35L15 17H9Zm0 0L9 17l.325 2Z"/>
    </Icon>
  );
});

IconMaterialUrology.displayName = 'AmauiIconMaterialUrology';

export default IconMaterialUrology;
