import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDevicesWearablesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesWearablesW100'

      short_name='DevicesWearables'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M182 322h320v-34q0-12-10-22t-22-10H214q-12 0-22 10t-10 22v34Zm32 602q-26 0-43-17t-17-43V288q0-26 17-43t43-17h256q26 0 43 17t17 43v146q-8 5-14.5 9.5T502 453V350H182v452h248q4 8 8.5 14.5T448 830H182v34q0 12 10 22t22 10h302q-8 13-21 20.5t-30 7.5H214Zm456-108q61 0 103.5-42.5T816 670q0-61-42.5-103.5T670 524q-61 0-103.5 42.5T524 670q0 61 42.5 103.5T670 816Zm-44 108q-13 0-21.5-8.5T596 894v-66q-45-21-72.5-63T496 670q0-53 27.5-95t72.5-63v-66q0-13 8.5-21.5T626 416h88q13 0 21.5 8.5T744 446v66q45 21 72.5 63t27.5 95q0 53-27.5 95T744 828v66q0 13-8.5 21.5T714 924h-88Zm-444-94v66-66Zm0-508v-66 66Z"/>
    </Icon>
  );
});

IconMaterialDevicesWearablesW100.displayName = 'AmauiIconMaterialDevicesWearablesW100';

export default IconMaterialDevicesWearablesW100;
