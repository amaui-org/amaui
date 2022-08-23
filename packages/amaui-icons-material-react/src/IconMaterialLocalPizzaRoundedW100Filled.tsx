import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalPizzaRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalPizzaRoundedW100Filled'
      short_name='LocalPizza'

      {...props}
    >
      <path d="M12 18.45Q11.65 18.45 11.312 18.288Q10.975 18.125 10.75 17.775L4.15 7.9Q3.975 7.625 4.038 7.338Q4.1 7.05 4.35 6.875Q6.05 5.675 7.988 4.987Q9.925 4.3 12 4.3Q14.075 4.3 16.025 4.987Q17.975 5.675 19.675 6.875Q19.925 7.05 19.975 7.338Q20.025 7.625 19.85 7.9L13.25 17.775Q13.025 18.1 12.688 18.275Q12.35 18.45 12 18.45ZM8.65 9.25Q9 9.25 9.25 9Q9.5 8.75 9.5 8.4Q9.5 8.05 9.25 7.8Q9 7.55 8.65 7.55Q8.3 7.55 8.05 7.8Q7.8 8.05 7.8 8.4Q7.8 8.75 8.05 9Q8.3 9.25 8.65 9.25ZM12 14.35Q12.35 14.35 12.6 14.1Q12.85 13.85 12.85 13.5Q12.85 13.15 12.6 12.9Q12.35 12.65 12 12.65Q11.65 12.65 11.4 12.9Q11.15 13.15 11.15 13.5Q11.15 13.85 11.4 14.1Q11.65 14.35 12 14.35Z"/>
    </Icon>
  );
});

IconMaterialLocalPizzaRoundedW100Filled.displayName = 'AmauiIconMaterialLocalPizzaRoundedW100Filled';

export default IconMaterialLocalPizzaRoundedW100Filled;
