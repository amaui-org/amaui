import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrushRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrushRoundedW100Filled'
      short_name='Brush'

      {...props}
    >
      <path d="M6.5 19.2Q6.075 19.2 5.65 19.1Q5.225 19 4.85 18.8Q5.3 18.375 5.55 17.812Q5.8 17.25 5.8 16.5Q5.8 15.775 6.288 15.287Q6.775 14.8 7.5 14.8Q8.225 14.8 8.713 15.287Q9.2 15.775 9.2 16.5Q9.2 17.625 8.413 18.413Q7.625 19.2 6.5 19.2ZM11.1 14.35 9.7 12.95 17.65 5Q17.925 4.725 18.337 4.712Q18.75 4.7 19.05 5Q19.35 5.3 19.35 5.7Q19.35 6.1 19.05 6.4Z"/>
    </Icon>
  );
});

IconMaterialBrushRoundedW100Filled.displayName = 'AmauiIconMaterialBrushRoundedW100Filled';

export default IconMaterialBrushRoundedW100Filled;
