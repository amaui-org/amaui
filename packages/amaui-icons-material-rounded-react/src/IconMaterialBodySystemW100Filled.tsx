import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBodySystemW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BodySystemW100Filled'

      short_name='BodySystem'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m439 572-58 208-2 4q-1 2-3 3.5t-4 2q-2 .5-5 .5-7 0-11.5-5t-2.5-12l80-365-132 54v73q0 6-4 10t-10 4q-6 0-10-4t-4-10v-92l170-72q14-6 25.5-7.5t22.5.5q11 2 19.5 8.5T526 390l24 38q38 63 72.5 92.5T701 558q6 1 9.5 5.5T714 574q0 6-4.5 9.5T699 586q-59-11-98-46.5T527 445l-36 127 83 98v106q0 6-4 10t-10 4q-6 0-10-4t-4-10v-91L439 572Zm100-255q-27 0-45.5-18.5T475 253q0-27 18.5-45.5T539 189q27 0 45.5 18.5T603 253q0 27-18.5 45.5T539 317Zm-59 607q-72 0-135.5-27.5T234 822q-47-47-74.5-110.5T132 576q0-98 48.5-178T308 273q5-3 11-1t8 7q2 5 1 10.5t-6 8.5q-73 42-117.5 115T160 576q0 134 93 227t227 93q130 0 222-88t98-216q0-6 4-10t10-4q6 0 10 4.5t4 10.5q-7 139-107.5 235T480 924Z"/>
    </Icon>
  );
});

IconMaterialBodySystemW100Filled.displayName = 'AmauiIconMaterialBodySystemW100Filled';

export default IconMaterialBodySystemW100Filled;
