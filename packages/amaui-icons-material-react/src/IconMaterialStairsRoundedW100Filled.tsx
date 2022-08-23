import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStairsRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StairsRoundedW100Filled'
      short_name='Stairs'

      {...props}
    >
      <path d="M7 17.35H9.775V14.025H12.35V10.7H14.925V7.35H17Q17.15 7.35 17.25 7.25Q17.35 7.15 17.35 7Q17.35 6.85 17.25 6.75Q17.15 6.65 17 6.65H14.225V9.975H11.65V13.3H9.075V16.65H7Q6.85 16.65 6.75 16.75Q6.65 16.85 6.65 17Q6.65 17.15 6.75 17.25Q6.85 17.35 7 17.35ZM5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7Z"/>
    </Icon>
  );
});

IconMaterialStairsRoundedW100Filled.displayName = 'AmauiIconMaterialStairsRoundedW100Filled';

export default IconMaterialStairsRoundedW100Filled;
