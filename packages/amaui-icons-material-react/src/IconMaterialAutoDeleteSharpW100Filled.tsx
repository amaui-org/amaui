import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutoDeleteSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoDeleteSharpW100Filled'
      short_name='AutoDelete'

      {...props}
    >
      <path d="M9 4.6H15V5.3H18.7V6H17.7V10.225Q17.55 10.2 17.35 10.2Q17.15 10.2 17 10.2Q16.325 10.2 15.537 10.375Q14.75 10.55 14.15 10.825V8H13.45V11.2Q12.5 11.775 11.7 12.787Q10.9 13.8 10.55 14.85V8H9.85V17H10.2Q10.2 17.65 10.35 18.387Q10.5 19.125 10.75 19.7H6.3V6H5.3V5.3H9ZM17 12.2Q19 12.2 20.4 13.6Q21.8 15 21.8 17Q21.8 19 20.4 20.4Q19 21.8 17 21.8Q15 21.8 13.6 20.4Q12.2 19 12.2 17Q12.2 15 13.6 13.6Q15 12.2 17 12.2ZM16.65 14.15V17.15L18.65 19.15L19.15 18.65L17.35 16.85V14.15Z"/>
    </Icon>
  );
});

IconMaterialAutoDeleteSharpW100Filled.displayName = 'AmauiIconMaterialAutoDeleteSharpW100Filled';

export default IconMaterialAutoDeleteSharpW100Filled;
