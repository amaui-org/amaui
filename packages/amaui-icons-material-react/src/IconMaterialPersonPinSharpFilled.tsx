import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPersonPinSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonPinSharpFilled'
      short_name='PersonPin'

      {...props}
    >
      <path d="M12 23 9 20H3V2H21V20H15ZM12 12Q13.45 12 14.475 10.975Q15.5 9.95 15.5 8.5Q15.5 7.05 14.475 6.025Q13.45 5 12 5Q10.55 5 9.525 6.025Q8.5 7.05 8.5 8.5Q8.5 9.95 9.525 10.975Q10.55 12 12 12ZM12 20.2 14.2 18H19V16.85Q17.65 15.525 15.863 14.762Q14.075 14 12 14Q9.925 14 8.138 14.762Q6.35 15.525 5 16.85V18H9.8Z"/>
    </Icon>
  );
});

IconMaterialPersonPinSharpFilled.displayName = 'AmauiIconMaterialPersonPinSharpFilled';

export default IconMaterialPersonPinSharpFilled;
