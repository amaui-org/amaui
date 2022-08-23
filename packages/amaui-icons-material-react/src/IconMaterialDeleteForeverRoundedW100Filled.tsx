import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeleteForeverRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteForeverRoundedW100Filled'
      short_name='DeleteForever'

      {...props}
    >
      <path d="M12 13 14.35 15.35Q14.475 15.45 14.613 15.45Q14.75 15.45 14.85 15.35Q14.975 15.225 14.975 15.087Q14.975 14.95 14.85 14.85L12.5 12.5L14.85 10.15Q14.975 10.025 14.975 9.9Q14.975 9.775 14.85 9.65Q14.725 9.525 14.6 9.525Q14.475 9.525 14.35 9.65L12 12L9.65 9.65Q9.55 9.525 9.413 9.525Q9.275 9.525 9.15 9.65Q9.05 9.75 9.05 9.887Q9.05 10.025 9.15 10.15L11.5 12.5L9.15 14.85Q9.025 14.975 9.025 15.1Q9.025 15.225 9.15 15.35Q9.275 15.475 9.4 15.475Q9.525 15.475 9.65 15.35ZM7.8 19.7Q7.15 19.7 6.725 19.275Q6.3 18.85 6.3 18.2V6H5.65Q5.5 6 5.4 5.9Q5.3 5.8 5.3 5.65Q5.3 5.5 5.4 5.4Q5.5 5.3 5.65 5.3H9Q9 5 9.225 4.8Q9.45 4.6 9.75 4.6H14.25Q14.55 4.6 14.775 4.8Q15 5 15 5.3H18.35Q18.5 5.3 18.6 5.4Q18.7 5.5 18.7 5.65Q18.7 5.8 18.6 5.9Q18.5 6 18.35 6H17.7V18.2Q17.7 18.85 17.275 19.275Q16.85 19.7 16.2 19.7Z"/>
    </Icon>
  );
});

IconMaterialDeleteForeverRoundedW100Filled.displayName = 'AmauiIconMaterialDeleteForeverRoundedW100Filled';

export default IconMaterialDeleteForeverRoundedW100Filled;
