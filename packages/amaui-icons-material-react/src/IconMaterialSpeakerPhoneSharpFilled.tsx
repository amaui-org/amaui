import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpeakerPhoneSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeakerPhoneSharpFilled'
      short_name='SpeakerPhone'

      {...props}
    >
      <path d="M8.45 8.5 7 7.05Q8.025 6.075 9.312 5.537Q10.6 5 12 5Q13.4 5 14.688 5.537Q15.975 6.075 17 7.05L15.55 8.5Q14.825 7.775 13.925 7.387Q13.025 7 12 7Q10.975 7 10.075 7.387Q9.175 7.775 8.45 8.5ZM5.65 5.6 4.25 4.2Q5.825 2.65 7.812 1.825Q9.8 1 12 1Q14.2 1 16.188 1.825Q18.175 2.65 19.75 4.2L18.35 5.6Q17.075 4.35 15.425 3.675Q13.775 3 12 3Q10.225 3 8.575 3.675Q6.925 4.35 5.65 5.6ZM8 22V10H16V22Z"/>
    </Icon>
  );
});

IconMaterialSpeakerPhoneSharpFilled.displayName = 'AmauiIconMaterialSpeakerPhoneSharpFilled';

export default IconMaterialSpeakerPhoneSharpFilled;
