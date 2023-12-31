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
      <path d="M152-204v-28h656v28H152Zm60-108v-356h180q0-36 26-62t62-26q36 0 62 26t26 62h180v356H212Zm452-28h56v-300h-56v300ZM420-668h120q0-26-17-43t-43-17q-26 0-43 17t-17 43ZM296-340v-300h-56v300h56Zm28-300v300h312v-300H324Zm-28 300h28-28Zm368 0h-28 28Zm-368 0h-56 56Zm28 0h312-312Zm340 0h56-56Z"/>
    </Icon>
  );
});

IconMaterialCheckedBagW100.displayName = 'AmauiIconMaterialCheckedBagW100';

export default IconMaterialCheckedBagW100;
