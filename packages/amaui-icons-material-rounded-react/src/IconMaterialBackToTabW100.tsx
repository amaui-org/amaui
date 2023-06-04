import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBackToTabW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackToTabW100'

      short_name='BackToTab'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 356v146q0 5.95-4.035 9.975-4.035 4.025-10 4.025T136 511.975q-4-4.025-4-9.975V338q0-12.75 8.625-21.375T162 308h164q5.95 0 9.975 4.035 4.025 4.035 4.025 10T335.975 332q-4.025 4-9.975 4H179l227 226q4.615 4.091 4.808 9.545Q411 577 406 582t-10 5q-5 0-10-5L160 356Zm32 488q-26 0-43-17t-17-43V630q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v154q0 14 9 23t23 9h262q5.95 0 9.975 4.035 4.025 4.035 4.025 10T463.975 840q-4.025 4-9.975 4H192Zm621.965-240Q808 604 804 599.975T800 590V368q0-14-9-23t-23-9H454q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h314q26 0 43 17t17 43v222q0 5.95-4.035 9.975-4.035 4.025-10 4.025ZM598 844q-12.75 0-21.375-8.625T568 814v-80q0-12.75 8.625-21.375T598 704h200q12.75 0 21.375 8.625T828 734v80q0 12.75-8.625 21.375T798 844H598Z"/>
    </Icon>
  );
});

IconMaterialBackToTabW100.displayName = 'AmauiIconMaterialBackToTabW100';

export default IconMaterialBackToTabW100;
