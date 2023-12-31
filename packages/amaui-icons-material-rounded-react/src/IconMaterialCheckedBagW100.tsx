import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCheckedBagW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckedBagW100'

      short_name='CheckedBag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M166-204q-6 0-10-4t-4-10q0-6 4-10t10-4h628q6 0 10 4t4 10q0 6-4 10t-10 4H166Zm106-108q-26 0-43-17t-17-43v-236q0-26 17-43t43-17h120q0-36 26-62t62-26q36 0 62 26t26 62h120q26 0 43 17t17 43v236q0 26-17 43t-43 17H272Zm392-28h24q14 0 23-9t9-23v-236q0-14-9-23t-23-9h-24v300ZM420-668h120q0-26-17-43t-43-17q-26 0-43 17t-17 43ZM296-340v-300h-24q-14 0-23 9t-9 23v236q0 14 9 23t23 9h24Zm28-300v300h312v-300H324Zm-28 300h28-28Zm368 0h-28 28Zm-368 0h-56 56Zm28 0h312-312Zm340 0h56-56Z"/>
    </Icon>
  );
});

IconMaterialCheckedBagW100.displayName = 'AmauiIconMaterialCheckedBagW100';

export default IconMaterialCheckedBagW100;
