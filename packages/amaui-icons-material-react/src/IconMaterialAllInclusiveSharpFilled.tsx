import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAllInclusiveSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllInclusiveSharpFilled'
      short_name='AllInclusive'

      {...props}
    >
      <path d="M5.5 17.5Q3.2 17.5 1.6 15.9Q0 14.3 0 12Q0 9.7 1.6 8.1Q3.2 6.5 5.5 6.5Q6.425 6.5 7.275 6.825Q8.125 7.15 8.8 7.75L10.5 9.3L9 10.65L7.45 9.25Q7.05 8.9 6.55 8.7Q6.05 8.5 5.5 8.5Q4.05 8.5 3.025 9.525Q2 10.55 2 12Q2 13.45 3.025 14.475Q4.05 15.5 5.5 15.5Q6.05 15.5 6.55 15.3Q7.05 15.1 7.45 14.75L15.2 7.75Q15.875 7.15 16.725 6.825Q17.575 6.5 18.5 6.5Q20.8 6.5 22.4 8.1Q24 9.7 24 12Q24 14.3 22.4 15.9Q20.8 17.5 18.5 17.5Q17.575 17.5 16.725 17.175Q15.875 16.85 15.2 16.25L13.5 14.7L15 13.35L16.55 14.75Q16.95 15.1 17.45 15.3Q17.95 15.5 18.5 15.5Q19.95 15.5 20.975 14.475Q22 13.45 22 12Q22 10.55 20.975 9.525Q19.95 8.5 18.5 8.5Q17.95 8.5 17.45 8.7Q16.95 8.9 16.55 9.25L8.8 16.25Q8.125 16.85 7.275 17.175Q6.425 17.5 5.5 17.5Z"/>
    </Icon>
  );
});

IconMaterialAllInclusiveSharpFilled.displayName = 'AmauiIconMaterialAllInclusiveSharpFilled';

export default IconMaterialAllInclusiveSharpFilled;
