import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPowerSettingsNewFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerSettingsNewFilled'

      short_name='PowerSettingsNew'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 13q-.425 0-.712-.288Q11 12.425 11 12V4q0-.425.288-.713Q11.575 3 12 3t.713.287Q13 3.575 13 4v8q0 .425-.287.712Q12.425 13 12 13Zm0 8q-1.875 0-3.512-.712-1.638-.713-2.85-1.926-1.213-1.212-1.926-2.85Q3 13.875 3 12q0-1.725.625-3.3.625-1.575 1.8-2.85.275-.3.7-.3.425 0 .725.3.275.275.25.687-.025.413-.3.738-.875.975-1.337 2.187Q5 10.675 5 12q0 2.925 2.038 4.962Q9.075 19 12 19t4.962-2.038Q19 14.925 19 12q0-1.325-.475-2.562-.475-1.238-1.35-2.213-.275-.3-.287-.7-.013-.4.262-.675.3-.3.725-.3t.7.3q1.175 1.275 1.8 2.85Q21 10.275 21 12q0 1.875-.712 3.512-.713 1.638-1.925 2.85-1.213 1.213-2.85 1.926Q13.875 21 12 21Z"/>
    </Icon>
  );
});

IconMaterialPowerSettingsNewFilled.displayName = 'AmauiIconMaterialPowerSettingsNewFilled';

export default IconMaterialPowerSettingsNewFilled;
