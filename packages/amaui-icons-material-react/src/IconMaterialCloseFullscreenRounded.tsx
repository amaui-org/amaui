import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCloseFullscreenRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloseFullscreenRounded'
      short_name='CloseFullscreen'

      {...props}
    >
      <path d="M13 12Q12.575 12 12.288 11.712Q12 11.425 12 11V5Q12 4.575 12.288 4.287Q12.575 4 13 4Q13.425 4 13.713 4.287Q14 4.575 14 5V8.6L19.9 2.7Q20.175 2.425 20.6 2.425Q21.025 2.425 21.3 2.7Q21.575 2.975 21.575 3.4Q21.575 3.825 21.3 4.1L15.4 10H19Q19.425 10 19.712 10.287Q20 10.575 20 11Q20 11.425 19.712 11.712Q19.425 12 19 12ZM2.7 21.3Q2.425 21.025 2.425 20.6Q2.425 20.175 2.7 19.9L8.6 14H5Q4.575 14 4.287 13.712Q4 13.425 4 13Q4 12.575 4.287 12.287Q4.575 12 5 12H11Q11.425 12 11.713 12.287Q12 12.575 12 13V19Q12 19.425 11.713 19.712Q11.425 20 11 20Q10.575 20 10.288 19.712Q10 19.425 10 19V15.4L4.1 21.3Q3.825 21.575 3.4 21.575Q2.975 21.575 2.7 21.3Z"/>
    </Icon>
  );
});

IconMaterialCloseFullscreenRounded.displayName = 'AmauiIconMaterialCloseFullscreenRounded';

export default IconMaterialCloseFullscreenRounded;
