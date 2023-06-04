import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEmojiPeopleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiPeopleW100'

      short_name='EmojiPeople'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 5.7q-.675 0-1.137-.463Q10.4 4.775 10.4 4.1t.463-1.138Q11.325 2.5 12 2.5t1.138.462q.462.463.462 1.138 0 .675-.462 1.137Q12.675 5.7 12 5.7Zm-1.95 15.65V8.2Q8.3 7.925 7.113 6.625 5.925 5.325 5.7 3.55h.7q.25 1.725 1.513 2.862Q9.175 7.55 10.75 7.55h2.5q.525 0 .85.138.325.137.7.512l4.15 4.15-.5.5-4.5-4.5v13h-.7V15.5h-2.5v5.85Z"/>
    </Icon>
  );
});

IconMaterialEmojiPeopleW100.displayName = 'AmauiIconMaterialEmojiPeopleW100';

export default IconMaterialEmojiPeopleW100;
