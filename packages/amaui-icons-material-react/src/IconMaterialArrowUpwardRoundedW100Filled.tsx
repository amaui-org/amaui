import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowUpwardRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowUpwardRoundedW100Filled'
      short_name='ArrowUpward'

      {...props}
    >
      <path d="M12 19Q11.85 19 11.75 18.9Q11.65 18.8 11.65 18.65V6.35L5.75 12.25Q5.625 12.375 5.5 12.375Q5.375 12.375 5.25 12.25Q5.125 12.125 5.125 12Q5.125 11.875 5.25 11.75L11.475 5.525Q11.6 5.4 11.738 5.35Q11.875 5.3 12 5.3Q12.15 5.3 12.275 5.35Q12.4 5.4 12.525 5.525L18.75 11.75Q18.875 11.875 18.875 12Q18.875 12.125 18.75 12.25Q18.625 12.375 18.5 12.375Q18.375 12.375 18.25 12.25L12.35 6.35V18.65Q12.35 18.8 12.25 18.9Q12.15 19 12 19Z"/>
    </Icon>
  );
});

IconMaterialArrowUpwardRoundedW100Filled.displayName = 'AmauiIconMaterialArrowUpwardRoundedW100Filled';

export default IconMaterialArrowUpwardRoundedW100Filled;
