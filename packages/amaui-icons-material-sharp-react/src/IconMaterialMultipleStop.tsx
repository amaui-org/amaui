import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMultipleStop = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MultipleStop'

      short_name='MultipleStop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7 20-4-4 4-4 1.425 1.4-1.6 1.6H11v2H6.825L8.4 18.6Zm7-3q-.425 0-.712-.288Q13 16.425 13 16t.288-.713Q13.575 15 14 15t.713.287Q15 15.575 15 16t-.287.712Q14.425 17 14 17Zm4 0q-.425 0-.712-.288Q17 16.425 17 16t.288-.713Q17.575 15 18 15t.712.287Q19 15.575 19 16t-.288.712Q18.425 17 18 17Zm-1-5-1.425-1.4 1.6-1.6H13V7h4.175L15.6 5.4 17 4l4 4ZM6 9q-.425 0-.713-.288Q5 8.425 5 8t.287-.713Q5.575 7 6 7t.713.287Q7 7.575 7 8t-.287.712Q6.425 9 6 9Zm4 0q-.425 0-.712-.288Q9 8.425 9 8t.288-.713Q9.575 7 10 7t.713.287Q11 7.575 11 8t-.287.712Q10.425 9 10 9Z"/>
    </Icon>
  );
});

IconMaterialMultipleStop.displayName = 'AmauiIconMaterialMultipleStop';

export default IconMaterialMultipleStop;
