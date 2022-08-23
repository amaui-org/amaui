import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMergeTypeRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MergeTypeRounded'
      short_name='MergeType'

      {...props}
    >
      <path d="M15.9 19.3 11 14.4V6.875L9.1 8.775Q8.825 9.05 8.413 9.05Q8 9.05 7.7 8.75Q7.4 8.45 7.4 8.037Q7.4 7.625 7.7 7.325L11.3 3.725Q11.45 3.575 11.625 3.512Q11.8 3.45 12 3.45Q12.2 3.45 12.375 3.512Q12.55 3.575 12.7 3.725L16.3 7.325Q16.575 7.6 16.587 8.012Q16.6 8.425 16.3 8.725Q16 9.025 15.588 9.025Q15.175 9.025 14.875 8.725L13 6.875V13.6L17.325 17.925Q17.6 18.2 17.6 18.6Q17.6 19 17.3 19.3Q17.025 19.575 16.6 19.575Q16.175 19.575 15.9 19.3ZM6.725 19.325Q6.425 19.025 6.425 18.612Q6.425 18.2 6.7 17.925L9.2 15.425L10.6 16.85L8.125 19.325Q7.825 19.625 7.412 19.613Q7 19.6 6.725 19.325Z"/>
    </Icon>
  );
});

IconMaterialMergeTypeRounded.displayName = 'AmauiIconMaterialMergeTypeRounded';

export default IconMaterialMergeTypeRounded;
