import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEmojiPeopleSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiPeopleSharp'
      short_name='EmojiPeople'

      {...props}
    >
      <path d="M12 6Q11.175 6 10.588 5.412Q10 4.825 10 4Q10 3.175 10.588 2.587Q11.175 2 12 2Q12.825 2 13.413 2.587Q14 3.175 14 4Q14 4.825 13.413 5.412Q12.825 6 12 6ZM9 22V8.775Q6.725 8.175 5.363 6.262Q4 4.35 4 2H6Q6 4.075 7.338 5.537Q8.675 7 10.75 7H13.25Q14 7 14.65 7.275Q15.3 7.55 15.825 8.075L20.35 12.6L18.95 14L15 10.05V22H13V16H11V22Z"/>
    </Icon>
  );
});

IconMaterialEmojiPeopleSharp.displayName = 'AmauiIconMaterialEmojiPeopleSharp';

export default IconMaterialEmojiPeopleSharp;
