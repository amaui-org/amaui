import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpeakerPhoneRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeakerPhoneRoundedFilled'
      short_name='SpeakerPhone'

      {...props}
    >
      <path d="M14 22H10Q9.175 22 8.588 21.413Q8 20.825 8 20V12Q8 11.175 8.588 10.587Q9.175 10 10 10H14Q14.825 10 15.413 10.587Q16 11.175 16 12V20Q16 20.825 15.413 21.413Q14.825 22 14 22ZM7.725 7.775Q7.425 7.475 7.425 7.062Q7.425 6.65 7.775 6.4Q8.7 5.725 9.775 5.362Q10.85 5 12 5Q13.15 5 14.225 5.362Q15.3 5.725 16.225 6.4Q16.575 6.65 16.587 7.05Q16.6 7.45 16.275 7.775Q16 8.05 15.575 8.075Q15.15 8.1 14.775 7.85Q14.175 7.425 13.463 7.213Q12.75 7 12 7Q11.25 7 10.538 7.213Q9.825 7.425 9.225 7.85Q8.85 8.1 8.425 8.075Q8 8.05 7.725 7.775ZM4.95 4.9Q4.65 4.6 4.662 4.2Q4.675 3.8 4.975 3.55Q6.475 2.3 8.263 1.65Q10.05 1 12 1Q13.95 1 15.738 1.65Q17.525 2.3 19.025 3.55Q19.325 3.8 19.338 4.2Q19.35 4.6 19.05 4.9Q18.775 5.175 18.363 5.2Q17.95 5.225 17.6 4.95Q16.4 4 14.963 3.5Q13.525 3 12 3Q10.475 3 9.038 3.5Q7.6 4 6.4 4.95Q6.05 5.225 5.638 5.2Q5.225 5.175 4.95 4.9Z"/>
    </Icon>
  );
});

IconMaterialSpeakerPhoneRoundedFilled.displayName = 'AmauiIconMaterialSpeakerPhoneRoundedFilled';

export default IconMaterialSpeakerPhoneRoundedFilled;
