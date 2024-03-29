import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeck = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Deck'

      short_name='Deck'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-.425 0-.712-.288Q11 21.425 11 21V9H3.575Q3.2 9 3.1 8.65q-.1-.35.2-.55l7.55-5.3q.525-.35 1.15-.35.625 0 1.15.35l7.55 5.3q.3.2.2.55-.1.35-.475.35H13v12q0 .425-.287.712Q12.425 22 12 22Zm0-15h3.65-7.3ZM4 22q-.425 0-.712-.288Q3 21.425 3 21v-4.25l-.625-3.425q-.075-.425.15-.75.225-.325.65-.4.4-.075.738.162.337.238.412.638L4.9 16H8q.425 0 .713.288Q9 16.575 9 17v4q0 .425-.287.712Q8.425 22 8 22t-.713-.288Q7 21.425 7 21v-3H5v3q0 .425-.287.712Q4.425 22 4 22Zm12 0q-.425 0-.712-.288Q15 21.425 15 21v-4q0-.425.288-.712Q15.575 16 16 16h3.1l.575-3.025q.075-.4.412-.638.338-.237.738-.162.425.075.65.4.225.325.15.75L21 16.75V21q0 .425-.288.712Q20.425 22 20 22t-.712-.288Q19 21.425 19 21v-3h-2v3q0 .425-.288.712Q16.425 22 16 22ZM8.35 7h7.3L12 4.45Z"/>
    </Icon>
  );
});

IconMaterialDeck.displayName = 'AmauiIconMaterialDeck';

export default IconMaterialDeck;
