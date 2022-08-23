import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFitnessCenterSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitnessCenterSharpW100'
      short_name='FitnessCenter'

      {...props}
    >
      <path d="M13.65 21.25 12.9 20.5 16.45 16.95 7.05 7.55 3.5 11.1 2.75 10.35 4.2 8.9 3.45 8.15 5.55 6.05 4.15 4.65 4.65 4.15 6.05 5.55 8.15 3.45 8.9 4.2 10.35 2.75 11.1 3.5 7.55 7.05 16.95 16.45 20.5 12.9 21.25 13.65 19.8 15.1 20.55 15.85 18.45 17.95 19.85 19.35 19.35 19.85 17.95 18.45 15.85 20.55 15.1 19.8Z"/>
    </Icon>
  );
});

IconMaterialFitnessCenterSharpW100.displayName = 'AmauiIconMaterialFitnessCenterSharpW100';

export default IconMaterialFitnessCenterSharpW100;
