import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeMiniSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeMiniSharp'
      short_name='HomeMini'

      {...props}
    >
      <path d="M9 19Q6.1 19 4.05 16.95Q2 14.9 2 12Q2 11.05 2.463 9.85Q2.925 8.65 4.075 7.562Q5.225 6.475 7.15 5.737Q9.075 5 12 5Q14.925 5 16.85 5.737Q18.775 6.475 19.925 7.562Q21.075 8.65 21.538 9.85Q22 11.05 22 12Q22 14.9 19.95 16.95Q17.9 19 15 19ZM9.15 17H14.85Q16.425 17 17.712 16.163Q19 15.325 19.6 14H4.4Q5 15.325 6.287 16.163Q7.575 17 9.15 17ZM12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14Q12 14 12 14ZM12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13ZM4 12H20Q20 11.25 19.6 10.375Q19.2 9.5 18.263 8.75Q17.325 8 15.787 7.5Q14.25 7 12 7Q9.75 7 8.225 7.5Q6.7 8 5.763 8.75Q4.825 9.5 4.412 10.375Q4 11.25 4 12ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  );
});

IconMaterialHomeMiniSharp.displayName = 'AmauiIconMaterialHomeMiniSharp';

export default IconMaterialHomeMiniSharp;
