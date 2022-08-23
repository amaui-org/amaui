import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowForwardRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowForwardRounded'
      short_name='ArrowForward'

      {...props}
    >
      <path d="M11.3 19.3Q11.025 19.025 11.012 18.6Q11 18.175 11.275 17.9L16.175 13H5Q4.575 13 4.287 12.712Q4 12.425 4 12Q4 11.575 4.287 11.287Q4.575 11 5 11H16.175L11.275 6.1Q11 5.825 11.012 5.4Q11.025 4.975 11.3 4.7Q11.575 4.425 12 4.425Q12.425 4.425 12.7 4.7L19.3 11.3Q19.45 11.425 19.513 11.612Q19.575 11.8 19.575 12Q19.575 12.2 19.513 12.375Q19.45 12.55 19.3 12.7L12.7 19.3Q12.425 19.575 12 19.575Q11.575 19.575 11.3 19.3Z"/>
    </Icon>
  );
});

IconMaterialArrowForwardRounded.displayName = 'AmauiIconMaterialArrowForwardRounded';

export default IconMaterialArrowForwardRounded;
