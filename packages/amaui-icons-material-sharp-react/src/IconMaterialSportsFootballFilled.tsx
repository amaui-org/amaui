import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsFootballFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsFootballFilled'

      short_name='SportsFootball'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.075 20.975q-1.175.125-2.837-.062-1.663-.188-2.538-.613-.35-.8-.588-2.5-.237-1.7-.112-2.9Zm2.375-.4-8.05-8.05q.425-1.875 1.238-3.413.812-1.537 1.887-2.637Q7.6 5.4 9.138 4.612q1.537-.787 3.312-1.187l8.1 8.1q-.4 1.85-1.175 3.4-.775 1.55-1.85 2.625-1.125 1.1-2.687 1.888-1.563.787-3.388 1.137ZM9.4 16 16 9.4 14.6 8 8 14.6Zm11.55-6.85-6.075-6.125q1.2-.15 2.95.05 1.75.2 2.475.625.45 1 .625 2.587.175 1.588.025 2.863Z"/>
    </Icon>
  );
});

IconMaterialSportsFootballFilled.displayName = 'AmauiIconMaterialSportsFootballFilled';

export default IconMaterialSportsFootballFilled;
