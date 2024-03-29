import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialModeHeatFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeHeatFilled'

      short_name='ModeHeat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-2.925 0-4.962-2.038Q5 17.925 5 15q0-1.65.575-2.988.575-1.337 2.225-3.037Q9.475 7.25 9.762 5.912 10.05 4.575 10 2q3.925 2.275 6.462 5.75Q19 11.225 19 15q0 2.925-2.038 4.962Q14.925 22 12 22Zm0-2q.525 0 1.025-.413.5-.412.5-1.312 0-.6-.337-1.4-.338-.8-1.188-1.925-.8 1.05-1.137 1.875-.338.825-.338 1.45 0 .875.475 1.3.475.425 1 .425Zm-3.475-1.4q-.125-1.55.775-3.15.9-1.6 1.975-2.75.15-.175.338-.25.187-.075.387-.075t.388.075q.187.075.337.25.15.15.613.687.462.538.95 1.325.487.788.862 1.776.375.987.35 2.087.7-.675 1.1-1.6.4-.925.4-1.975 0-1.525-.475-2.875T15.3 9.6q-.75-1.175-1.65-2.138-.9-.962-1.775-1.687-.325 1.65-1.137 2.762Q9.925 9.65 9.125 10.5q-1.275 1.3-1.7 2.275Q7 13.75 7 15q0 1.05.4 1.975T8.525 18.6Z"/>
    </Icon>
  );
});

IconMaterialModeHeatFilled.displayName = 'AmauiIconMaterialModeHeatFilled';

export default IconMaterialModeHeatFilled;
