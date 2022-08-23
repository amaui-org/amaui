import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStrollerRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StrollerRoundedFilled'
      short_name='Stroller'

      {...props}
    >
      <path d="M16 22Q15.175 22 14.588 21.413Q14 20.825 14 20Q14 19.175 14.588 18.587Q15.175 18 16 18Q16.825 18 17.413 18.587Q18 19.175 18 20Q18 20.825 17.413 21.413Q16.825 22 16 22ZM6 22Q5.175 22 4.588 21.413Q4 20.825 4 20Q4 19.175 4.588 18.587Q5.175 18 6 18Q6.825 18 7.412 18.587Q8 19.175 8 20Q8 20.825 7.412 21.413Q6.825 22 6 22ZM7.425 17Q6.775 17 6.513 16.425Q6.25 15.85 6.675 15.35L16.2 4.175Q16.7 3.6 17.312 3.3Q17.925 3 18.65 3Q19.925 3 20.837 3.775Q21.75 4.55 21.95 5.75Q22.05 6.25 21.812 6.625Q21.575 7 21 7Q20.65 7 20.375 6.75Q20.1 6.5 20 6.125Q19.875 5.6 19.513 5.3Q19.15 5 18.65 5Q18.375 5 18.163 5.1Q17.95 5.2 17.775 5.4L17 6.275V15Q17 15.825 16.413 16.413Q15.825 17 15 17ZM9.6 9.6 6.375 6.375Q6.05 6.05 5.913 5.7Q5.775 5.35 5.775 5Q5.775 4.575 6.025 4.187Q6.275 3.8 6.775 3.6Q7.525 3.3 8.325 3.15Q9.125 3 10 3Q11.175 3 12.263 3.287Q13.35 3.575 14.3 4.1Z"/>
    </Icon>
  );
});

IconMaterialStrollerRoundedFilled.displayName = 'AmauiIconMaterialStrollerRoundedFilled';

export default IconMaterialStrollerRoundedFilled;
