import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSubdirectoryArrowRightRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubdirectoryArrowRightRoundedFilled'
      short_name='SubdirectoryArrowRight'

      {...props}
    >
      <path d="M13.3 20.275Q13.025 19.975 13.012 19.575Q13 19.175 13.3 18.875L16.175 16H6Q5.575 16 5.287 15.712Q5 15.425 5 15V5Q5 4.575 5.287 4.287Q5.575 4 6 4Q6.425 4 6.713 4.287Q7 4.575 7 5V14H16.175L13.275 11.1Q13 10.825 12.988 10.412Q12.975 10 13.275 9.7Q13.575 9.4 13.988 9.412Q14.4 9.425 14.7 9.7L19.3 14.3Q19.45 14.45 19.513 14.625Q19.575 14.8 19.575 15Q19.575 15.2 19.513 15.375Q19.45 15.55 19.3 15.7L14.7 20.3Q14.425 20.575 14.013 20.575Q13.6 20.575 13.3 20.275Z"/>
    </Icon>
  );
});

IconMaterialSubdirectoryArrowRightRoundedFilled.displayName = 'AmauiIconMaterialSubdirectoryArrowRightRoundedFilled';

export default IconMaterialSubdirectoryArrowRightRoundedFilled;
