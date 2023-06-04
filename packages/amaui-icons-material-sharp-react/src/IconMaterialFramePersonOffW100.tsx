import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFramePersonOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FramePersonOffW100'

      short_name='FramePersonOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m852 988-64-64H640v-28h120L634 770H266v-50q0-14.609 7.538-27.478Q281.077 679.652 294 672q42-25 89.5-37.5T480 622h6L160 296v120h-28V268l-42-42 20-20 762 762-20 20ZM607 743l-91-91v-2q-73 0-124.5 14T294 704v39h313Zm-33-267q0 17-5.5 32.5T552 536l-20-20q7-8 10.5-18.5T546 476q0-27-19.5-46.5T480 410q-11 0-21.5 3.5T440 424l-20-20q12-11 27.5-16.5T480 382q38 0 66 28t28 66Zm254 260v76l-28-28v-48h28ZM132 924V736h28v160h160v28H132Zm668-508V256H640v-28h188v188h-28Zm-314 54Zm30 273ZM320 228v28h-48l-28-28h76Z"/>
    </Icon>
  );
});

IconMaterialFramePersonOffW100.displayName = 'AmauiIconMaterialFramePersonOffW100';

export default IconMaterialFramePersonOffW100;
