import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBeachAccessSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BeachAccessSharpFilled'
      short_name='BeachAccess'

      {...props}
    >
      <path d="M19.6 21 13.25 14.65 14.65 13.25 21 19.6ZM5.95 20.3Q3.45 17.85 3.013 14.55Q2.575 11.25 4.15 8.375Q4.225 9.225 4.575 10.287Q4.925 11.35 5.538 12.525Q6.15 13.7 7 14.938Q7.85 16.175 8.875 17.375ZM10.25 16Q9.05 14.8 8.15 13.387Q7.25 11.975 6.738 10.65Q6.225 9.325 6.163 8.237Q6.1 7.15 6.625 6.625Q7.15 6.075 8.238 6.125Q9.325 6.175 10.663 6.688Q12 7.2 13.413 8.112Q14.825 9.025 16.025 10.225ZM17.4 8.85Q16.225 7.825 14.988 7Q13.75 6.175 12.588 5.55Q11.425 4.925 10.363 4.562Q9.3 4.2 8.45 4.125Q11.325 2.625 14.613 3.087Q17.9 3.55 20.3 5.95Z"/>
    </Icon>
  );
});

IconMaterialBeachAccessSharpFilled.displayName = 'AmauiIconMaterialBeachAccessSharpFilled';

export default IconMaterialBeachAccessSharpFilled;
