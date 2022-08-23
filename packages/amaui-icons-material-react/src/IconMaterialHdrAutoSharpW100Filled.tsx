import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHdrAutoSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrAutoSharpW100Filled'
      short_name='HdrAuto'

      {...props}
    >
      <path d="M7.85 16.55H8.6L9.65 13.7H14.35L15.4 16.55H16.15L12.4 6.45H11.7ZM9.9 13.05 12 7.55H12.1L14.1 13.05ZM12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 10.2 3.987 8.612Q4.675 7.025 5.85 5.85Q7.025 4.675 8.613 3.987Q10.2 3.3 12 3.3Q13.8 3.3 15.388 3.987Q16.975 4.675 18.15 5.85Q19.325 7.025 20.013 8.612Q20.7 10.2 20.7 12Q20.7 13.8 20.013 15.387Q19.325 16.975 18.15 18.15Q16.975 19.325 15.388 20.012Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialHdrAutoSharpW100Filled.displayName = 'AmauiIconMaterialHdrAutoSharpW100Filled';

export default IconMaterialHdrAutoSharpW100Filled;
