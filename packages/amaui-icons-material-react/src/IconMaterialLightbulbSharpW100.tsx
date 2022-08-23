import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLightbulbSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightbulbSharpW100'
      short_name='Lightbulb'

      {...props}
    >
      <path d="M12 20.9Q11.35 20.9 10.863 20.475Q10.375 20.05 10.25 19.4H13.75Q13.625 20.05 13.137 20.475Q12.65 20.9 12 20.9ZM8.65 17.4V16.7H15.35V17.4ZM8.65 14.7Q7.325 13.8 6.562 12.462Q5.8 11.125 5.8 9.5Q5.8 6.9 7.6 5.1Q9.4 3.3 12 3.3Q14.6 3.3 16.4 5.1Q18.2 6.9 18.2 9.5Q18.2 11.125 17.438 12.462Q16.675 13.8 15.35 14.7ZM8.85 14H15.15Q16.275 13.2 16.888 12.025Q17.5 10.85 17.5 9.5Q17.5 7.2 15.9 5.6Q14.3 4 12 4Q9.7 4 8.1 5.6Q6.5 7.2 6.5 9.5Q6.5 10.85 7.113 12.025Q7.725 13.2 8.85 14ZM12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Z"/>
    </Icon>
  );
});

IconMaterialLightbulbSharpW100.displayName = 'AmauiIconMaterialLightbulbSharpW100';

export default IconMaterialLightbulbSharpW100;
