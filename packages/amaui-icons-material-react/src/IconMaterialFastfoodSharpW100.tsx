import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFastfoodSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastfoodSharpW100'
      short_name='Fastfood'

      {...props}
    >
      <path d="M2.875 21.7V21H15.575V21.7ZM2.875 15.5Q2.875 14.825 3.288 14.162Q3.7 13.5 4.513 12.975Q5.325 12.45 6.513 12.125Q7.7 11.8 9.25 11.8Q10.775 11.8 11.95 12.125Q13.125 12.45 13.938 12.975Q14.75 13.5 15.163 14.162Q15.575 14.825 15.575 15.5ZM2.875 18.6V17.9H15.575V18.6ZM17.575 21.7V21H18.975L20.375 7.5H11.525L11.425 6.8H15.925V2.8H16.625V6.8H21.125L19.6 21.7ZM17.575 21H18.975H17.575Q17.575 21 17.575 21Q17.575 21 17.575 21ZM3.7 14.8H14.75Q14.225 13.8 12.825 13.15Q11.425 12.5 9.225 12.5Q7.025 12.5 5.625 13.15Q4.225 13.8 3.7 14.8ZM3.7 14.8Q4.225 14.8 5.625 14.8Q7.025 14.8 9.225 14.8Q11.425 14.8 12.825 14.8Q14.225 14.8 14.75 14.8Z"/>
    </Icon>
  );
});

IconMaterialFastfoodSharpW100.displayName = 'AmauiIconMaterialFastfoodSharpW100';

export default IconMaterialFastfoodSharpW100;
