import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpeakerPhoneSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeakerPhoneSharpW100Filled'
      short_name='SpeakerPhone'

      {...props}
    >
      <path d="M8.45 8.5 7.95 8Q8.775 7.175 9.825 6.738Q10.875 6.3 12 6.3Q13.125 6.3 14.175 6.738Q15.225 7.175 16.05 8L15.55 8.5Q14.825 7.775 13.925 7.387Q13.025 7 12 7Q10.975 7 10.075 7.387Q9.175 7.775 8.45 8.5ZM5.65 5.6 5.15 5.1Q6.5 3.75 8.288 3.025Q10.075 2.3 12 2.3Q13.925 2.3 15.713 3.025Q17.5 3.75 18.85 5.1L18.35 5.6Q17.075 4.35 15.425 3.675Q13.775 3 12 3Q10.225 3 8.575 3.675Q6.925 4.35 5.65 5.6ZM9 21V11H15V21Z"/>
    </Icon>
  );
});

IconMaterialSpeakerPhoneSharpW100Filled.displayName = 'AmauiIconMaterialSpeakerPhoneSharpW100Filled';

export default IconMaterialSpeakerPhoneSharpW100Filled;
