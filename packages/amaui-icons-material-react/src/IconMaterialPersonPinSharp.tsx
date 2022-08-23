import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPersonPinSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonPinSharp'
      short_name='PersonPin'

      {...props}
    >
      <path d="M12 23 9 20H3V2H21V20H15ZM5 16.85Q6.35 15.525 8.138 14.762Q9.925 14 12 14Q14.075 14 15.863 14.762Q17.65 15.525 19 16.85V4H5ZM12 12Q13.45 12 14.475 10.975Q15.5 9.95 15.5 8.5Q15.5 7.05 14.475 6.025Q13.45 5 12 5Q10.55 5 9.525 6.025Q8.5 7.05 8.5 8.5Q8.5 9.95 9.525 10.975Q10.55 12 12 12ZM12 10Q11.375 10 10.938 9.562Q10.5 9.125 10.5 8.5Q10.5 7.875 10.938 7.438Q11.375 7 12 7Q12.625 7 13.062 7.438Q13.5 7.875 13.5 8.5Q13.5 9.125 13.062 9.562Q12.625 10 12 10ZM12 20.2 14.2 18H17V17.75Q15.95 16.875 14.675 16.438Q13.4 16 12 16Q10.6 16 9.325 16.438Q8.05 16.875 7 17.75V18H9.8ZM12 10.425Q12 10.425 12 10.425Q12 10.425 12 10.425Q12 10.425 12 10.425Q12 10.425 12 10.425Z"/>
    </Icon>
  );
});

IconMaterialPersonPinSharp.displayName = 'AmauiIconMaterialPersonPinSharp';

export default IconMaterialPersonPinSharp;
