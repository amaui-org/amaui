import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsWalkSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsWalkSharpW100'
      short_name='DirectionsWalk'

      {...props}
    >
      <path d="M13.5 5.1Q12.825 5.1 12.363 4.637Q11.9 4.175 11.9 3.5Q11.9 2.825 12.363 2.362Q12.825 1.9 13.5 1.9Q14.175 1.9 14.638 2.362Q15.1 2.825 15.1 3.5Q15.1 4.175 14.638 4.637Q14.175 5.1 13.5 5.1ZM7.85 22.35 10.65 7.8 7.35 9.175V12.35H6.65V8.7L11.075 6.875Q11.7 6.6 12.25 6.687Q12.8 6.775 13.15 7.35L14.125 8.925Q14.75 9.95 15.875 10.7Q17 11.45 18.35 11.6V12.3Q17.025 12.175 15.625 11.362Q14.225 10.55 13.175 8.725L12.2 13.7L14.35 15.8V22.35H13.65V16.775L10.5 13.75L8.55 22.35Z"/>
    </Icon>
  );
});

IconMaterialDirectionsWalkSharpW100.displayName = 'AmauiIconMaterialDirectionsWalkSharpW100';

export default IconMaterialDirectionsWalkSharpW100;
