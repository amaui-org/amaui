import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutoDeleteSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoDeleteSharpFilled'
      short_name='AutoDelete'

      {...props}
    >
      <path d="M9 3H15V4H20V6H19V10.3Q18.575 10.175 18.012 10.087Q17.45 10 17 10Q16.55 10 15.988 10.075Q15.425 10.15 15 10.275V8H13V11.25Q12.45 11.65 11.9 12.237Q11.35 12.825 11 13.4V8H9V17H10Q10 17.975 10.35 19.087Q10.7 20.2 11.25 21H5V6H4V4H9ZM17 12Q19.075 12 20.538 13.462Q22 14.925 22 17Q22 19.075 20.538 20.538Q19.075 22 17 22Q14.925 22 13.463 20.538Q12 19.075 12 17Q12 14.925 13.463 13.462Q14.925 12 17 12ZM16.5 14V17.2L18.65 19.35L19.35 18.65L17.5 16.8V14Z"/>
    </Icon>
  );
});

IconMaterialAutoDeleteSharpFilled.displayName = 'AmauiIconMaterialAutoDeleteSharpFilled';

export default IconMaterialAutoDeleteSharpFilled;
