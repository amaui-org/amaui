import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialModeHeatOffSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeHeatOffSharpW100Filled'
      short_name='ModeHeatOff'

      {...props}
    >
      <path d="m17.75 14.9-.725-.725q-.25-2.775-1.862-4.863-1.613-2.087-3.738-3.937-.05.7-.237 1.375-.188.675-.438 1.15l-.5-.5q.275-.65.4-1.413.125-.762.125-1.987Q14.25 6.6 16 9.262q1.75 2.663 1.75 5.438v.2Zm3.55 6.3-4.075-4.075q-.625 1.325-1.987 2.325-1.363 1-3.238 1-2.4 0-4.075-1.675Q6.25 17.1 6.25 14.7q0-1.675.675-2.825.675-1.15 2.25-2.8L2.2 2.1l.5-.5 19.1 19.1ZM9.875 19.3q-.775-1.2-.262-2.887.512-1.688 2.762-4.138l-2.7-2.7Q8.25 10.975 7.6 12.1q-.65 1.125-.65 2.6 0 1.5.825 2.75t2.1 1.85Zm2.125.45q.8 0 1.363-.562.562-.563.562-1.538 0-.65-.45-1.612-.45-.963-1.475-2.263-1.025 1.35-1.45 2.287-.425.938-.425 1.588 0 .95.538 1.525.537.575 1.337.575Z"/>
    </Icon>
  );
});

IconMaterialModeHeatOffSharpW100Filled.displayName = 'AmauiIconMaterialModeHeatOffSharpW100Filled';

export default IconMaterialModeHeatOffSharpW100Filled;
