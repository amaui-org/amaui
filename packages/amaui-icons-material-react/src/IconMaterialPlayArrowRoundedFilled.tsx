import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlayArrowRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayArrowRoundedFilled'
      short_name='PlayArrow'

      {...props}
    >
      <path d="M9.525 18.025Q9.025 18.35 8.512 18.062Q8 17.775 8 17.175V6.825Q8 6.225 8.512 5.937Q9.025 5.65 9.525 5.975L17.675 11.15Q18.125 11.45 18.125 12Q18.125 12.55 17.675 12.85Z"/>
    </Icon>
  );
});

IconMaterialPlayArrowRoundedFilled.displayName = 'AmauiIconMaterialPlayArrowRoundedFilled';

export default IconMaterialPlayArrowRoundedFilled;
