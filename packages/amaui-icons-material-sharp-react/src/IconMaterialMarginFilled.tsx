import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarginFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarginFilled'

      short_name='Margin'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h18v18ZM8 9q.425 0 .713-.288Q9 8.425 9 8t-.287-.713Q8.425 7 8 7t-.713.287Q7 7.575 7 8t.287.712Q7.575 9 8 9Zm4 0q.425 0 .713-.288Q13 8.425 13 8t-.287-.713Q12.425 7 12 7t-.712.287Q11 7.575 11 8t.288.712Q11.575 9 12 9Zm4 0q.425 0 .712-.288Q17 8.425 17 8t-.288-.713Q16.425 7 16 7t-.712.287Q15 7.575 15 8t.288.712Q15.575 9 16 9Zm0 4q.425 0 .712-.288Q17 12.425 17 12t-.288-.713Q16.425 11 16 11t-.712.287Q15 11.575 15 12t.288.712Q15.575 13 16 13Zm-4 0q.425 0 .713-.288Q13 12.425 13 12t-.287-.713Q12.425 11 12 11t-.712.287Q11 11.575 11 12t.288.712Q11.575 13 12 13Zm-4 0q.425 0 .713-.288Q9 12.425 9 12t-.287-.713Q8.425 11 8 11t-.713.287Q7 11.575 7 12t.287.712Q7.575 13 8 13Z"/>
    </Icon>
  );
});

IconMaterialMarginFilled.displayName = 'AmauiIconMaterialMarginFilled';

export default IconMaterialMarginFilled;
