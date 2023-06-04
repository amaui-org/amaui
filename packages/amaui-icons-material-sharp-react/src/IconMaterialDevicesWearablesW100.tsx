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
      <path d="M182 322h320v-66H182v66Zm-28 602V228h376v206q-8 5-14.5 9.5T502 453V350H182v452h248q4 8 8.5 14.5T448 830H182v66h334v28H154Zm516-108q61 0 103.5-42.5T816 670q0-61-42.5-103.5T670 524q-61 0-103.5 42.5T524 670q0 61 42.5 103.5T670 816Zm-74 108v-96q-45-21-72.5-63.222t-27.5-95Q496 617 523.5 575q27.5-42 72.5-63v-96h148v96q45 21 72.5 63.222t27.5 95Q844 723 816.5 765 789 807 744 828v96H596Zm-414-94v66-66Zm0-508v-66 66Z"/>
    </Icon>
  );
});

IconMaterialDevicesWearablesW100.displayName = 'AmauiIconMaterialDevicesWearablesW100';

export default IconMaterialDevicesWearablesW100;
