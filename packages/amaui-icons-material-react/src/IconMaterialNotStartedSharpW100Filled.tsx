import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNotStartedSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotStartedSharpW100Filled'
      short_name='NotStarted'

      {...props}
    >
      <path d="M12.15 14.775 16.325 12 12.15 9.225ZM9.15 14.775H9.85V9.225H9.15ZM12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 10.2 3.987 8.612Q4.675 7.025 5.85 5.85Q7.025 4.675 8.613 3.987Q10.2 3.3 12 3.3Q13.8 3.3 15.388 3.987Q16.975 4.675 18.15 5.85Q19.325 7.025 20.013 8.612Q20.7 10.2 20.7 12Q20.7 13.8 20.013 15.387Q19.325 16.975 18.15 18.15Q16.975 19.325 15.388 20.012Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialNotStartedSharpW100Filled.displayName = 'AmauiIconMaterialNotStartedSharpW100Filled';

export default IconMaterialNotStartedSharpW100Filled;
