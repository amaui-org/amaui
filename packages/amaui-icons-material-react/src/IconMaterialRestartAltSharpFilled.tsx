import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRestartAltSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestartAltSharpFilled'
      short_name='RestartAlt'

      {...props}
    >
      <path d="M11 20.95Q7.975 20.575 5.988 18.312Q4 16.05 4 13Q4 11.35 4.65 9.837Q5.3 8.325 6.5 7.2L7.925 8.625Q6.975 9.475 6.488 10.6Q6 11.725 6 13Q6 15.2 7.4 16.887Q8.8 18.575 11 18.95ZM13 20.95V18.95Q15.175 18.55 16.587 16.875Q18 15.2 18 13Q18 10.5 16.25 8.75Q14.5 7 12 7H11.925L13.025 8.1L11.625 9.5L8.125 6L11.625 2.5L13.025 3.9L11.925 5H12Q15.35 5 17.675 7.325Q20 9.65 20 13Q20 16.025 18.013 18.288Q16.025 20.55 13 20.95Z"/>
    </Icon>
  );
});

IconMaterialRestartAltSharpFilled.displayName = 'AmauiIconMaterialRestartAltSharpFilled';

export default IconMaterialRestartAltSharpFilled;
