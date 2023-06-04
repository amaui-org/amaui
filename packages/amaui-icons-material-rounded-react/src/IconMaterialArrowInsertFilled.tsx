import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowInsertFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowInsertFilled'

      short_name='ArrowInsert'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 8.4V16q0 .425-.287.712Q7.425 17 7 17t-.713-.288Q6 16.425 6 16V6q0-.425.287-.713Q6.575 5 7 5h10q.425 0 .712.287Q18 5.575 18 6t-.288.713Q17.425 7 17 7H9.4l8.9 8.9q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialArrowInsertFilled.displayName = 'AmauiIconMaterialArrowInsertFilled';

export default IconMaterialArrowInsertFilled;
