import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEmergencyShareW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyShareW100'

      short_name='EmergencyShare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21.325q1.875-1.775 2.938-3.412Q16 16.275 16 15.15q0-1.725-1.175-2.938Q13.65 11 12 11q-1.65 0-2.825 1.212Q8 13.425 8 15.15q0 1.125 1.062 2.763Q10.125 19.55 12 21.325Zm0 .95q-2.325-2.125-3.512-3.913Q7.3 16.575 7.3 15.15q0-2.025 1.375-3.438Q10.05 10.3 12 10.3q1.95 0 3.325 1.412Q16.7 13.125 16.7 15.15q0 1.575-1.25 3.288Q14.2 20.15 12 22.275ZM12 16q.425 0 .713-.288Q13 15.425 13 15t-.287-.713Q12.425 14 12 14t-.712.287Q11 14.575 11 15t.288.712Q11.575 16 12 16ZM8.475 7.05 8 6.575q.85-.675 1.875-1.05T12 5.15q1.1 0 2.125.375T16 6.575l-.475.475q-.75-.6-1.65-.9-.9-.3-1.875-.3t-1.875.3q-.9.3-1.65.9ZM5.65 4.225l-.475-.5Q6.6 2.475 8.35 1.812 10.1 1.15 12 1.15t3.663.675q1.762.675 3.187 1.925l-.5.5q-1.325-1.175-2.95-1.788-1.625-.612-3.4-.612t-3.4.6q-1.625.6-2.95 1.775ZM12 15Z"/>
    </Icon>
  );
});

IconMaterialEmergencyShareW100.displayName = 'AmauiIconMaterialEmergencyShareW100';

export default IconMaterialEmergencyShareW100;
