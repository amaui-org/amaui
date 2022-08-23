import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLastPageRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LastPageRoundedW100Filled'
      short_name='LastPage'

      {...props}
    >
      <path d="M6.75 16.85Q6.625 16.725 6.625 16.6Q6.625 16.475 6.75 16.35L11.1 12L6.75 7.65Q6.625 7.525 6.625 7.4Q6.625 7.275 6.75 7.15Q6.875 7.025 7 7.025Q7.125 7.025 7.25 7.15L11.575 11.475Q11.7 11.6 11.75 11.725Q11.8 11.85 11.8 12Q11.8 12.125 11.75 12.262Q11.7 12.4 11.575 12.525L7.25 16.85Q7.125 16.975 7 16.975Q6.875 16.975 6.75 16.85ZM17 17.35Q16.85 17.35 16.75 17.25Q16.65 17.15 16.65 17V7Q16.65 6.85 16.75 6.75Q16.85 6.65 17 6.65Q17.15 6.65 17.25 6.75Q17.35 6.85 17.35 7V17Q17.35 17.15 17.25 17.25Q17.15 17.35 17 17.35Z"/>
    </Icon>
  );
});

IconMaterialLastPageRoundedW100Filled.displayName = 'AmauiIconMaterialLastPageRoundedW100Filled';

export default IconMaterialLastPageRoundedW100Filled;
