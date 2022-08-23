import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpaSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaSharpW100Filled'
      short_name='Spa'

      {...props}
    >
      <path d="M12.45 20.65Q8.65 20.225 6.388 17.7Q4.125 15.175 3.85 11.05Q5.725 11.05 7.3 11.775Q8.875 12.5 10.012 13.775Q11.15 15.05 11.8 16.812Q12.45 18.575 12.45 20.65ZM13.15 20.425Q13.15 19.5 12.95 18.387Q12.75 17.275 12.325 16.15Q13.25 13.95 15.513 12.475Q17.775 11 20.15 11.05Q19.925 14.7 18.238 16.962Q16.55 19.225 13.15 20.425ZM12 15.35Q11.5 14.475 10.788 13.625Q10.075 12.775 9.35 12.2Q9.425 10.325 10.163 8.312Q10.9 6.3 12 4.95Q13.1 6.3 13.838 8.338Q14.575 10.375 14.65 12.25Q13.825 12.825 13.088 13.688Q12.35 14.55 12 15.35Z"/>
    </Icon>
  );
});

IconMaterialSpaSharpW100Filled.displayName = 'AmauiIconMaterialSpaSharpW100Filled';

export default IconMaterialSpaSharpW100Filled;
