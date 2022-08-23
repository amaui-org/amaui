import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLightbulbSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightbulbSharpW100Filled'
      short_name='Lightbulb'

      {...props}
    >
      <path d="M12 20.9Q11.35 20.9 10.863 20.475Q10.375 20.05 10.25 19.4H13.75Q13.625 20.05 13.137 20.475Q12.65 20.9 12 20.9ZM8.65 17.4V16.7H15.35V17.4ZM8.65 14.7Q7.325 13.8 6.562 12.462Q5.8 11.125 5.8 9.5Q5.8 6.9 7.6 5.1Q9.4 3.3 12 3.3Q14.6 3.3 16.4 5.1Q18.2 6.9 18.2 9.5Q18.2 11.125 17.438 12.462Q16.675 13.8 15.35 14.7Z"/>
    </Icon>
  );
});

IconMaterialLightbulbSharpW100Filled.displayName = 'AmauiIconMaterialLightbulbSharpW100Filled';

export default IconMaterialLightbulbSharpW100Filled;
