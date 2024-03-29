import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLaundryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaundryFilled'

      short_name='Laundry'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 13.975v-3L4.125 12l-3-5.2 6.6-3.8H9q.4 1.2.95 2.1.55.9 2.05.9 1.5 0 2.05-.9.55-.9.95-2.1h1.275l6.575 3.825L19.875 12 18 10.975v4.8l-1.575 1.375q-.175.15-.4.238-.225.087-.45.087-.15 0-.35-.1-.2-.1-.4-.25l-2.65-2.275q-.8-.7-1.8-1.025-1-.325-2.025-.325-.6 0-1.188.113-.587.112-1.162.362Zm-1.35 5.4-1.3-1.525L5.525 16q.575-.5 1.313-.762.737-.263 1.537-.263.8 0 1.525.263.725.262 1.3.762l2.9 2.475q.3.25.712.388.413.137.838.137.45 0 .838-.125.387-.125.687-.4L19.35 16.6l1.3 1.55L18.475 20q-.575.5-1.3.75-.725.25-1.525.25-.8 0-1.537-.25-.738-.25-1.313-.75l-2.9-2.475q-.3-.25-.687-.388Q8.825 17 8.375 17q-.425 0-.838.137-.412.138-.712.388Z"/>
    </Icon>
  );
});

IconMaterialLaundryFilled.displayName = 'AmauiIconMaterialLaundryFilled';

export default IconMaterialLaundryFilled;
