import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrushRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrushRoundedW100'
      short_name='Brush'

      {...props}
    >
      <path d="M6.5 19.2Q6.075 19.2 5.65 19.1Q5.225 19 4.85 18.8Q5.3 18.375 5.55 17.812Q5.8 17.25 5.8 16.5Q5.8 15.775 6.288 15.287Q6.775 14.8 7.5 14.8Q8.225 14.8 8.713 15.287Q9.2 15.775 9.2 16.5Q9.2 17.625 8.413 18.413Q7.625 19.2 6.5 19.2ZM6.5 18.5Q7.325 18.5 7.912 17.913Q8.5 17.325 8.5 16.5Q8.5 16.075 8.213 15.787Q7.925 15.5 7.5 15.5Q7.075 15.5 6.787 15.787Q6.5 16.075 6.5 16.5Q6.5 17.075 6.363 17.55Q6.225 18.025 6 18.45Q6.125 18.5 6.25 18.5Q6.375 18.5 6.5 18.5ZM11.1 14.35 9.7 12.95 17.65 5Q17.925 4.725 18.337 4.712Q18.75 4.7 19.05 5Q19.35 5.3 19.35 5.7Q19.35 6.1 19.05 6.4ZM7.5 16.5Q7.5 16.5 7.5 16.5Q7.5 16.5 7.5 16.5Q7.5 16.5 7.5 16.5Q7.5 16.5 7.5 16.5Q7.5 16.5 7.5 16.5Q7.5 16.5 7.5 16.5Q7.5 16.5 7.5 16.5Q7.5 16.5 7.5 16.5Q7.5 16.5 7.5 16.5Q7.5 16.5 7.5 16.5Z"/>
    </Icon>
  );
});

IconMaterialBrushRoundedW100.displayName = 'AmauiIconMaterialBrushRoundedW100';

export default IconMaterialBrushRoundedW100;
