import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShuffleRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShuffleRoundedFilled'
      short_name='Shuffle'

      {...props}
    >
      <path d="M9.175 10.575 4.7 6.1Q4.425 5.825 4.425 5.4Q4.425 4.975 4.7 4.7Q4.975 4.425 5.4 4.425Q5.825 4.425 6.1 4.7L10.575 9.175ZM15 20Q14.575 20 14.288 19.712Q14 19.425 14 19Q14 18.575 14.288 18.288Q14.575 18 15 18H16.6L13.4 14.8L14.825 13.375L18 16.55V15Q18 14.575 18.288 14.287Q18.575 14 19 14Q19.425 14 19.712 14.287Q20 14.575 20 15V19Q20 19.425 19.712 19.712Q19.425 20 19 20ZM4.7 19.3Q4.425 19.025 4.425 18.6Q4.425 18.175 4.7 17.9L16.6 6H15Q14.575 6 14.288 5.713Q14 5.425 14 5Q14 4.575 14.288 4.287Q14.575 4 15 4H19Q19.425 4 19.712 4.287Q20 4.575 20 5V9Q20 9.425 19.712 9.712Q19.425 10 19 10Q18.575 10 18.288 9.712Q18 9.425 18 9V7.4L6.1 19.3Q5.825 19.575 5.4 19.575Q4.975 19.575 4.7 19.3Z"/>
    </Icon>
  );
});

IconMaterialShuffleRoundedFilled.displayName = 'AmauiIconMaterialShuffleRoundedFilled';

export default IconMaterialShuffleRoundedFilled;
