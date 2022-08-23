import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEmojiPeopleSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiPeopleSharpW100Filled'
      short_name='EmojiPeople'

      {...props}
    >
      <path d="M12 5.7Q11.325 5.7 10.863 5.237Q10.4 4.775 10.4 4.1Q10.4 3.425 10.863 2.962Q11.325 2.5 12 2.5Q12.675 2.5 13.138 2.962Q13.6 3.425 13.6 4.1Q13.6 4.775 13.138 5.237Q12.675 5.7 12 5.7ZM10.05 21.35V8.2Q8.3 7.925 7.113 6.625Q5.925 5.325 5.7 3.55H6.4Q6.65 5.275 7.913 6.412Q9.175 7.55 10.75 7.55H13.25Q13.775 7.55 14.1 7.688Q14.425 7.825 14.8 8.2L18.95 12.35L18.45 12.85L13.95 8.35V21.35H13.25V15.5H10.75V21.35Z"/>
    </Icon>
  );
});

IconMaterialEmojiPeopleSharpW100Filled.displayName = 'AmauiIconMaterialEmojiPeopleSharpW100Filled';

export default IconMaterialEmojiPeopleSharpW100Filled;
