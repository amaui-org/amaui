import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPendingRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PendingRoundedW100Filled'
      short_name='Pending'

      {...props}
    >
      <path d="M12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 10.2 3.987 8.612Q4.675 7.025 5.85 5.85Q7.025 4.675 8.613 3.987Q10.2 3.3 12 3.3Q13.8 3.3 15.388 3.987Q16.975 4.675 18.15 5.85Q19.325 7.025 20.013 8.612Q20.7 10.2 20.7 12Q20.7 13.8 20.013 15.387Q19.325 16.975 18.15 18.15Q16.975 19.325 15.388 20.012Q13.8 20.7 12 20.7ZM7 12.85Q7.35 12.85 7.6 12.6Q7.85 12.35 7.85 12Q7.85 11.65 7.6 11.4Q7.35 11.15 7 11.15Q6.65 11.15 6.4 11.4Q6.15 11.65 6.15 12Q6.15 12.35 6.4 12.6Q6.65 12.85 7 12.85ZM12 12.85Q12.35 12.85 12.6 12.6Q12.85 12.35 12.85 12Q12.85 11.65 12.6 11.4Q12.35 11.15 12 11.15Q11.65 11.15 11.4 11.4Q11.15 11.65 11.15 12Q11.15 12.35 11.4 12.6Q11.65 12.85 12 12.85ZM17 12.85Q17.35 12.85 17.6 12.6Q17.85 12.35 17.85 12Q17.85 11.65 17.6 11.4Q17.35 11.15 17 11.15Q16.65 11.15 16.4 11.4Q16.15 11.65 16.15 12Q16.15 12.35 16.4 12.6Q16.65 12.85 17 12.85Z"/>
    </Icon>
  );
});

IconMaterialPendingRoundedW100Filled.displayName = 'AmauiIconMaterialPendingRoundedW100Filled';

export default IconMaterialPendingRoundedW100Filled;
