import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowsMoreUpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowsMoreUpFilled'

      short_name='ArrowsMoreUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 14q-.425 0-.712-.288Q17 13.425 17 13V5H9q-.425 0-.712-.288Q8 4.425 8 4t.288-.713Q8.575 3 9 3h9q.425 0 .712.287Q19 3.575 19 4v9q0 .425-.288.712Q18.425 14 18 14Zm-5 5q-.425 0-.712-.288Q12 18.425 12 18v-8H4q-.425 0-.712-.288Q3 9.425 3 9t.288-.713Q3.575 8 4 8h9q.425 0 .713.287Q14 8.575 14 9v9q0 .425-.287.712Q13.425 19 13 19Z"/>
    </Icon>
  );
});

IconMaterialArrowsMoreUpFilled.displayName = 'AmauiIconMaterialArrowsMoreUpFilled';

export default IconMaterialArrowsMoreUpFilled;
