import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditLocationRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditLocationRoundedW100Filled'
      short_name='EditLocation'

      {...props}
    >
      <path d="M9.325 13Q9.4 13 9.625 12.875L13.4 9.1L12.9 8.6L9.125 12.375Q9.05 12.45 9 12.675Q9 12.825 9.088 12.912Q9.175 13 9.325 13ZM13.625 7.875 14.125 8.375 14.675 7.825Q14.75 7.75 14.75 7.662Q14.75 7.575 14.675 7.5L14.5 7.325Q14.425 7.25 14.338 7.25Q14.25 7.25 14.175 7.325ZM12 21.2Q11.85 21.2 11.725 21.163Q11.6 21.125 11.475 21.025Q8.025 17.825 6.338 15.087Q4.65 12.35 4.65 10.2Q4.65 6.75 6.875 4.7Q9.1 2.65 12 2.65Q14.9 2.65 17.125 4.7Q19.35 6.75 19.35 10.2Q19.35 12.35 17.663 15.087Q15.975 17.825 12.525 21.025Q12.425 21.125 12.288 21.163Q12.15 21.2 12 21.2Z"/>
    </Icon>
  );
});

IconMaterialEditLocationRoundedW100Filled.displayName = 'AmauiIconMaterialEditLocationRoundedW100Filled';

export default IconMaterialEditLocationRoundedW100Filled;
