import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLightbulbSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightbulbSharp'
      short_name='Lightbulb'

      {...props}
    >
      <path d="M12 22Q11.175 22 10.588 21.413Q10 20.825 10 20H14Q14 20.825 13.413 21.413Q12.825 22 12 22ZM8 19V17H16V19ZM8.25 16Q6.525 14.975 5.513 13.25Q4.5 11.525 4.5 9.5Q4.5 6.375 6.688 4.188Q8.875 2 12 2Q15.125 2 17.312 4.188Q19.5 6.375 19.5 9.5Q19.5 11.525 18.488 13.25Q17.475 14.975 15.75 16ZM8.85 14H15.15Q16.275 13.2 16.888 12.025Q17.5 10.85 17.5 9.5Q17.5 7.2 15.9 5.6Q14.3 4 12 4Q9.7 4 8.1 5.6Q6.5 7.2 6.5 9.5Q6.5 10.85 7.113 12.025Q7.725 13.2 8.85 14ZM12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Z"/>
    </Icon>
  );
});

IconMaterialLightbulbSharp.displayName = 'AmauiIconMaterialLightbulbSharp';

export default IconMaterialLightbulbSharp;
