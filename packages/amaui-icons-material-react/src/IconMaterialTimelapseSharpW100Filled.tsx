import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTimelapseSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimelapseSharpW100Filled'
      short_name='Timelapse'

      {...props}
    >
      <path d="M8.7 16.2Q9.425 16.75 10.263 17.05Q11.1 17.35 12 17.35Q14.225 17.35 15.788 15.788Q17.35 14.225 17.35 12Q17.35 9.95 16.013 8.425Q14.675 6.9 12.65 6.7V12.25ZM12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 10.2 3.987 8.612Q4.675 7.025 5.85 5.85Q7.025 4.675 8.613 3.987Q10.2 3.3 12 3.3Q13.8 3.3 15.388 3.987Q16.975 4.675 18.15 5.85Q19.325 7.025 20.013 8.612Q20.7 10.2 20.7 12Q20.7 13.8 20.013 15.387Q19.325 16.975 18.15 18.15Q16.975 19.325 15.388 20.012Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialTimelapseSharpW100Filled.displayName = 'AmauiIconMaterialTimelapseSharpW100Filled';

export default IconMaterialTimelapseSharpW100Filled;
