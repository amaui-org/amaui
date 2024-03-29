import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialParaglidingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ParaglidingFilled'

      short_name='Paragliding'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17q-.825 0-1.412-.587Q10 15.825 10 15q0-.825.588-1.413Q11.175 13 12 13t1.413.587Q14 14.175 14 15q0 .825-.587 1.413Q12.825 17 12 17Zm-3 7v-3.6q-2.125-.725-3.062-2.462Q5 16.2 5 14h2q0 2.525 1.275 3.762Q9.55 19 12 19t3.725-1.238Q17 16.525 17 14h2q0 2.2-.938 3.938Q17.125 19.675 15 20.4V24ZM5 13 3 8.3q-.125.075-.425.262-.3.188-.575.188-.425 0-.712-.288Q1 8.175 1 7.75v-3.5q0-1.775 3.225-3.013Q7.45 0 12 0q4.55 0 7.775 1.237Q23 2.475 23 4.25v3.5q0 .425-.288.712-.287.288-.712.288-.275 0-.575-.188-.3-.187-.425-.262L19 13h-2l-1.5-6.275q-.825-.125-1.7-.175-.875-.05-1.8-.05t-1.8.05q-.875.05-1.7.175L7 13Zm.875-1.75L6.9 6.975q-.7.15-1.325.325-.625.175-1.2.4Zm12.25-.025 1.5-3.525q-.575-.225-1.2-.4-.625-.175-1.325-.325Z"/>
    </Icon>
  );
});

IconMaterialParaglidingFilled.displayName = 'AmauiIconMaterialParaglidingFilled';

export default IconMaterialParaglidingFilled;
