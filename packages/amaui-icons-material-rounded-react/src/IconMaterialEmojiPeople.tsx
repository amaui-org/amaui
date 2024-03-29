import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEmojiPeople = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiPeople'

      short_name='EmojiPeople'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 6q-.825 0-1.412-.588Q10 4.825 10 4t.588-1.413Q11.175 2 12 2t1.413.587Q14 3.175 14 4q0 .825-.587 1.412Q12.825 6 12 6Zm-2 16q-.425 0-.712-.288Q9 21.425 9 21V8.775Q7 8.25 5.713 6.688 4.425 5.125 4.1 3.125q-.075-.45.238-.788Q4.65 2 5.15 2q.35 0 .613.25.262.25.312.6.275 1.775 1.55 2.962Q8.9 7 10.75 7h2.5q.75 0 1.4.275.65.275 1.175.8L19.65 11.9q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275L15 10.05V21q0 .425-.287.712Q14.425 22 14 22t-.712-.288Q13 21.425 13 21v-5h-2v5q0 .425-.287.712Q10.425 22 10 22Z"/>
    </Icon>
  );
});

IconMaterialEmojiPeople.displayName = 'AmauiIconMaterialEmojiPeople';

export default IconMaterialEmojiPeople;
