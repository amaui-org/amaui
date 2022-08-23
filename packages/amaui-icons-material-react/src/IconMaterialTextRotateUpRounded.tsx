import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTextRotateUpRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotateUpRounded'
      short_name='TextRotateUp'

      {...props}
    >
      <path d="M18 20Q17.575 20 17.288 19.712Q17 19.425 17 19V6.8L16.65 7.15Q16.375 7.425 15.95 7.425Q15.525 7.425 15.25 7.15Q14.975 6.875 14.975 6.45Q14.975 6.025 15.25 5.75L17.3 3.7Q17.45 3.55 17.637 3.475Q17.825 3.4 18.025 3.4Q18.225 3.4 18.413 3.475Q18.6 3.55 18.75 3.7L20.775 5.725Q21.075 6.025 21.075 6.425Q21.075 6.825 20.775 7.125Q20.475 7.425 20.075 7.412Q19.675 7.4 19.35 7.125L19 6.8V19Q19 19.425 18.712 19.712Q18.425 20 18 20ZM12.775 16.65 3.925 13.35Q3.55 13.2 3.275 12.812Q3 12.425 3 12Q3 11.575 3.275 11.188Q3.55 10.8 3.925 10.65L12.775 7.35Q13.275 7.15 13.637 7.412Q14 7.675 14 8.225Q14 8.475 13.838 8.7Q13.675 8.925 13.45 9L11.2 9.75V14.2L13.45 15Q13.675 15.075 13.838 15.3Q14 15.525 14 15.8Q14 16.35 13.637 16.6Q13.275 16.85 12.775 16.65ZM9.6 13.65V10.35L5.05 11.95V12.05Z"/>
    </Icon>
  );
});

IconMaterialTextRotateUpRounded.displayName = 'AmauiIconMaterialTextRotateUpRounded';

export default IconMaterialTextRotateUpRounded;
