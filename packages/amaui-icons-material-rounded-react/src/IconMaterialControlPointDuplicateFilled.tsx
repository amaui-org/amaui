import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialControlPointDuplicateFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ControlPointDuplicateFilled'

      short_name='ControlPointDuplicate'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 16q.425 0 .713-.288Q16 15.425 16 15v-2h2q.425 0 .712-.288Q19 12.425 19 12t-.288-.713Q18.425 11 18 11h-2V9q0-.425-.287-.713Q15.425 8 15 8t-.712.287Q14 8.575 14 9v2h-2q-.425 0-.712.287Q11 11.575 11 12t.288.712Q11.575 13 12 13h2v2q0 .425.288.712.287.288.712.288ZM4.425 19.775q-2-1.125-3.212-3.2Q0 14.5 0 12t1.238-4.588Q2.475 5.325 4.6 4.125q.5-.275.95.05.45.325.45.9 0 .25-.15.525t-.4.4q-1.6.95-2.525 2.537Q2 10.125 2 12t.925 3.463Q3.85 17.05 5.45 18q.25.125.4.4.15.275.15.55 0 .575-.475.875-.475.3-1.1-.05ZM15 21q-1.875 0-3.512-.712-1.638-.713-2.85-1.926-1.213-1.212-1.925-2.85Q6 13.875 6 12t.713-3.513q.712-1.637 1.925-2.85 1.212-1.212 2.85-1.925Q13.125 3 15 3t3.513.712q1.637.713 2.85 1.925 1.212 1.213 1.925 2.85Q24 10.125 24 12t-.712 3.512q-.713 1.638-1.925 2.85-1.213 1.213-2.85 1.926Q16.875 21 15 21Z"/>
    </Icon>
  );
});

IconMaterialControlPointDuplicateFilled.displayName = 'AmauiIconMaterialControlPointDuplicateFilled';

export default IconMaterialControlPointDuplicateFilled;
