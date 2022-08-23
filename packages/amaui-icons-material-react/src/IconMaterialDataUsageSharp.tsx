import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDataUsageSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataUsageSharp'
      short_name='DataUsage'

      {...props}
    >
      <path d="M21.15 16.05 18.55 14.55Q18.775 13.925 18.888 13.287Q19 12.65 19 12Q19 9.35 17.3 7.375Q15.6 5.4 13 5.05V2.05Q16.85 2.425 19.425 5.275Q22 8.125 22 12Q22 13.05 21.812 14.075Q21.625 15.1 21.15 16.05ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 8.125 4.575 5.275Q7.15 2.425 11 2.05V5.05Q8.4 5.4 6.7 7.375Q5 9.35 5 12Q5 14.925 7.038 16.962Q9.075 19 12 19Q13.6 19 15.038 18.325Q16.475 17.65 17.5 16.4L20.1 17.9Q18.675 19.85 16.55 20.925Q14.425 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialDataUsageSharp.displayName = 'AmauiIconMaterialDataUsageSharp';

export default IconMaterialDataUsageSharp;
