import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFirstPageRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FirstPageRoundedW100'
      short_name='FirstPage'

      {...props}
    >
      <path d="M16.75 16.85 12.425 12.525Q12.3 12.4 12.25 12.275Q12.2 12.15 12.2 12Q12.2 11.85 12.25 11.725Q12.3 11.6 12.425 11.475L16.75 7.15Q16.875 7.025 17 7.025Q17.125 7.025 17.25 7.15Q17.375 7.275 17.375 7.4Q17.375 7.525 17.25 7.65L12.9 12L17.25 16.35Q17.375 16.475 17.375 16.6Q17.375 16.725 17.25 16.85Q17.125 16.975 17 16.975Q16.875 16.975 16.75 16.85ZM7 17.35Q6.85 17.35 6.75 17.25Q6.65 17.15 6.65 17V7Q6.65 6.85 6.75 6.75Q6.85 6.65 7 6.65Q7.15 6.65 7.25 6.75Q7.35 6.85 7.35 7V17Q7.35 17.15 7.25 17.25Q7.15 17.35 7 17.35Z"/>
    </Icon>
  );
});

IconMaterialFirstPageRoundedW100.displayName = 'AmauiIconMaterialFirstPageRoundedW100';

export default IconMaterialFirstPageRoundedW100;
