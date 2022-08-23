import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCountertopsSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CountertopsSharpW100Filled'
      short_name='Countertops'

      {...props}
    >
      <path d="M6.7 17.3V11.55H5.1V10.85H7.85Q7.375 10.85 7.037 10.512Q6.7 10.175 6.7 9.7V6.7H10.6V9.7Q10.6 10.175 10.263 10.512Q9.925 10.85 9.45 10.85H15V8.65Q15 8.125 14.637 7.762Q14.275 7.4 13.75 7.4Q13.35 7.4 13.025 7.625Q12.7 7.85 12.575 8.2H11.85Q12 7.55 12.525 7.125Q13.05 6.7 13.75 6.7Q14.575 6.7 15.138 7.262Q15.7 7.825 15.7 8.65V10.85H18.9V11.55H17.3V17.3ZM11.65 16.6H12.35V11.55H11.65Z"/>
    </Icon>
  );
});

IconMaterialCountertopsSharpW100Filled.displayName = 'AmauiIconMaterialCountertopsSharpW100Filled';

export default IconMaterialCountertopsSharpW100Filled;
