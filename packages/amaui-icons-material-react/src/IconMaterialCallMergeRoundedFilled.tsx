import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallMergeRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMergeRoundedFilled'
      short_name='CallMerge'

      {...props}
    >
      <path d="M6.7 19.3Q6.425 19.025 6.425 18.6Q6.425 18.175 6.7 17.9L11 13.6V6.875L9.125 8.75Q8.85 9.025 8.438 9.025Q8.025 9.025 7.725 8.725Q7.425 8.425 7.425 8.012Q7.425 7.6 7.725 7.3L11.3 3.725Q11.45 3.575 11.625 3.512Q11.8 3.45 12 3.45Q12.2 3.45 12.375 3.512Q12.55 3.575 12.7 3.725L16.325 7.35Q16.6 7.625 16.613 8.037Q16.625 8.45 16.325 8.75Q16.025 9.05 15.613 9.05Q15.2 9.05 14.9 8.75L13 6.875V14.4L8.075 19.325Q7.8 19.6 7.4 19.6Q7 19.6 6.7 19.3ZM15.9 19.325 13.4 16.85 14.825 15.425 17.325 17.95Q17.6 18.225 17.6 18.625Q17.6 19.025 17.3 19.325Q17.025 19.6 16.613 19.6Q16.2 19.6 15.9 19.325Z"/>
    </Icon>
  );
});

IconMaterialCallMergeRoundedFilled.displayName = 'AmauiIconMaterialCallMergeRoundedFilled';

export default IconMaterialCallMergeRoundedFilled;
