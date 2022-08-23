import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialContactPhoneRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactPhoneRoundedFilled'
      short_name='ContactPhone'

      {...props}
    >
      <path d="M2 21Q1.175 21 0.588 20.413Q0 19.825 0 19V5Q0 4.175 0.588 3.587Q1.175 3 2 3H22Q22.825 3 23.413 3.587Q24 4.175 24 5V19Q24 19.825 23.413 20.413Q22.825 21 22 21ZM9 14Q10.25 14 11.125 13.125Q12 12.25 12 11Q12 9.75 11.125 8.875Q10.25 8 9 8Q7.75 8 6.875 8.875Q6 9.75 6 11Q6 12.25 6.875 13.125Q7.75 14 9 14ZM18.275 17.375Q18.55 17.65 18.975 17.625Q19.4 17.6 19.675 17.325L20.375 16.625Q20.65 16.35 20.675 15.975Q20.7 15.6 20.475 15.3L19.8 14.4Q19.675 14.2 19.462 14.1Q19.25 14 19 14H17.85Q17.7 13.55 17.6 13.037Q17.5 12.525 17.5 12Q17.5 11.475 17.6 10.988Q17.7 10.5 17.85 10H19Q19.25 10 19.462 9.9Q19.675 9.8 19.8 9.6L20.475 8.7Q20.7 8.4 20.675 8.025Q20.65 7.65 20.375 7.375L19.675 6.675Q19.4 6.4 18.975 6.375Q18.55 6.35 18.275 6.625Q17.225 7.675 16.613 9.088Q16 10.5 16 12Q16 13.5 16.613 14.912Q17.225 16.325 18.275 17.375ZM2.1 19H15.9Q14.85 17.125 13 16.062Q11.15 15 9 15Q6.85 15 5 16.062Q3.15 17.125 2.1 19Z"/>
    </Icon>
  );
});

IconMaterialContactPhoneRoundedFilled.displayName = 'AmauiIconMaterialContactPhoneRoundedFilled';

export default IconMaterialContactPhoneRoundedFilled;
