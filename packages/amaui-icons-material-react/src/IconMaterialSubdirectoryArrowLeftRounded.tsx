import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSubdirectoryArrowLeftRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubdirectoryArrowLeftRounded'
      short_name='SubdirectoryArrowLeft'

      {...props}
    >
      <path d="M9.3 20.275 4.7 15.7Q4.55 15.55 4.487 15.375Q4.425 15.2 4.425 15Q4.425 14.8 4.487 14.625Q4.55 14.45 4.7 14.3L9.325 9.675Q9.6 9.4 10.025 9.387Q10.45 9.375 10.725 9.675Q11.025 9.95 11.025 10.375Q11.025 10.8 10.725 11.1L7.825 14H17V5Q17 4.575 17.288 4.287Q17.575 4 18 4Q18.425 4 18.712 4.287Q19 4.575 19 5V15Q19 15.425 18.712 15.712Q18.425 16 18 16H7.825L10.725 18.875Q11 19.15 11.012 19.562Q11.025 19.975 10.725 20.275Q10.425 20.575 10.013 20.575Q9.6 20.575 9.3 20.275Z"/>
    </Icon>
  );
});

IconMaterialSubdirectoryArrowLeftRounded.displayName = 'AmauiIconMaterialSubdirectoryArrowLeftRounded';

export default IconMaterialSubdirectoryArrowLeftRounded;
