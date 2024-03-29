import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatteryUnknown = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryUnknown'

      short_name='BatteryUnknown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 22q-.425 0-.713-.288Q7 21.425 7 21V5q0-.425.287-.713Q7.575 4 8 4h2V3q0-.425.288-.713Q10.575 2 11 2h2q.425 0 .713.287Q14 2.575 14 3v1h2q.425 0 .712.287Q17 4.575 17 5v16q0 .425-.288.712Q16.425 22 16 22Zm4-4q.425 0 .738-.312.312-.313.312-.738t-.312-.738Q12.425 15.9 12 15.9t-.737.312q-.313.313-.313.738t.313.738Q11.575 18 12 18Zm0-3.2q.275 0 .512-.2.238-.2.338-.525.3-1.125 1.15-1.625.85-.5.85-1.75 0-1.275-.788-1.988Q13.275 8 12 8q-.875 0-1.525.4-.65.4-1.025 1-.15.275-.025.575.125.3.45.425.25.1.488 0 .237-.1.437-.35.2-.25.488-.425.287-.175.712-.175.725 0 1.038.375.312.375.312.825 0 .525-.275.825-.275.3-.625.6t-.687.737q-.338.438-.463 1.238-.05.3.163.525.212.225.537.225Z"/>
    </Icon>
  );
});

IconMaterialBatteryUnknown.displayName = 'AmauiIconMaterialBatteryUnknown';

export default IconMaterialBatteryUnknown;
