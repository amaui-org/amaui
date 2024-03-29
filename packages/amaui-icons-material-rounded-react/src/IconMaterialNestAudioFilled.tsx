import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestAudioFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestAudioFilled'

      short_name='NestAudio'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 21q-1.65 0-2.825-1.175Q5 18.65 5 17V8q0-2.075 1.463-3.537Q7.925 3 10 3h4q2.075 0 3.538 1.463Q19 5.925 19 8v9q0 1.65-1.175 2.825Q16.65 21 15 21Zm0-8q.425 0 .713-.288Q10 12.425 10 12t-.287-.713Q9.425 11 9 11t-.712.287Q8 11.575 8 12t.288.712Q8.575 13 9 13Zm3 0q.425 0 .713-.288Q13 12.425 13 12t-.287-.713Q12.425 11 12 11t-.712.287Q11 11.575 11 12t.288.712Q11.575 13 12 13Zm3 0q.425 0 .713-.288Q16 12.425 16 12t-.287-.713Q15.425 11 15 11t-.712.287Q14 11.575 14 12t.288.712Q14.575 13 15 13Z"/>
    </Icon>
  );
});

IconMaterialNestAudioFilled.displayName = 'AmauiIconMaterialNestAudioFilled';

export default IconMaterialNestAudioFilled;
