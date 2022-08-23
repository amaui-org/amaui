import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFollowTheSignsRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FollowTheSignsRounded'
      short_name='FollowTheSigns'

      {...props}
    >
      <path d="M9.5 5.5Q8.675 5.5 8.088 4.912Q7.5 4.325 7.5 3.5Q7.5 2.675 8.088 2.087Q8.675 1.5 9.5 1.5Q10.325 1.5 10.913 2.087Q11.5 2.675 11.5 3.5Q11.5 4.325 10.913 4.912Q10.325 5.5 9.5 5.5ZM3 23 5.75 8.9 4 9.65V13H2V8.3L7.25 6.15Q7.925 5.875 8.625 6.088Q9.325 6.3 9.7 6.95L10.65 8.55Q11.325 9.65 12.463 10.325Q13.6 11 15 11V13Q13.35 13 11.938 12.3Q10.525 11.6 9.55 10.4L8.95 13.4L11 15.45V23H9V17L6.85 15L5.1 23ZM16.75 23V9H13V2H22V9H18.25V23ZM18.025 7.975 20.5 5.5 18.025 3.025 16.95 4.1 17.6 4.75H14.5V6.25H17.6L16.95 6.9Z"/>
    </Icon>
  );
});

IconMaterialFollowTheSignsRounded.displayName = 'AmauiIconMaterialFollowTheSignsRounded';

export default IconMaterialFollowTheSignsRounded;
