import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEmojiPeopleRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiPeopleRoundedFilled'
      short_name='EmojiPeople'

      {...props}
    >
      <path d="M12 6Q11.175 6 10.588 5.412Q10 4.825 10 4Q10 3.175 10.588 2.587Q11.175 2 12 2Q12.825 2 13.413 2.587Q14 3.175 14 4Q14 4.825 13.413 5.412Q12.825 6 12 6ZM10 22Q9.575 22 9.288 21.712Q9 21.425 9 21V8.775Q7 8.25 5.713 6.688Q4.425 5.125 4.1 3.125Q4.025 2.675 4.338 2.337Q4.65 2 5.15 2Q5.5 2 5.763 2.25Q6.025 2.5 6.075 2.85Q6.35 4.625 7.625 5.812Q8.9 7 10.75 7H13.25Q14 7 14.65 7.275Q15.3 7.55 15.825 8.075L19.65 11.9Q19.925 12.175 19.925 12.6Q19.925 13.025 19.65 13.3Q19.375 13.575 18.95 13.575Q18.525 13.575 18.25 13.3L15 10.05V21Q15 21.425 14.713 21.712Q14.425 22 14 22Q13.575 22 13.288 21.712Q13 21.425 13 21V16H11V21Q11 21.425 10.713 21.712Q10.425 22 10 22Z"/>
    </Icon>
  );
});

IconMaterialEmojiPeopleRoundedFilled.displayName = 'AmauiIconMaterialEmojiPeopleRoundedFilled';

export default IconMaterialEmojiPeopleRoundedFilled;
