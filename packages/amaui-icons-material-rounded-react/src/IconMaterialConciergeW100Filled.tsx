import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialConciergeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConciergeW100Filled'

      short_name='Concierge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-132q-6 0-10-4t-4-10q0-6 4-10t10-4h388q6 0 10 4t4 10q0 6-4 10t-10 4H466Zm26-88q0-66 44.5-114T646-387v-14q0-5 4-9.5t10-4.5q5 0 9.5 4.5t4.5 9.5v14q65 5 109.5 53T828-220H492ZM94-642v92q0 23 15.5 38.5T148-496q23 0 38.5-15.5T202-550v-184q0-23-15.5-38.5T148-788q-23 0-38.5 15.5T94-734v92Zm136 25v61q0 25 17.5 42.5T290-496h29q5 0 10.5-1t10.5-3l247-90q14-5 21.5-16.5T616-632v-1q0-11-8-19t-19-8h-81l-101 35q-5 2-10.5-.5T389-633q-3-6 0-12t9-8l108-35h242q24 0 43-16t19-40l-250-80q-8-3-17.5-3t-18.5 2l-251 74q-20 6-31.5 22T230-693v76Z"/>
    </Icon>
  );
});

IconMaterialConciergeW100Filled.displayName = 'AmauiIconMaterialConciergeW100Filled';

export default IconMaterialConciergeW100Filled;
