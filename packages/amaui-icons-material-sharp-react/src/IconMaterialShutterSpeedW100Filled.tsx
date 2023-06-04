import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShutterSpeedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShutterSpeedW100Filled'

      short_name='ShutterSpeed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 3v-.7h6V3Zm3 17.7q-1.6 0-3-.6t-2.45-1.65Q5.5 17.4 4.9 16q-.6-1.4-.6-3t.6-3q.6-1.4 1.65-2.45Q7.6 6.5 9 5.9q1.4-.6 3-.6 1.575 0 2.825.525 1.25.525 2.375 1.475L18.5 6l.5.5-1.3 1.3q.95 1.125 1.475 2.375.525 1.25.525 2.825 0 1.6-.612 3-.613 1.4-1.663 2.45-1.05 1.05-2.45 1.65-1.4.6-2.975.6Zm0-.7q2.925 0 4.962-2.038Q19 15.925 19 13t-2.038-4.963Q14.925 6 12 6T7.038 8.037Q5 10.075 5 13q0 2.925 2.038 4.962Q9.075 20 12 20Zm-.2-8.7h6.275q-.425-1.5-1.387-2.562-.963-1.063-2.438-1.638Zm-1.4 1 3.175-5.4q-1.6-.4-3.037-.038Q9.1 7.225 8 8.125ZM5.775 14h4.775L7.475 8.6Q6.5 9.65 6.013 11.075 5.525 12.5 5.775 14Zm3.975 4.875 2.4-4.175H5.925q.35 1.375 1.387 2.512Q8.35 18.35 9.75 18.875Zm.7.225q1.9.475 3.325-.05Q15.2 18.525 16 17.875l-2.45-4.225Zm6.075-1.7q.625-.575 1.338-2.075.712-1.5.362-3.325H13.4Z"/>
    </Icon>
  );
});

IconMaterialShutterSpeedW100Filled.displayName = 'AmauiIconMaterialShutterSpeedW100Filled';

export default IconMaterialShutterSpeedW100Filled;
