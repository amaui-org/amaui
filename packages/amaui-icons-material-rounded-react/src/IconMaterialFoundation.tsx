import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFoundation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Foundation'

      short_name='Foundation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 20q-.425 0-.713-.288Q5 19.425 5 19v-2H4q-.425 0-.712-.288Q3 16.425 3 16t.288-.713Q3.575 15 4 15h1v-3H3.3q-.35 0-.475-.325t.15-.55l8.35-7.525q.275-.275.675-.275t.675.275l8.35 7.525q.275.225.15.55Q21.05 12 20.7 12H19v3h1q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 17 20 17h-1v2q0 .425-.288.712Q18.425 20 18 20t-.712-.288Q17 19.425 17 19v-2h-4v2q0 .425-.287.712Q12.425 20 12 20t-.712-.288Q11 19.425 11 19v-2H7v2q0 .425-.287.712Q6.425 20 6 20Zm1-5h4V6.6l-4 3.6Zm6 0h4v-4.8l-4-3.6Z"/>
    </Icon>
  );
});

IconMaterialFoundation.displayName = 'AmauiIconMaterialFoundation';

export default IconMaterialFoundation;
