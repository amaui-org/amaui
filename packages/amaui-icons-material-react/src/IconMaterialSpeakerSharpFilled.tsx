import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpeakerSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeakerSharpFilled'
      short_name='Speaker'

      {...props}
    >
      <path d="M5 22V2H19V22ZM12 9Q12.825 9 13.413 8.412Q14 7.825 14 7Q14 6.175 13.413 5.588Q12.825 5 12 5Q11.175 5 10.588 5.588Q10 6.175 10 7Q10 7.825 10.588 8.412Q11.175 9 12 9ZM12 19Q13.65 19 14.825 17.825Q16 16.65 16 15Q16 13.35 14.825 12.175Q13.65 11 12 11Q10.35 11 9.175 12.175Q8 13.35 8 15Q8 16.65 9.175 17.825Q10.35 19 12 19ZM12 17Q11.175 17 10.588 16.413Q10 15.825 10 15Q10 14.175 10.588 13.587Q11.175 13 12 13Q12.825 13 13.413 13.587Q14 14.175 14 15Q14 15.825 13.413 16.413Q12.825 17 12 17Z"/>
    </Icon>
  );
});

IconMaterialSpeakerSharpFilled.displayName = 'AmauiIconMaterialSpeakerSharpFilled';

export default IconMaterialSpeakerSharpFilled;
