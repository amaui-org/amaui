import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUpdateSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpdateSharpW100'
      short_name='Update'

      {...props}
    >
      <path d="M15.275 15.75 11.675 12.15V7H12.375V11.85L15.775 15.25ZM12.025 19.7Q10.425 19.7 9.025 19.1Q7.625 18.5 6.575 17.45Q5.525 16.4 4.925 15Q4.325 13.6 4.325 12Q4.325 10.4 4.925 9Q5.525 7.6 6.575 6.55Q7.625 5.5 9.025 4.9Q10.425 4.3 12.025 4.3Q13.65 4.3 15.125 4.962Q16.6 5.625 17.725 6.8V4.4H18.425V8H14.825V7.3H17.225Q16.175 6.225 14.85 5.612Q13.525 5 12.025 5Q9.1 5 7.062 7.037Q5.025 9.075 5.025 12Q5.025 14.925 7.062 16.962Q9.1 19 12.025 19Q14.65 19 16.588 17.288Q18.525 15.575 18.95 13H19.65Q19.3 15.9 17.125 17.8Q14.95 19.7 12.025 19.7Z"/>
    </Icon>
  );
});

IconMaterialUpdateSharpW100.displayName = 'AmauiIconMaterialUpdateSharpW100';

export default IconMaterialUpdateSharpW100;
