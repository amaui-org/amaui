import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEmergencyHomeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyHomeFilled'

      short_name='EmergencyHome'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.425 21.45q-.3.3-.663.437-.362.138-.762.138t-.762-.138q-.363-.137-.663-.437L2.55 13.425q-.3-.3-.438-.663-.137-.362-.137-.762t.137-.762q.138-.363.438-.663l8.025-8.025q.3-.3.663-.438.362-.137.762-.137t.762.137q.363.138.663.438l8.025 8.025q.3.3.438.663.137.362.137.762t-.137.762q-.138.363-.438.663ZM12 13q.425 0 .713-.288Q13 12.425 13 12V8q0-.425-.287-.713Q12.425 7 12 7t-.712.287Q11 7.575 11 8v4q0 .425.288.712.287.288.712.288Zm0 3q.425 0 .713-.288Q13 15.425 13 15t-.287-.713Q12.425 14 12 14t-.712.287Q11 14.575 11 15t.288.712Q11.575 16 12 16Z"/>
    </Icon>
  );
});

IconMaterialEmergencyHomeFilled.displayName = 'AmauiIconMaterialEmergencyHomeFilled';

export default IconMaterialEmergencyHomeFilled;
