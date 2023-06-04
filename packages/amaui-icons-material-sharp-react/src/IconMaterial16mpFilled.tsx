import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial16mpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='16mpFilled'

      short_name='16mp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.5 11.5H10v-6H7V7h1.5Zm4.5 0h2.5q.425 0 .712-.288.288-.287.288-.712V9q0-.425-.288-.713Q15.925 8 15.5 8h-2V7h3V5.5H13q-.425 0-.712.287Q12 6.075 12 6.5v4q0 .425.288.712.287.288.712.288Zm.5-1V9H15v1.5ZM3 21V3h18v18Zm3-2.5h1.5V14h1v3H10v-3h1v4.5h1.5v-6H6Zm7.5 0H15V17h3v-4.5h-4.5ZM15 14h1.5v1.5H15Z"/>
    </Icon>
  );
});

IconMaterial16mpFilled.displayName = 'AmauiIconMaterial16mpFilled';

export default IconMaterial16mpFilled;
