import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsHandball = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsHandball'

      short_name='SportsHandball'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 9q-.825 0-1.412-.588Q14 7.825 14 7t.588-1.412Q15.175 5 16 5t1.413.588Q18 6.175 18 7t-.587 1.412Q16.825 9 16 9ZM9.2 23.9l-1.75-1 3-5.2-1.7-1-1.5 2.6-1.75-1 5.15-8.9q-.95-.975-1.425-2.225Q8.75 5.925 8.75 4.6q0-.9.225-1.788Q9.2 1.925 9.7 1.1l1.7 1q-.35.575-.5 1.187-.15.613-.15 1.263 0 1.325.65 2.487.65 1.163 1.85 1.863l2.25 1.3q1.55.9 2.275 2.587.725 1.688.725 3.163 0 .95-.25 1.85-.25.9-.7 1.7l-1.75-1q.35-.6.5-1.225.15-.625.15-1.275 0-.8-.225-1.55t-.725-1.4ZM13.5 4q-.65 0-1.075-.45Q12 3.1 12 2.5q0-.65.45-1.075Q12.9 1 13.5 1q.65 0 1.075.45Q15 1.9 15 2.5q0 .65-.45 1.075Q14.1 4 13.5 4Z"/>
    </Icon>
  );
});

IconMaterialSportsHandball.displayName = 'AmauiIconMaterialSportsHandball';

export default IconMaterialSportsHandball;
