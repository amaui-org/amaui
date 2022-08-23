import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLightSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightSharp'
      short_name='Light'

      {...props}
    >
      <path d="M12 21Q10.35 21 9.175 19.825Q8 18.65 8 17H3.225Q3.125 16.6 3.062 16.087Q3 15.575 3 15Q3.05 11.5 5.325 8.963Q7.6 6.425 11 6.05V3H13V6.05Q16.4 6.425 18.675 8.963Q20.95 11.5 21 15Q21 15.575 20.938 16.087Q20.875 16.6 20.775 17H16Q16 18.65 14.825 19.825Q13.65 21 12 21ZM5 15H19Q19 12.1 16.95 10.05Q14.9 8 12 8Q9.1 8 7.05 10.05Q5 12.1 5 15ZM12 19Q12.825 19 13.413 18.413Q14 17.825 14 17H10Q10 17.825 10.588 18.413Q11.175 19 12 19ZM12 17Q12 17 12 17Q12 17 12 17Q12 17 12 17Q12 17 12 17Z"/>
    </Icon>
  );
});

IconMaterialLightSharp.displayName = 'AmauiIconMaterialLightSharp';

export default IconMaterialLightSharp;
