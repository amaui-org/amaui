import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFastfoodSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastfoodSharpW100Filled'
      short_name='Fastfood'

      {...props}
    >
      <path d="M2.875 21.7V21H15.575V21.7ZM2.875 15.5Q2.875 14.825 3.288 14.162Q3.7 13.5 4.513 12.975Q5.325 12.45 6.513 12.125Q7.7 11.8 9.225 11.8Q10.775 11.8 11.95 12.125Q13.125 12.45 13.938 12.975Q14.75 13.5 15.163 14.162Q15.575 14.825 15.575 15.5ZM2.875 18.6V17.9H15.575V18.6ZM17.575 21.7V15.5Q17.575 13.5 16.012 12.012Q14.45 10.525 11.9 10.025L11.425 6.8H15.925V2.8H16.625V6.8H21.125L19.6 21.7Z"/>
    </Icon>
  );
});

IconMaterialFastfoodSharpW100Filled.displayName = 'AmauiIconMaterialFastfoodSharpW100Filled';

export default IconMaterialFastfoodSharpW100Filled;
