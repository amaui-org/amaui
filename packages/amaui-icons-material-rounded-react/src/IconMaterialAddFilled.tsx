import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddFilled'

      short_name='Add'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 19q-.425 0-.712-.288Q11 18.425 11 18v-5H6q-.425 0-.713-.288Q5 12.425 5 12t.287-.713Q5.575 11 6 11h5V6q0-.425.288-.713Q11.575 5 12 5t.713.287Q13 5.575 13 6v5h5q.425 0 .712.287.288.288.288.713t-.288.712Q18.425 13 18 13h-5v5q0 .425-.287.712Q12.425 19 12 19Z"/>
    </Icon>
  );
});

IconMaterialAddFilled.displayName = 'AmauiIconMaterialAddFilled';

export default IconMaterialAddFilled;
