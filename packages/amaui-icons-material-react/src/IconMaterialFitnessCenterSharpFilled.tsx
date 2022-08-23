import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFitnessCenterSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitnessCenterSharpFilled'
      short_name='FitnessCenter'

      {...props}
    >
      <path d="M13.4 21.9 12 20.5 15.55 16.95 7.05 8.45 3.5 12 2.1 10.6 3.5 9.15 2.1 7.75 4.2 5.65 2.8 4.2 4.2 2.8 5.65 4.2 7.75 2.1 9.15 3.5 10.6 2.1 12 3.5 8.45 7.05 16.95 15.55 20.5 12 21.9 13.4 20.5 14.85 21.9 16.25 19.8 18.35 21.2 19.8 19.8 21.2 18.35 19.8 16.25 21.9 14.85 20.5Z"/>
    </Icon>
  );
});

IconMaterialFitnessCenterSharpFilled.displayName = 'AmauiIconMaterialFitnessCenterSharpFilled';

export default IconMaterialFitnessCenterSharpFilled;
