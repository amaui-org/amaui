import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAttributionRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttributionRoundedW100Filled'
      short_name='Attribution'

      {...props}
    >
      <path d="M12 17.8Q12.35 17.8 12.6 17.55Q12.85 17.3 12.85 16.95V13.8H13.7Q13.875 13.8 13.988 13.688Q14.1 13.575 14.1 13.4V10.1Q14.1 9.65 13.675 9.375Q13.25 9.1 12 9.1Q10.75 9.1 10.325 9.375Q9.9 9.65 9.9 10.1V13.4Q9.9 13.575 10.012 13.688Q10.125 13.8 10.3 13.8H11.15V16.95Q11.15 17.3 11.4 17.55Q11.65 17.8 12 17.8ZM12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 10.2 3.987 8.612Q4.675 7.025 5.85 5.85Q7.025 4.675 8.613 3.987Q10.2 3.3 12 3.3Q13.8 3.3 15.388 3.987Q16.975 4.675 18.15 5.85Q19.325 7.025 20.013 8.612Q20.7 10.2 20.7 12Q20.7 13.8 20.013 15.387Q19.325 16.975 18.15 18.15Q16.975 19.325 15.388 20.012Q13.8 20.7 12 20.7ZM12 8.4Q12.45 8.4 12.775 8.075Q13.1 7.75 13.1 7.3Q13.1 6.85 12.775 6.525Q12.45 6.2 12 6.2Q11.55 6.2 11.225 6.525Q10.9 6.85 10.9 7.3Q10.9 7.75 11.225 8.075Q11.55 8.4 12 8.4Z"/>
    </Icon>
  );
});

IconMaterialAttributionRoundedW100Filled.displayName = 'AmauiIconMaterialAttributionRoundedW100Filled';

export default IconMaterialAttributionRoundedW100Filled;
