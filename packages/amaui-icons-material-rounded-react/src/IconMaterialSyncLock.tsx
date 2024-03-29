import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSyncLock = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SyncLock'

      short_name='SyncLock'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 22q-.425 0-.712-.288Q15 21.425 15 21v-3q0-.425.288-.712Q15.575 17 16 17v-1q0-.825.587-1.413Q17.175 14 18 14q.825 0 1.413.587Q20 15.175 20 16v1q.425 0 .712.288.288.287.288.712v3q0 .425-.288.712Q20.425 22 20 22Zm1-5h2v-1q0-.425-.288-.713Q18.425 15 18 15t-.712.287Q17 15.575 17 16Zm1-5q0-1.275-.512-2.387Q16.975 8.5 16 7.55V9q0 .425-.287.712Q15.425 10 15 10t-.712-.288Q14 9.425 14 9V5q0-.425.288-.713Q14.575 4 15 4h4q.425 0 .712.287Q20 4.575 20 5t-.288.713Q19.425 6 19 6h-1.725q1.475 1.325 2.088 2.837Q19.975 10.35 20 12ZM5 20q-.425 0-.713-.288Q4 19.425 4 19t.287-.712Q4.575 18 5 18h1.725q-1.275-1.1-2-2.65Q4 13.8 4 12q0-2.375 1.238-4.287Q6.475 5.8 8.475 4.825q.575-.275 1.05 0Q10 5.1 10 5.75q0 .3-.175.512-.175.213-.425.338-1.5.725-2.45 2.162Q6 10.2 6 12q0 1.35.537 2.488Q7.075 15.625 8 16.45V15q0-.425.288-.713Q8.575 14 9 14t.713.287Q10 14.575 10 15v4q0 .425-.287.712Q9.425 20 9 20Z"/>
    </Icon>
  );
});

IconMaterialSyncLock.displayName = 'AmauiIconMaterialSyncLock';

export default IconMaterialSyncLock;
