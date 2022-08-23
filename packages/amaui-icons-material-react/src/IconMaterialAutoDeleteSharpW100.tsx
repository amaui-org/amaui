import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutoDeleteSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoDeleteSharpW100'
      short_name='AutoDelete'

      {...props}
    >
      <path d="M7 6V10.2Q7 10.2 7 12.188Q7 14.175 7 17Q7 17.525 7 18.025Q7 18.525 7 19ZM10.75 19.7H6.3V6H5.3V5.3H9V4.6H15V5.3H18.7V6H17.7V10.225Q17.55 10.2 17.35 10.2Q17.15 10.2 17 10.2V6H7V19H10.5Q10.55 19.2 10.625 19.387Q10.7 19.575 10.75 19.7ZM9.85 17H10.2Q10.2 16.1 10.375 15.463Q10.55 14.825 10.55 14.825V8H9.85ZM13.45 11.2Q13.6 11.1 13.788 11Q13.975 10.9 14.15 10.825V8H13.45ZM17 21.8Q15 21.8 13.6 20.4Q12.2 19 12.2 17Q12.2 15 13.6 13.6Q15 12.2 17 12.2Q19 12.2 20.4 13.6Q21.8 15 21.8 17Q21.8 19 20.4 20.4Q19 21.8 17 21.8ZM18.65 19.15 19.15 18.65 17.35 16.85V14.15H16.65V17.15Z"/>
    </Icon>
  );
});

IconMaterialAutoDeleteSharpW100.displayName = 'AmauiIconMaterialAutoDeleteSharpW100';

export default IconMaterialAutoDeleteSharpW100;
