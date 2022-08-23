import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialContactPageSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactPageSharpW100Filled'
      short_name='ContactPage'

      {...props}
    >
      <path d="M12 13.4Q12.575 13.4 12.963 13.012Q13.35 12.625 13.35 12.05Q13.35 11.475 12.963 11.087Q12.575 10.7 12 10.7Q11.425 10.7 11.038 11.087Q10.65 11.475 10.65 12.05Q10.65 12.625 11.038 13.012Q11.425 13.4 12 13.4ZM8.65 16.6H15.35V16.575Q15.35 16.15 15.125 15.875Q14.9 15.6 14.525 15.425Q13.95 15.175 13.312 15.037Q12.675 14.9 12 14.9Q11.325 14.9 10.688 15.037Q10.05 15.175 9.475 15.425Q9.1 15.6 8.875 15.875Q8.65 16.15 8.65 16.575ZM5.3 20.7V3.3H13.45L18.7 8.55V20.7Z"/>
    </Icon>
  );
});

IconMaterialContactPageSharpW100Filled.displayName = 'AmauiIconMaterialContactPageSharpW100Filled';

export default IconMaterialContactPageSharpW100Filled;
