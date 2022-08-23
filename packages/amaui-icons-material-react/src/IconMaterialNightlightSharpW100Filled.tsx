import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNightlightSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightlightSharpW100Filled'
      short_name='Nightlight'

      {...props}
    >
      <path d="M14.65 20.7Q12.85 20.7 11.263 20.012Q9.675 19.325 8.5 18.15Q7.325 16.975 6.638 15.387Q5.95 13.8 5.95 12Q5.95 10.2 6.638 8.612Q7.325 7.025 8.5 5.85Q9.675 4.675 11.263 3.987Q12.85 3.3 14.65 3.3Q15.3 3.3 15.888 3.375Q16.475 3.45 17.05 3.65Q15.35 5.2 14.35 7.35Q13.35 9.5 13.35 12Q13.35 14.5 14.35 16.65Q15.35 18.8 17.05 20.35Q16.475 20.55 15.888 20.625Q15.3 20.7 14.65 20.7Z"/>
    </Icon>
  );
});

IconMaterialNightlightSharpW100Filled.displayName = 'AmauiIconMaterialNightlightSharpW100Filled';

export default IconMaterialNightlightSharpW100Filled;
