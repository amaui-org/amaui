import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCopyrightSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CopyrightSharpW100Filled'
      short_name='Copyright'

      {...props}
    >
      <path d="M10 15.35H14Q14.15 15.35 14.25 15.25Q14.35 15.15 14.35 15V13.65H13.65V14.65H10.35V9.35H13.65V10.35H14.35V9Q14.35 8.85 14.25 8.75Q14.15 8.65 14 8.65H10Q9.85 8.65 9.75 8.75Q9.65 8.85 9.65 9V15Q9.65 15.15 9.75 15.25Q9.85 15.35 10 15.35ZM12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 10.2 3.987 8.612Q4.675 7.025 5.85 5.85Q7.025 4.675 8.613 3.987Q10.2 3.3 12 3.3Q13.8 3.3 15.388 3.987Q16.975 4.675 18.15 5.85Q19.325 7.025 20.013 8.612Q20.7 10.2 20.7 12Q20.7 13.8 20.013 15.387Q19.325 16.975 18.15 18.15Q16.975 19.325 15.388 20.012Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialCopyrightSharpW100Filled.displayName = 'AmauiIconMaterialCopyrightSharpW100Filled';

export default IconMaterialCopyrightSharpW100Filled;
