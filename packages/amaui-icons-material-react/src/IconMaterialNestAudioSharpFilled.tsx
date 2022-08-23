import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestAudioSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestAudioSharpFilled'
      short_name='NestAudio'

      {...props}
    >
      <path d="M9 21Q7.35 21 6.175 19.825Q5 18.65 5 17V8Q5 5.925 6.463 4.463Q7.925 3 10 3H14Q16.075 3 17.538 4.463Q19 5.925 19 8V17Q19 18.65 17.825 19.825Q16.65 21 15 21ZM9 13Q9.425 13 9.713 12.712Q10 12.425 10 12Q10 11.575 9.713 11.287Q9.425 11 9 11Q8.575 11 8.288 11.287Q8 11.575 8 12Q8 12.425 8.288 12.712Q8.575 13 9 13ZM12 13Q12.425 13 12.713 12.712Q13 12.425 13 12Q13 11.575 12.713 11.287Q12.425 11 12 11Q11.575 11 11.288 11.287Q11 11.575 11 12Q11 12.425 11.288 12.712Q11.575 13 12 13ZM15 13Q15.425 13 15.713 12.712Q16 12.425 16 12Q16 11.575 15.713 11.287Q15.425 11 15 11Q14.575 11 14.288 11.287Q14 11.575 14 12Q14 12.425 14.288 12.712Q14.575 13 15 13Z"/>
    </Icon>
  );
});

IconMaterialNestAudioSharpFilled.displayName = 'AmauiIconMaterialNestAudioSharpFilled';

export default IconMaterialNestAudioSharpFilled;
