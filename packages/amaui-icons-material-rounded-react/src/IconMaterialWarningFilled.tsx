import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWarningFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WarningFilled'

      short_name='Warning'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.725 21q-.575 0-.85-.5t0-1l9.25-16Q11.4 3 12 3t.875.5l9.25 16q.275.5 0 1t-.85.5ZM12 10q-.425 0-.712.287Q11 10.575 11 11v3q0 .425.288.712.287.288.712.288t.713-.288Q13 14.425 13 14v-3q0-.425-.287-.713Q12.425 10 12 10Zm0 8q.425 0 .713-.288Q13 17.425 13 17t-.287-.712Q12.425 16 12 16t-.712.288Q11 16.575 11 17t.288.712Q11.575 18 12 18Z"/>
    </Icon>
  );
});

IconMaterialWarningFilled.displayName = 'AmauiIconMaterialWarningFilled';

export default IconMaterialWarningFilled;
