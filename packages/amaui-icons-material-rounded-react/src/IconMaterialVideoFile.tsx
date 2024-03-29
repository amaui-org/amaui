import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoFile = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoFile'

      short_name='VideoFile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 18h4q.425 0 .713-.288Q14 17.425 14 17v-1l1.275.675q.25.125.487-.025.238-.15.238-.425v-2.45q0-.275-.238-.425-.237-.15-.487-.025L14 14v-1q0-.425-.287-.713Q13.425 12 13 12H9q-.425 0-.712.287Q8 12.575 8 13v4q0 .425.288.712Q8.575 18 9 18Zm-3 4q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h7.175q.4 0 .763.15.362.15.637.425l4.85 4.85q.275.275.425.637.15.363.15.763V20q0 .825-.587 1.413Q18.825 22 18 22Zm7-18H6v16h12V9h-4q-.425 0-.712-.288Q13 8.425 13 8ZM6 4v5-5 16V4Z"/>
    </Icon>
  );
});

IconMaterialVideoFile.displayName = 'AmauiIconMaterialVideoFile';

export default IconMaterialVideoFile;
