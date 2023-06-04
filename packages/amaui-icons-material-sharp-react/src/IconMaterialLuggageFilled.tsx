import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLuggageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LuggageFilled'

      short_name='Luggage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21V6h4V2h6v4h4v15h-2q0 .425-.288.712Q16.425 22 16 22t-.712-.288Q15 21.425 15 21H9q0 .425-.287.712Q8.425 22 8 22t-.713-.288Q7 21.425 7 21Zm5.5-15h3V3.5h-3ZM8 18h1.5V9H8Zm3.25 0h1.5V9h-1.5Zm3.25 0H16V9h-1.5Z"/>
    </Icon>
  );
});

IconMaterialLuggageFilled.displayName = 'AmauiIconMaterialLuggageFilled';

export default IconMaterialLuggageFilled;
