import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOfflineBoltSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OfflineBoltSharpW100Filled'
      short_name='OfflineBolt'

      {...props}
    >
      <path d="M12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 10.2 3.987 8.612Q4.675 7.025 5.85 5.85Q7.025 4.675 8.613 3.987Q10.2 3.3 12 3.3Q13.8 3.3 15.388 3.987Q16.975 4.675 18.15 5.85Q19.325 7.025 20.013 8.612Q20.7 10.2 20.7 12Q20.7 13.8 20.013 15.387Q19.325 16.975 18.15 18.15Q16.975 19.325 15.388 20.012Q13.8 20.7 12 20.7ZM12.05 16.3 14.7 11.15H12.1V7.6L9.35 12.85H12.05Z"/>
    </Icon>
  );
});

IconMaterialOfflineBoltSharpW100Filled.displayName = 'AmauiIconMaterialOfflineBoltSharpW100Filled';

export default IconMaterialOfflineBoltSharpW100Filled;
