import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFemaleSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FemaleSharpW100Filled'
      short_name='Female'

      {...props}
    >
      <path d="M11.65 20.35V18.35H9.65V17.65H11.65V14.35Q9.75 14.175 8.45 12.787Q7.15 11.4 7.15 9.5Q7.15 7.475 8.562 6.062Q9.975 4.65 12 4.65Q14.025 4.65 15.438 6.062Q16.85 7.475 16.85 9.5Q16.85 11.4 15.55 12.787Q14.25 14.175 12.35 14.35V17.65H14.35V18.35H12.35V20.35ZM12 13.65Q13.725 13.65 14.938 12.438Q16.15 11.225 16.15 9.5Q16.15 7.775 14.938 6.562Q13.725 5.35 12 5.35Q10.275 5.35 9.062 6.562Q7.85 7.775 7.85 9.5Q7.85 11.225 9.062 12.438Q10.275 13.65 12 13.65Z"/>
    </Icon>
  );
});

IconMaterialFemaleSharpW100Filled.displayName = 'AmauiIconMaterialFemaleSharpW100Filled';

export default IconMaterialFemaleSharpW100Filled;
