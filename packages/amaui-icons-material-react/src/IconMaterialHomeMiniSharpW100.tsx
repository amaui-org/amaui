import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeMiniSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeMiniSharpW100'
      short_name='HomeMini'

      {...props}
    >
      <path d="M9 17.7Q6.625 17.7 4.963 16.038Q3.3 14.375 3.3 12Q3.3 11.225 3.7 10.238Q4.1 9.25 5.1 8.375Q6.1 7.5 7.775 6.9Q9.45 6.3 12 6.3Q14.55 6.3 16.225 6.9Q17.9 7.5 18.9 8.375Q19.9 9.25 20.3 10.238Q20.7 11.225 20.7 12Q20.7 14.375 19.038 16.038Q17.375 17.7 15 17.7ZM9.15 17H14.85Q16.625 17 18.113 15.925Q19.6 14.85 19.95 12.7H4.05Q4.4 14.85 5.888 15.925Q7.375 17 9.15 17ZM12 12.7Q12 12.7 12 12.7Q12 12.7 12 12.7Q12 12.7 12 12.7Q12 12.7 12 12.7ZM12 12.35Q12 12.35 12 12.35Q12 12.35 12 12.35Q12 12.35 12 12.35Q12 12.35 12 12.35ZM4 12H20Q20 11.25 19.6 10.375Q19.2 9.5 18.263 8.75Q17.325 8 15.787 7.5Q14.25 7 12 7Q9.75 7 8.225 7.5Q6.7 8 5.763 8.75Q4.825 9.5 4.412 10.375Q4 11.25 4 12ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  );
});

IconMaterialHomeMiniSharpW100.displayName = 'AmauiIconMaterialHomeMiniSharpW100';

export default IconMaterialHomeMiniSharpW100;
