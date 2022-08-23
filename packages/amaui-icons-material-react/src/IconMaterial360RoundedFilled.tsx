import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial360RoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='360RoundedFilled'
      short_name='360'

      {...props}
    >
      <path d="M8.3 19.3Q8.025 19.025 8.025 18.6Q8.025 18.175 8.3 17.9L9.4 16.8Q6.2 16.375 4.1 15.05Q2 13.725 2 12Q2 9.925 4.888 8.462Q7.775 7 12 7Q16.225 7 19.113 8.462Q22 9.925 22 12Q22 13.35 20.7 14.475Q19.4 15.6 17.225 16.275Q16.725 16.425 16.363 16.15Q16 15.875 16 15.325Q16 15.025 16.212 14.738Q16.425 14.45 16.725 14.35Q18.3 13.85 19.15 13.175Q20 12.5 20 12Q20 11.2 17.863 10.1Q15.725 9 12 9Q8.275 9 6.138 10.1Q4 11.2 4 12Q4 12.6 5.275 13.438Q6.55 14.275 8.9 14.7L8.3 14.1Q8.025 13.825 8.025 13.4Q8.025 12.975 8.3 12.7Q8.575 12.425 9 12.425Q9.425 12.425 9.7 12.7L12.3 15.3Q12.45 15.45 12.513 15.625Q12.575 15.8 12.575 16Q12.575 16.2 12.513 16.375Q12.45 16.55 12.3 16.7L9.7 19.3Q9.425 19.575 9 19.575Q8.575 19.575 8.3 19.3Z"/>
    </Icon>
  );
});

IconMaterial360RoundedFilled.displayName = 'AmauiIconMaterial360RoundedFilled';

export default IconMaterial360RoundedFilled;
