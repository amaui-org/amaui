import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMicrobiologyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicrobiologyW100Filled'

      short_name='Microbiology'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m383 872-19-19 65-66q-5-7-9.5-13.5T411 759l-34-67q-3-7-6.5-12.5T362 668l-82 81-20-19 82-82q-5-5-11-8.5t-13-6.5l-67-34q-7-4-13-7t-12-8l-61 60-19-20 59-59q-17-20-27-44t-12-51H80v-28h87q3-23 12-42t23-36l-59-60 19-19 59 59q17-14 36.5-23t42.5-12v-87h28v86q27 2 51.5 12t44.5 28l59-59 20 19-61 61q5 6 8.5 11.5T457 393l34 66q3 6 6.5 12t7.5 11l78-79 20 20-79 79q6 5 12.5 9t14.5 8l66 34q8 5 15.5 9.5T647 573l65-64 19 20-64 64q16 19 24.5 41.5T702 682h86v28h-87q-3 23-11.5 42T667 788l58 59-21 19-57-58q-17 14-36.5 23T568 843v87h-28v-86q-26-2-49.5-11T448 807l-65 65Zm-49-372q18 0 30.5-12.5T378 457q0-18-13-31t-31-14q-18 0-30.5 13T290 456q1 18 13.5 30.5T334 500Zm200 242q11 0 18.5-7.5T560 716q0-11-7.5-18.5T534 690q-11 0-18.5 7.5T508 716q0 11 7.5 18.5T534 742Z"/>
    </Icon>
  );
});

IconMaterialMicrobiologyW100Filled.displayName = 'AmauiIconMaterialMicrobiologyW100Filled';

export default IconMaterialMicrobiologyW100Filled;
