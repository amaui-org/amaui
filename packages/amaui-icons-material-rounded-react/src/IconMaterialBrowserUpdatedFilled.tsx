import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrowserUpdatedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrowserUpdatedFilled'

      short_name='BrowserUpdated'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.425 21q-.575 0-1-.425-.425-.425-.425-1 0-.225.113-.513.112-.287.287-.462L7 18H4q-.825 0-1.412-.587Q2 16.825 2 16V5q0-.825.588-1.413Q3.175 3 4 3h7q.425 0 .713.287Q12 3.575 12 4t-.287.712Q11.425 5 11 5H4v11h16v-2q0-.425.288-.713Q20.575 13 21 13t.712.287Q22 13.575 22 14v2q0 .825-.587 1.413Q20.825 18 20 18h-3l.6.6q.175.175.288.45.112.275.112.525 0 .575-.425 1-.425.425-1 .425ZM15 14.575q-.2 0-.375-.063-.175-.062-.325-.212l-3.6-3.6q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l1.9 1.9V4q0-.425.288-.713Q14.575 3 15 3t.713.287Q16 3.575 16 4v7.2l1.9-1.9q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7l-3.6 3.6q-.15.15-.325.212-.175.063-.375.063Z"/>
    </Icon>
  );
});

IconMaterialBrowserUpdatedFilled.displayName = 'AmauiIconMaterialBrowserUpdatedFilled';

export default IconMaterialBrowserUpdatedFilled;
