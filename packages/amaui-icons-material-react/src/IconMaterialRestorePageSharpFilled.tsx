import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRestorePageSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestorePageSharpFilled'
      short_name='RestorePage'

      {...props}
    >
      <path d="M4 22V2H14L20 8V22ZM12 17.75Q13.95 17.75 15.35 16.35Q16.75 14.95 16.75 13Q16.75 11.05 15.35 9.65Q13.95 8.25 12 8.25Q11.05 8.25 10.225 8.6Q9.4 8.95 8.75 9.55V8H7.25V12.25H11.5V10.75H9.7Q10.125 10.3 10.725 10.025Q11.325 9.75 12 9.75Q13.35 9.75 14.3 10.7Q15.25 11.65 15.25 13Q15.25 14.35 14.3 15.3Q13.35 16.25 12 16.25Q10.9 16.25 10.075 15.613Q9.25 14.975 8.9 14H7.35Q7.7 15.625 8.988 16.688Q10.275 17.75 12 17.75Z"/>
    </Icon>
  );
});

IconMaterialRestorePageSharpFilled.displayName = 'AmauiIconMaterialRestorePageSharpFilled';

export default IconMaterialRestorePageSharpFilled;
