import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRedoRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RedoRoundedFilled'
      short_name='Redo'

      {...props}
    >
      <path d="M9.9 19Q7.475 19 5.738 17.425Q4 15.85 4 13.5Q4 11.15 5.738 9.575Q7.475 8 9.9 8H16.2L14.3 6.1Q14.025 5.825 14.025 5.4Q14.025 4.975 14.3 4.7Q14.575 4.425 15 4.425Q15.425 4.425 15.7 4.7L19.3 8.3Q19.45 8.45 19.513 8.625Q19.575 8.8 19.575 9Q19.575 9.2 19.513 9.375Q19.45 9.55 19.3 9.7L15.7 13.3Q15.425 13.575 15 13.575Q14.575 13.575 14.3 13.3Q14.025 13.025 14.025 12.6Q14.025 12.175 14.3 11.9L16.2 10H9.9Q8.325 10 7.163 11Q6 12 6 13.5Q6 15 7.163 16Q8.325 17 9.9 17H16Q16.425 17 16.712 17.288Q17 17.575 17 18Q17 18.425 16.712 18.712Q16.425 19 16 19Z"/>
    </Icon>
  );
});

IconMaterialRedoRoundedFilled.displayName = 'AmauiIconMaterialRedoRoundedFilled';

export default IconMaterialRedoRoundedFilled;
