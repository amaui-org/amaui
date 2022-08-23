import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShuffleRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShuffleRoundedW100Filled'
      short_name='Shuffle'

      {...props}
    >
      <path d="M9.4 9.85 5.175 5.6Q5.05 5.5 5.05 5.375Q5.05 5.25 5.175 5.125Q5.275 5.025 5.4 5.025Q5.525 5.025 5.625 5.125L9.875 9.375ZM15 19.35Q14.85 19.35 14.75 19.25Q14.65 19.15 14.65 19Q14.65 18.85 14.75 18.75Q14.85 18.65 15 18.65H18.2L14.15 14.6L14.65 14.1L18.65 18.1V15Q18.65 14.85 18.75 14.75Q18.85 14.65 19 14.65Q19.15 14.65 19.25 14.75Q19.35 14.85 19.35 15V18.6Q19.35 18.925 19.138 19.138Q18.925 19.35 18.6 19.35ZM5.15 18.85Q5.025 18.725 5.025 18.6Q5.025 18.475 5.15 18.35L18.15 5.35H15Q14.85 5.35 14.75 5.25Q14.65 5.15 14.65 5Q14.65 4.85 14.75 4.75Q14.85 4.65 15 4.65H18.6Q18.925 4.65 19.138 4.862Q19.35 5.075 19.35 5.4V9Q19.35 9.15 19.25 9.25Q19.15 9.35 19 9.35Q18.85 9.35 18.75 9.25Q18.65 9.15 18.65 9V5.85L5.65 18.85Q5.525 18.975 5.4 18.975Q5.275 18.975 5.15 18.85Z"/>
    </Icon>
  );
});

IconMaterialShuffleRoundedW100Filled.displayName = 'AmauiIconMaterialShuffleRoundedW100Filled';

export default IconMaterialShuffleRoundedW100Filled;
