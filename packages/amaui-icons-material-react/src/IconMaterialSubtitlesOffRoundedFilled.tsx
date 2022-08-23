import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSubtitlesOffRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubtitlesOffRoundedFilled'
      short_name='SubtitlesOff'

      {...props}
    >
      <path d="M19.85 22.65 17.15 20H4Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.725 2.062 5.5Q2.125 5.275 2.25 5.05L1.35 4.15Q1.075 3.875 1.075 3.45Q1.075 3.025 1.35 2.75Q1.625 2.475 2.05 2.475Q2.475 2.475 2.75 2.75L21.25 21.25Q21.525 21.525 21.538 21.938Q21.55 22.35 21.25 22.65Q20.975 22.925 20.562 22.925Q20.15 22.925 19.85 22.65ZM7 12Q7.425 12 7.713 11.712Q8 11.425 8 11Q8 10.575 7.713 10.287Q7.425 10 7 10Q6.575 10 6.287 10.287Q6 10.575 6 11Q6 11.425 6.287 11.712Q6.575 12 7 12ZM21.75 18.9 14.85 12H17Q17.425 12 17.712 11.712Q18 11.425 18 11Q18 10.575 17.712 10.287Q17.425 10 17 10H12.85L6.85 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V17.9Q22 18.125 21.95 18.4Q21.9 18.675 21.75 18.9ZM11.15 14H7Q6.575 14 6.287 14.287Q6 14.575 6 15Q6 15.425 6.287 15.712Q6.575 16 7 16H13.15Z"/>
    </Icon>
  );
});

IconMaterialSubtitlesOffRoundedFilled.displayName = 'AmauiIconMaterialSubtitlesOffRoundedFilled';

export default IconMaterialSubtitlesOffRoundedFilled;
