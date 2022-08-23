import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLightbulbRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightbulbRoundedW100Filled'
      short_name='Lightbulb'

      {...props}
    >
      <path d="M12 20.9Q11.35 20.9 10.863 20.475Q10.375 20.05 10.25 19.4H13.75Q13.625 20.05 13.137 20.475Q12.65 20.9 12 20.9ZM9 17.4Q8.85 17.4 8.75 17.3Q8.65 17.2 8.65 17.05Q8.65 16.9 8.75 16.8Q8.85 16.7 9 16.7H15Q15.15 16.7 15.25 16.8Q15.35 16.9 15.35 17.05Q15.35 17.2 15.25 17.3Q15.15 17.4 15 17.4ZM8.65 14.7Q7.325 13.8 6.562 12.462Q5.8 11.125 5.8 9.5Q5.8 6.9 7.6 5.1Q9.4 3.3 12 3.3Q14.6 3.3 16.4 5.1Q18.2 6.9 18.2 9.5Q18.2 11.125 17.438 12.462Q16.675 13.8 15.35 14.7Z"/>
    </Icon>
  );
});

IconMaterialLightbulbRoundedW100Filled.displayName = 'AmauiIconMaterialLightbulbRoundedW100Filled';

export default IconMaterialLightbulbRoundedW100Filled;
