import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLockResetFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockResetFilled'

      short_name='LockReset'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 21q-1.85 0-3.462-.688-1.613-.687-2.838-1.887L8.125 17q.95.925 2.2 1.462Q11.575 19 13 19q2.9 0 4.95-2.05Q20 14.9 20 12q0-2.9-2.05-4.95Q15.9 5 13 5q-2.9 0-4.95 2.05Q6 9.1 6 12v.175l1.825-1.825 1.425 1.4L5 16 .75 11.75l1.425-1.4L4 12.2V12q0-1.875.713-3.513.712-1.637 1.925-2.85 1.212-1.212 2.85-1.925Q11.125 3 13 3t3.513.712q1.637.713 2.85 1.925 1.212 1.213 1.925 2.85Q22 10.125 22 12q0 3.75-2.625 6.375T13 21Zm-3-5v-5h1v-1q0-.825.588-1.413Q12.175 8 13 8t1.413.587Q15 9.175 15 10v1h1v5Zm2-5h2v-1q0-.425-.287-.713Q13.425 9 13 9t-.712.287Q12 9.575 12 10Z"/>
    </Icon>
  );
});

IconMaterialLockResetFilled.displayName = 'AmauiIconMaterialLockResetFilled';

export default IconMaterialLockResetFilled;
