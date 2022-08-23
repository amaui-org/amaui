import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial1xMobiledataRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='1xMobiledataRounded'
      short_name='1xMobiledata'

      {...props}
    >
      <path d="M7 17Q6.575 17 6.287 16.712Q6 16.425 6 16V9H5Q4.575 9 4.287 8.712Q4 8.425 4 8Q4 7.575 4.287 7.287Q4.575 7 5 7H7Q7.425 7 7.713 7.287Q8 7.575 8 8V16Q8 16.425 7.713 16.712Q7.425 17 7 17ZM12.075 17Q11.45 17 11.175 16.525Q10.9 16.05 11.225 15.525L13.5 11.7L11.575 8.5Q11.25 7.975 11.525 7.487Q11.8 7 12.425 7Q12.65 7 12.913 7.137Q13.175 7.275 13.3 7.475L14.65 9.75L16.05 7.475Q16.175 7.275 16.425 7.137Q16.675 7 16.925 7Q17.55 7 17.825 7.475Q18.1 7.95 17.775 8.475L15.85 11.7L18.1 15.475Q18.425 16 18.138 16.5Q17.85 17 17.225 17Q17 17 16.738 16.863Q16.475 16.725 16.35 16.525L14.65 13.65L12.925 16.525Q12.8 16.725 12.562 16.863Q12.325 17 12.075 17Z"/>
    </Icon>
  );
});

IconMaterial1xMobiledataRounded.displayName = 'AmauiIconMaterial1xMobiledataRounded';

export default IconMaterial1xMobiledataRounded;
