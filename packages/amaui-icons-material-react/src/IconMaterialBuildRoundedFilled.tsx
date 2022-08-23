import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBuildRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BuildRoundedFilled'
      short_name='Build'

      {...props}
    >
      <path d="M17.875 20.375Q17.375 20.375 16.925 20.188Q16.475 20 16.1 19.625L11.1 14.6Q10.6 14.8 10.088 14.9Q9.575 15 9 15Q6.5 15 4.75 13.25Q3 11.5 3 9Q3 8.1 3.25 7.287Q3.5 6.475 3.95 5.75L7.6 9.4L9.4 7.6L5.75 3.95Q6.475 3.5 7.287 3.25Q8.1 3 9 3Q11.5 3 13.25 4.75Q15 6.5 15 9Q15 9.575 14.9 10.087Q14.8 10.6 14.6 11.1L19.65 16.1Q20.025 16.475 20.213 16.925Q20.4 17.375 20.4 17.875Q20.4 18.375 20.2 18.837Q20 19.3 19.65 19.65Q19.275 20.025 18.825 20.2Q18.375 20.375 17.875 20.375Z"/>
    </Icon>
  );
});

IconMaterialBuildRoundedFilled.displayName = 'AmauiIconMaterialBuildRoundedFilled';

export default IconMaterialBuildRoundedFilled;
