import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPenSize1W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PenSize1W100'

      short_name='PenSize1'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M210 846q-4-4-4-9.818T210 826l520-520q4.364-4 10.182-4 5.818 0 9.818 4t4 9.818q0 5.818-4 10.182L230 846q-4.364 4-10.182 4-5.818 0-9.818-4Z"/>
    </Icon>
  );
});

IconMaterialPenSize1W100.displayName = 'AmauiIconMaterialPenSize1W100';

export default IconMaterialPenSize1W100;
