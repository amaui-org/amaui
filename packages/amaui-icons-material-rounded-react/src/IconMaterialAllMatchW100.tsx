import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAllMatchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllMatchW100'

      short_name='AllMatch'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m250 776 130-200-130-200 130 200-20.5 31Q339 638 315 675.5t-44.5 69L250 776Zm223 28H255q-18.261 0-26.63-15.5Q220 773 230 758l116-182-116-182q-10-15-1.63-30.5Q236.739 348 255 348h297q22.182 0 41.591 10Q613 368 626 386l134 190q-8-1-17.5-1.5T725 574L602 402q-9-12-21-19t-29-7H250l130 200-130 200h226q-2 6.667-2 13.333Q474 796 473 804Zm223 41-29-29q-3.971-4-9.485-4-5.515 0-9.515 4.071-4 4.072-4 9.5 0 5.429 4 9.429l33 33q6.545 7 15.273 7Q705 875 712 868l80-79q4-4 4.5-9t-4.5-10q-4.235-4-10.118-4-5.882 0-9.882 4l-76 75Zm24 125q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Z"/>
    </Icon>
  );
});

IconMaterialAllMatchW100.displayName = 'AmauiIconMaterialAllMatchW100';

export default IconMaterialAllMatchW100;
