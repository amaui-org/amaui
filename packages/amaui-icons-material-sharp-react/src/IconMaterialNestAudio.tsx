import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestAudio = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestAudio'

      short_name='NestAudio'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 21q-1.65 0-2.825-1.175Q5 18.65 5 17V8q0-2.075 1.463-3.537Q7.925 3 10 3h4q2.075 0 3.538 1.463Q19 5.925 19 8v9q0 1.65-1.175 2.825Q16.65 21 15 21Zm0-2h6q.825 0 1.413-.587Q17 17.825 17 17V8q0-1.25-.875-2.125T14 5h-4q-1.25 0-2.125.875T7 8v9q0 .825.588 1.413Q8.175 19 9 19Zm0-6q.425 0 .713-.288Q10 12.425 10 12t-.287-.713Q9.425 11 9 11t-.712.287Q8 11.575 8 12t.288.712Q8.575 13 9 13Zm3 0q.425 0 .713-.288Q13 12.425 13 12t-.287-.713Q12.425 11 12 11t-.712.287Q11 11.575 11 12t.288.712Q11.575 13 12 13Zm3 0q.425 0 .713-.288Q16 12.425 16 12t-.287-.713Q15.425 11 15 11t-.712.287Q14 11.575 14 12t.288.712Q14.575 13 15 13Zm-3-1Z"/>
    </Icon>
  );
});

IconMaterialNestAudio.displayName = 'AmauiIconMaterialNestAudio';

export default IconMaterialNestAudio;
