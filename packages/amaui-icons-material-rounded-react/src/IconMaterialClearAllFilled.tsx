import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialClearAllFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClearAllFilled'

      short_name='ClearAll'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 13H6q-.425 0-.713-.288Q5 12.425 5 12t.287-.713Q5.575 11 6 11h12q.425 0 .712.287.288.288.288.713t-.288.712Q18.425 13 18 13Zm-2 4H4q-.425 0-.712-.288Q3 16.425 3 16t.288-.713Q3.575 15 4 15h12q.425 0 .712.287.288.288.288.713t-.288.712Q16.425 17 16 17Zm4-8H8q-.425 0-.713-.288Q7 8.425 7 8t.287-.713Q7.575 7 8 7h12q.425 0 .712.287Q21 7.575 21 8t-.288.712Q20.425 9 20 9Z"/>
    </Icon>
  );
});

IconMaterialClearAllFilled.displayName = 'AmauiIconMaterialClearAllFilled';

export default IconMaterialClearAllFilled;
