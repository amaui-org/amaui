import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWarningOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WarningOff'

      short_name='WarningOff'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 816q-17 0-28.5-11.5T440 776q0-17 11.5-28.5T480 736q17 0 28.5 11.5T520 776q0 17-11.5 28.5T480 816Zm-40-160V535l80 80v41q0 17-11.5 28.5T480 696q-17 0-28.5-11.5T440 656Zm433 198L655 637 480 336l-47 80-58-58 70-122q11-20 35-20t35 20l358 618Zm-695 2h469L350 559 178 856Zm613 143-64-63H109q-23 0-34-20t0-40l217-375L55 264q-12-12-11.5-28.5T56 207q12-12 28.5-12t28.5 12l735 736q12 12 12 28t-12 28q-12 12-28.5 12T791 999ZM499 708Zm45-181Z"/>
    </Icon>
  );
});

IconMaterialWarningOff.displayName = 'AmauiIconMaterialWarningOff';

export default IconMaterialWarningOff;
