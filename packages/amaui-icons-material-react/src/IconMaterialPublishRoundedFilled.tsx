import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPublishRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PublishRoundedFilled'
      short_name='Publish'

      {...props}
    >
      <path d="M12 20Q11.575 20 11.288 19.712Q11 19.425 11 19V11.85L9.125 13.725Q8.85 14 8.412 13.988Q7.975 13.975 7.7 13.7Q7.425 13.425 7.425 13Q7.425 12.575 7.7 12.3L11.3 8.7Q11.45 8.55 11.625 8.487Q11.8 8.425 12 8.425Q12.2 8.425 12.375 8.487Q12.55 8.55 12.7 8.7L16.3 12.3Q16.575 12.575 16.575 13Q16.575 13.425 16.3 13.7Q16.025 13.975 15.588 13.988Q15.15 14 14.875 13.725L13 11.85V19Q13 19.425 12.713 19.712Q12.425 20 12 20ZM5 9Q4.575 9 4.287 8.712Q4 8.425 4 8V6Q4 5.175 4.588 4.588Q5.175 4 6 4H18Q18.825 4 19.413 4.588Q20 5.175 20 6V8Q20 8.425 19.712 8.712Q19.425 9 19 9Q18.575 9 18.288 8.712Q18 8.425 18 8V6Q18 6 18 6Q18 6 18 6H6Q6 6 6 6Q6 6 6 6V8Q6 8.425 5.713 8.712Q5.425 9 5 9Z"/>
    </Icon>
  );
});

IconMaterialPublishRoundedFilled.displayName = 'AmauiIconMaterialPublishRoundedFilled';

export default IconMaterialPublishRoundedFilled;
