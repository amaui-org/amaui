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
      <path d="M12 17q-.825 0-1.412-.587Q10 15.825 10 15q0-.825.588-1.413Q11.175 13 12 13t1.413.587Q14 14.175 14 15q0 .825-.587 1.413Q12.825 17 12 17Zm-3 7v-3.6q-1.875-.625-2.812-2.063Q5.25 16.9 5.05 15.025 5 14.6 5.3 14.3t.75-.3q.375 0 .663.262.287.263.337.688.225 2.025 1.488 3.038Q9.8 19 12 19t3.463-1.012q1.262-1.013 1.487-3.038.05-.425.338-.688.287-.262.687-.262.425 0 .725.3t.25.725q-.2 1.875-1.138 3.312Q16.875 19.775 15 20.4V24ZM5 13 3 8.3q-.125.075-.425.262-.3.188-.575.188-.425 0-.712-.288Q1 8.175 1 7.75v-3.5q0-1.775 3.225-3.013Q7.45 0 12 0q4.55 0 7.775 1.237Q23 2.475 23 4.25v3.5q0 .425-.288.712-.287.288-.712.288-.275 0-.575-.188-.3-.187-.425-.262L19 13h-2l-1.5-6.275q-.825-.125-1.7-.175-.875-.05-1.8-.05t-1.8.05q-.875.05-1.7.175L7 13Zm.875-1.75L6.9 6.975q-.7.15-1.325.325-.625.175-1.2.4Zm12.25-.025 1.5-3.525q-.575-.225-1.2-.4-.625-.175-1.325-.325Z"/>
    </Icon>
  );
});

IconMaterialParaglidingFilled.displayName = 'AmauiIconMaterialParaglidingFilled';

export default IconMaterialParaglidingFilled;
