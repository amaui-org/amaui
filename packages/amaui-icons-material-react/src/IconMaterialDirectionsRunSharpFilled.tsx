import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsRunSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsRunSharpFilled'
      short_name='DirectionsRun'

      {...props}
    >
      <path d="M13.5 5.5Q12.675 5.5 12.088 4.912Q11.5 4.325 11.5 3.5Q11.5 2.675 12.088 2.087Q12.675 1.5 13.5 1.5Q14.325 1.5 14.913 2.087Q15.5 2.675 15.5 3.5Q15.5 4.325 14.913 4.912Q14.325 5.5 13.5 5.5ZM13 23V17L10.9 15L9.9 19.4L3 18L3.4 16L8.2 17L9.8 8.9L8 9.6V13H6V8.3L9.95 6.6Q10.825 6.225 11.238 6.112Q11.65 6 12 6Q12.525 6 12.975 6.275Q13.425 6.55 13.7 7L14.7 8.6Q15.35 9.65 16.462 10.325Q17.575 11 19 11V13Q17.35 13 15.913 12.312Q14.475 11.625 13.5 10.5L12.9 13.5L15 15.5V23Z"/>
    </Icon>
  );
});

IconMaterialDirectionsRunSharpFilled.displayName = 'AmauiIconMaterialDirectionsRunSharpFilled';

export default IconMaterialDirectionsRunSharpFilled;
