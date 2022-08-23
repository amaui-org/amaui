import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTaskAltSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TaskAltSharpW100Filled'
      short_name='TaskAlt'

      {...props}
    >
      <path d="M12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 10.2 3.987 8.612Q4.675 7.025 5.85 5.85Q7.025 4.675 8.613 3.987Q10.2 3.3 12 3.3Q13.5 3.3 14.85 3.775Q16.2 4.25 17.3 5.1L16.8 5.625Q15.8 4.85 14.575 4.425Q13.35 4 12 4Q8.675 4 6.338 6.337Q4 8.675 4 12Q4 15.325 6.338 17.663Q8.675 20 12 20Q15.325 20 17.663 17.663Q20 15.325 20 12Q20 11.35 19.9 10.725Q19.8 10.1 19.6 9.525L20.15 8.95Q20.425 9.675 20.562 10.438Q20.7 11.2 20.7 12Q20.7 13.8 20.013 15.387Q19.325 16.975 18.15 18.15Q16.975 19.325 15.388 20.012Q13.8 20.7 12 20.7ZM10.55 15.7 7.2 12.35 7.7 11.85 10.55 14.7 20.2 5.05 20.7 5.55Z"/>
    </Icon>
  );
});

IconMaterialTaskAltSharpW100Filled.displayName = 'AmauiIconMaterialTaskAltSharpW100Filled';

export default IconMaterialTaskAltSharpW100Filled;
