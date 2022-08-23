import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSurroundSoundRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SurroundSoundRoundedFilled'
      short_name='SurroundSound'

      {...props}
    >
      <path d="M12 15Q13.25 15 14.125 14.125Q15 13.25 15 12Q15 10.75 14.125 9.875Q13.25 9 12 9Q10.75 9 9.875 9.875Q9 10.75 9 12Q9 13.25 9.875 14.125Q10.75 15 12 15ZM17.675 16.1Q18.325 15.2 18.663 14.162Q19 13.125 19 12Q19 10.875 18.663 9.837Q18.325 8.8 17.675 7.9Q17.4 7.55 16.95 7.525Q16.5 7.5 16.15 7.85Q15.9 8.1 15.9 8.45Q15.9 8.8 16.1 9.1Q16.55 9.75 16.775 10.488Q17 11.225 17 12Q17 12.775 16.775 13.512Q16.55 14.25 16.1 14.9Q15.9 15.2 15.9 15.55Q15.9 15.9 16.15 16.15Q16.5 16.5 16.95 16.475Q17.4 16.45 17.675 16.1ZM7.85 16.15Q8.1 15.9 8.1 15.55Q8.1 15.2 7.9 14.9Q7.45 14.25 7.225 13.512Q7 12.775 7 12Q7 11.225 7.225 10.488Q7.45 9.75 7.9 9.1Q8.1 8.8 8.1 8.45Q8.1 8.1 7.85 7.85Q7.5 7.5 7.05 7.525Q6.6 7.55 6.325 7.9Q5.675 8.8 5.338 9.837Q5 10.875 5 12Q5 13.125 5.338 14.162Q5.675 15.2 6.325 16.1Q6.6 16.45 7.05 16.475Q7.5 16.5 7.85 16.15ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialSurroundSoundRoundedFilled.displayName = 'AmauiIconMaterialSurroundSoundRoundedFilled';

export default IconMaterialSurroundSoundRoundedFilled;
