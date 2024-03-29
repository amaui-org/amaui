import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmsFilled'

      short_name='Sms'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 11q.425 0 .713-.288Q9 10.425 9 10t-.287-.713Q8.425 9 8 9t-.713.287Q7 9.575 7 10t.287.712Q7.575 11 8 11Zm4 0q.425 0 .713-.288Q13 10.425 13 10t-.287-.713Q12.425 9 12 9t-.712.287Q11 9.575 11 10t.288.712Q11.575 11 12 11Zm4 0q.425 0 .712-.288Q17 10.425 17 10t-.288-.713Q16.425 9 16 9t-.712.287Q15 9.575 15 10t.288.712Q15.575 11 16 11ZM2 22V2h20v16H6Z"/>
    </Icon>
  );
});

IconMaterialSmsFilled.displayName = 'AmauiIconMaterialSmsFilled';

export default IconMaterialSmsFilled;
