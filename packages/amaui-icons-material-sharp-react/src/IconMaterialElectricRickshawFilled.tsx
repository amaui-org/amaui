import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialElectricRickshawFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricRickshawFilled'

      short_name='ElectricRickshaw'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 17q-.975 0-1.737-.562Q3.5 15.875 3.2 15H1V3h15.025L21 9v2.15q.875.3 1.438 1.087Q23 13.025 23 14q0 1.25-.875 2.125T20 17q-.975 0-1.762-.562-.788-.563-1.088-1.438h-8.3q-.35.875-1.112 1.438Q6.975 17 6 17ZM3 9h4V5H3Zm6 4h5V5H9v4h3v2H9Zm7-4h2.4L16 6.1ZM6 15q.425 0 .713-.288Q7 14.425 7 14t-.287-.713Q6.425 13 6 13t-.713.287Q5 13.575 5 14t.287.712Q5.575 15 6 15Zm14 0q.425 0 .712-.288Q21 14.425 21 14t-.288-.713Q20.425 13 20 13t-.712.287Q19 13.575 19 14t.288.712Q19.575 15 20 15Zm-7 8-6-3h4v-2l6 3h-4Z"/>
    </Icon>
  );
});

IconMaterialElectricRickshawFilled.displayName = 'AmauiIconMaterialElectricRickshawFilled';

export default IconMaterialElectricRickshawFilled;
