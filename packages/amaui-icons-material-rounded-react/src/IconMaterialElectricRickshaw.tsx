import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialElectricRickshaw = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricRickshaw'

      short_name='ElectricRickshaw'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 17q-.975 0-1.737-.562Q3.5 15.875 3.2 15H3q-.825 0-1.412-.588Q1 13.825 1 13V5q0-.825.588-1.413Q2.175 3 3 3h12.05q.45 0 .85.175.4.175.7.525l3.95 4.75q.225.275.338.587Q21 9.35 21 9.7v1.45q.875.3 1.438 1.087Q23 13.025 23 14q0 1.25-.875 2.125T20 17q-.975 0-1.762-.562-.788-.563-1.088-1.438h-8.3q-.35.875-1.112 1.438Q6.975 17 6 17ZM3 8h4V5H3Zm6 5h5V5H9v3h2q.425 0 .713.287Q12 8.575 12 9t-.287.712Q11.425 10 11 10H9Zm7-4h2.4L16 6.1ZM6 15q.425 0 .713-.288Q7 14.425 7 14t-.287-.713Q6.425 13 6 13t-.713.287Q5 13.575 5 14t.287.712Q5.575 15 6 15Zm14 0q.425 0 .712-.288Q21 14.425 21 14t-.288-.713Q20.425 13 20 13t-.712.287Q19 13.575 19 14t.288.712Q19.575 15 20 15Zm-7 8-6-3h4v-2l6 3h-4ZM3 10v3h.15q.35-.875 1.113-1.438Q5.025 11 6 11q.275 0 .525.037.25.038.475.113V10Zm13 3h1.15q.225-.65.713-1.137.487-.488 1.137-.713V11h-3Zm1.15-2H16h3-1.85Zm-14-1H3h4-3.85Z"/>
    </Icon>
  );
});

IconMaterialElectricRickshaw.displayName = 'AmauiIconMaterialElectricRickshaw';

export default IconMaterialElectricRickshaw;
