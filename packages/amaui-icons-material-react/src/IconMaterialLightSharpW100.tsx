import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLightSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightSharpW100'
      short_name='Light'

      {...props}
    >
      <path d="M12 18.5Q10.825 18.5 10.013 17.688Q9.2 16.875 9.2 15.7H4.35Q4.325 15.55 4.312 15.375Q4.3 15.2 4.3 15Q4.3 11.975 6.425 9.7Q8.55 7.425 11.65 7.3V4.8H12.35V7.3Q15.45 7.425 17.575 9.7Q19.7 11.975 19.7 15Q19.7 15.2 19.688 15.375Q19.675 15.55 19.65 15.7H14.8Q14.8 16.875 13.988 17.688Q13.175 18.5 12 18.5ZM5 15H19Q19 12.1 16.95 10.05Q14.9 8 12 8Q9.1 8 7.05 10.05Q5 12.1 5 15ZM12 17.8Q12.875 17.8 13.488 17.188Q14.1 16.575 14.1 15.7H9.9Q9.9 16.575 10.512 17.188Q11.125 17.8 12 17.8ZM12 15.7Q12 15.7 12 15.7Q12 15.7 12 15.7Q12 15.7 12 15.7Q12 15.7 12 15.7Z"/>
    </Icon>
  );
});

IconMaterialLightSharpW100.displayName = 'AmauiIconMaterialLightSharpW100';

export default IconMaterialLightSharpW100;
