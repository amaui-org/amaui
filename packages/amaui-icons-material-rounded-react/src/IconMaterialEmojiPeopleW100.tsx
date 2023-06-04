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
      <path d="M11.75 5.7q-.675 0-1.137-.463-.463-.462-.463-1.137t.463-1.138q.462-.462 1.137-.462t1.138.462q.462.463.462 1.138 0 .675-.462 1.137-.463.463-1.138.463Zm-1.6 15.65q-.15 0-.25-.1T9.8 21V8.2q-1.65-.275-2.812-1.45Q5.825 5.575 5.5 3.925q-.05-.15.062-.263.113-.112.288-.112.125 0 .225.087.1.088.125.213.35 1.625 1.575 2.662Q9 7.55 10.5 7.55H13q.525 0 .85.138.325.137.7.512l3.9 3.9q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125L13.7 8.35V21q0 .15-.1.25t-.25.1q-.15 0-.25-.1T13 21v-5.5h-2.5V21q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialEmojiPeopleW100.displayName = 'AmauiIconMaterialEmojiPeopleW100';

export default IconMaterialEmojiPeopleW100;
