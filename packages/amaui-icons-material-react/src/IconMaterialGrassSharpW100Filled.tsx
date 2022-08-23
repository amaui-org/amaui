import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGrassSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GrassSharpW100Filled'
      short_name='Grass'

      {...props}
    >
      <path d="M4 18V17.3H8.6Q8.175 15.6 6.938 14.363Q5.7 13.125 4 12.7Q4.4 12.6 4.788 12.55Q5.175 12.5 5.6 12.5Q8.275 12.5 10.137 13.912Q12 15.325 12 18ZM12.7 18Q12.7 17.65 12.663 17.237Q12.625 16.825 12.5 16.4Q13.25 14.825 14.725 13.662Q16.2 12.5 18.4 12.5Q18.825 12.5 19.212 12.55Q19.6 12.6 20 12.7Q18.3 13.125 17.075 14.363Q15.85 15.6 15.4 17.3H20V18ZM12.3 15.675Q12.025 14.05 12.35 12.65Q12.675 11.25 13.475 10.2Q14.275 9.15 15.488 8.487Q16.7 7.825 18.175 7.725Q16.525 8.775 15.725 10.137Q14.925 11.5 14.65 12.85Q13.925 13.25 13.188 14.1Q12.45 14.95 12.3 15.675ZM11.55 14.45Q11.2 13.95 10.625 13.45Q10.05 12.95 9.45 12.675Q9.525 12.45 9.562 12.112Q9.6 11.775 9.6 11.45Q9.6 9.925 9.113 8.575Q8.625 7.225 7.75 6.1Q9.225 6.7 10.4 8.05Q11.575 9.4 12 11.45Q11.725 12.1 11.625 12.925Q11.525 13.75 11.55 14.45Z"/>
    </Icon>
  );
});

IconMaterialGrassSharpW100Filled.displayName = 'AmauiIconMaterialGrassSharpW100Filled';

export default IconMaterialGrassSharpW100Filled;
