import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeSpeakerSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeSpeakerSharpFilled'
      short_name='HomeSpeaker'

      {...props}
    >
      <path d="M9.575 21Q7.75 21 6.55 19.637Q5.35 18.275 5.6 16.475L6.975 6.175Q7.025 5.9 7.175 5.687Q7.325 5.475 7.6 5.375L15.5 2.225Q15.95 2.025 16.375 2.287Q16.8 2.55 16.85 3.05L18.45 16.525Q18.675 18.325 17.488 19.663Q16.3 21 14.5 21ZM8.225 12H15.9L15 4.575L8.9 7.025ZM9.575 19H14.5Q15.15 19 15.875 18.45Q16.6 17.9 16.475 16.75L16.15 14H7.95L7.6 16.725Q7.45 17.875 8.2 18.438Q8.95 19 9.575 19Z"/>
    </Icon>
  );
});

IconMaterialHomeSpeakerSharpFilled.displayName = 'AmauiIconMaterialHomeSpeakerSharpFilled';

export default IconMaterialHomeSpeakerSharpFilled;
