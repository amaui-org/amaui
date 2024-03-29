import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHMobiledataFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HMobiledataFilled'

      short_name='HMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 17q-.425 0-.713-.288Q7 16.425 7 16V8q0-.425.287-.713Q7.575 7 8 7t.713.287Q9 7.575 9 8v3h6V8q0-.425.288-.713Q15.575 7 16 7t.712.287Q17 7.575 17 8v8q0 .425-.288.712Q16.425 17 16 17t-.712-.288Q15 16.425 15 16v-3H9v3q0 .425-.287.712Q8.425 17 8 17Z"/>
    </Icon>
  );
});

IconMaterialHMobiledataFilled.displayName = 'AmauiIconMaterialHMobiledataFilled';

export default IconMaterialHMobiledataFilled;
