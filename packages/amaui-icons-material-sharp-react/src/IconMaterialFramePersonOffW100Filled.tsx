import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFramePersonOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FramePersonOffW100Filled'

      short_name='FramePersonOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m852 988-64-64H640v-28h120L634 770H266v-50q0-15 7.5-27.5T294 672q42-25 89.5-37.5T480 622h6L160 296v120h-28V268l-42-42 20-20 762 762-20 20ZM574 476q0 17-5.5 32.5T552 536L420 404q12-11 27.5-16.5T480 382q38 0 66 28t28 66Zm254 260v76l-28-28v-48h28ZM132 924V736h28v160h160v28H132Zm668-508V256H640v-28h188v188h-28ZM320 228v28h-48l-28-28h76Z"/>
    </Icon>
  );
});

IconMaterialFramePersonOffW100Filled.displayName = 'AmauiIconMaterialFramePersonOffW100Filled';

export default IconMaterialFramePersonOffW100Filled;
