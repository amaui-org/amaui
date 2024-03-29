import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMatchWord = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MatchWord'

      short_name='MatchWord'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 857q-33 0-56.5-23.5T40 777v-80q0-17 11.5-28.5T80 657q17 0 28.5 11.5T120 697v80h720v-80q0-17 11.5-28.5T880 657q17 0 28.5 11.5T920 697v80q0 33-23.5 56.5T840 857H120Zm174-152q-49 0-77-25.5T189 610q0-42 32.5-68.5T305 515q23 0 42.5 3.5T381 530v-14q0-27-18.5-43T312 457q-15 0-28.5 4.5T259 474q-9 7-19.5 8t-19.5-6q-9-7-11-17.5t6-18.5q18-17 42.5-26t55.5-9q62 0 95 29.5t33 85.5v147q0 12-8.5 20.5T412 696q-13 0-21.5-8.5T382 666v-4h-3q-13 20-35 31.5T294 705Zm22-143q-32 0-49 12.5T250 610q0 20 15 32.5t39 12.5q32 0 54.5-22.5T381 578q-14-8-32-12t-33-4Zm337 143q-41 0-62.5-18T563 659h-3v13q0 12-8.5 20.5T531 701q-12 0-21-9t-9-21V326q0-13 9-22t22-9q13 0 22 9t9 22v82l-3 40h3q3-5 24-25.5t66-20.5q64 0 101 46t37 106q0 60-36.5 105.5T653 705Zm-9-247q-40 0-62 29.5T560 553q0 37 22 66t62 29q40 0 62.5-29t22.5-66q0-37-22.5-66T644 458Z"/>
    </Icon>
  );
});

IconMaterialMatchWord.displayName = 'AmauiIconMaterialMatchWord';

export default IconMaterialMatchWord;
