import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFileCopyRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileCopyRoundedW100'
      short_name='FileCopy'

      {...props}
    >
      <path d="M18.2 17.7H8.8Q8.15 17.7 7.725 17.275Q7.3 16.85 7.3 16.2V3.8Q7.3 3.15 7.725 2.725Q8.15 2.3 8.8 2.3H15.025Q15.325 2.3 15.613 2.425Q15.9 2.55 16.1 2.75L19.25 5.9Q19.45 6.1 19.575 6.387Q19.7 6.675 19.7 6.975V16.2Q19.7 16.85 19.275 17.275Q18.85 17.7 18.2 17.7ZM15.3 3H8.8Q8.5 3 8.25 3.25Q8 3.5 8 3.8V16.2Q8 16.5 8.25 16.75Q8.5 17 8.8 17H18.2Q18.5 17 18.75 16.75Q19 16.5 19 16.2V6.7H16.05Q15.725 6.7 15.513 6.487Q15.3 6.275 15.3 5.95ZM4.8 21.7Q4.15 21.7 3.725 21.275Q3.3 20.85 3.3 20.2V8.65Q3.3 8.5 3.4 8.4Q3.5 8.3 3.65 8.3Q3.8 8.3 3.9 8.4Q4 8.5 4 8.65V20.2Q4 20.5 4.25 20.75Q4.5 21 4.8 21H13.35Q13.5 21 13.6 21.1Q13.7 21.2 13.7 21.35Q13.7 21.5 13.6 21.6Q13.5 21.7 13.35 21.7ZM8 3V5.95Q8 6.275 8 6.487Q8 6.7 8 6.7V3V5.95Q8 6.275 8 6.487Q8 6.7 8 6.7V16.2Q8 16.5 8 16.75Q8 17 8 17Q8 17 8 16.75Q8 16.5 8 16.2V3.8Q8 3.5 8 3.25Q8 3 8 3Z"/>
    </Icon>
  );
});

IconMaterialFileCopyRoundedW100.displayName = 'AmauiIconMaterialFileCopyRoundedW100';

export default IconMaterialFileCopyRoundedW100;
