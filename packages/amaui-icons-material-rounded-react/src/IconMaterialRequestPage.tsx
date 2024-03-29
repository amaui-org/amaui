import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRequestPage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RequestPage'

      short_name='RequestPage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 17q.425 0 .713-.288Q15 16.425 15 16v-3q0-.425-.287-.713Q14.425 12 14 12h-3v-1h3q.425 0 .713-.288Q15 10.425 15 10t-.287-.713Q14.425 9 14 9h-1q0-.425-.287-.713Q12.425 8 12 8t-.712.287Q11 8.575 11 9h-1q-.425 0-.712.287Q9 9.575 9 10v3q0 .425.288.712Q9.575 14 10 14h3v1h-3q-.425 0-.712.287Q9 15.575 9 16t.288.712Q9.575 17 10 17h1q0 .425.288.712.287.288.712.288t.713-.288Q13 17.425 13 17Zm-8 5q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h7.175q.4 0 .763.15.362.15.637.425l4.85 4.85q.275.275.425.637.15.363.15.763V20q0 .825-.587 1.413Q18.825 22 18 22Zm12-2V8.85L13.15 4H6v16ZM6 20V4v16Z"/>
    </Icon>
  );
});

IconMaterialRequestPage.displayName = 'AmauiIconMaterialRequestPage';

export default IconMaterialRequestPage;
