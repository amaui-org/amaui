import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSadTabW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SadTabW100Filled'

      short_name='SadTab'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M348 726h28v-28h208v29h28v-29h-28v-28H376v28h-28v28Zm14-152h28v-68h-28v68Zm208 0h28v-68h-28v68ZM192 844q-26 0-43-17t-17-43V408q0-26 17-43t43-17h223q12 0 23.5 5t19.5 13l22 22h288q26 0 43 17t17 43v336q0 26-17 43t-43 17H192Z"/>
    </Icon>
  );
});

IconMaterialSadTabW100Filled.displayName = 'AmauiIconMaterialSadTabW100Filled';

export default IconMaterialSadTabW100Filled;
