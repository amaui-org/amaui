import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTableBarSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableBarSharpW100'
      short_name='TableBar'

      {...props}
    >
      <path d="M6.95 18.725 8.45 15.025H11.65V9.975Q8.35 9.925 6.112 9.2Q3.875 8.475 3.875 7.5Q3.875 6.45 6.225 5.737Q8.575 5.025 12 5.025Q15.425 5.025 17.775 5.737Q20.125 6.45 20.125 7.5Q20.125 8.5 17.875 9.212Q15.625 9.925 12.35 9.975V15.025H15.55L17.05 18.725H16.3L15.1 15.725H8.9L7.7 18.725ZM12 9.275Q14.775 9.275 16.938 8.75Q19.1 8.225 19.425 7.5Q19.1 6.775 16.938 6.25Q14.775 5.725 12 5.725Q9.225 5.725 7.062 6.25Q4.9 6.775 4.575 7.5Q4.9 8.225 7.062 8.75Q9.225 9.275 12 9.275ZM12 7.5Q12 7.5 12 7.5Q12 7.5 12 7.5Q12 7.5 12 7.5Q12 7.5 12 7.5Q12 7.5 12 7.5Q12 7.5 12 7.5Q12 7.5 12 7.5Q12 7.5 12 7.5Z"/>
    </Icon>
  );
});

IconMaterialTableBarSharpW100.displayName = 'AmauiIconMaterialTableBarSharpW100';

export default IconMaterialTableBarSharpW100;
