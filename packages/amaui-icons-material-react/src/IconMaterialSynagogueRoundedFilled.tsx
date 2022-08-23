import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSynagogueRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SynagogueRoundedFilled'
      short_name='Synagogue'

      {...props}
    >
      <path d="M19 8V7Q19 6.175 19.587 5.588Q20.175 5 21 5Q21.825 5 22.413 5.588Q23 6.175 23 7V8ZM1 8V7Q1 6.175 1.588 5.588Q2.175 5 3 5Q3.825 5 4.412 5.588Q5 6.175 5 7V8ZM3 21Q2.175 21 1.588 20.413Q1 19.825 1 19V9H5V21ZM6 21V8.925Q6 8.475 6.188 8.075Q6.375 7.675 6.725 7.4L10.725 4.075Q11 3.85 11.325 3.725Q11.65 3.6 12 3.6Q12.35 3.6 12.675 3.725Q13 3.85 13.275 4.075L17.275 7.4Q17.625 7.675 17.812 8.075Q18 8.475 18 8.925V21H14V16Q14 15.175 13.413 14.587Q12.825 14 12 14Q11.175 14 10.588 14.587Q10 15.175 10 16V21ZM19 21V9H23V19Q23 19.825 22.413 20.413Q21.825 21 21 21ZM12 11.5Q12.625 11.5 13.062 11.062Q13.5 10.625 13.5 10Q13.5 9.375 13.062 8.938Q12.625 8.5 12 8.5Q11.375 8.5 10.938 8.938Q10.5 9.375 10.5 10Q10.5 10.625 10.938 11.062Q11.375 11.5 12 11.5Z"/>
    </Icon>
  );
});

IconMaterialSynagogueRoundedFilled.displayName = 'AmauiIconMaterialSynagogueRoundedFilled';

export default IconMaterialSynagogueRoundedFilled;
