import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlumbingRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlumbingRoundedFilled'
      short_name='Plumbing'

      {...props}
    >
      <path d="M19.275 9.175 15.75 5.65 13.625 7.75 11.5 5.65 14.325 2.8Q14.625 2.5 15 2.362Q15.375 2.225 15.75 2.225Q16.15 2.225 16.513 2.362Q16.875 2.5 17.15 2.8L19.275 4.925Q19.725 5.35 19.938 5.912Q20.15 6.475 20.15 7.05Q20.15 7.625 19.938 8.175Q19.725 8.725 19.275 9.175ZM5.5 13.775Q5.05 13.325 5.05 12.712Q5.05 12.1 5.5 11.65L7.95 9.175L10.075 11.3L7.6 13.775Q7.175 14.225 6.562 14.225Q5.95 14.225 5.5 13.775ZM4.425 21.2Q4.15 20.9 4 20.538Q3.85 20.175 3.85 19.775Q3.85 19.375 4 19Q4.15 18.625 4.425 18.35L11.5 11.3L8.325 8.1Q7.875 7.675 7.875 7.062Q7.875 6.45 8.325 6Q8.75 5.55 9.375 5.55Q10 5.55 10.45 6L13.625 9.175L15.05 7.75L17.85 10.6Q18.15 10.9 18.15 11.3Q18.15 11.7 17.85 12Q17.55 12.3 17.15 12.3Q16.75 12.3 16.45 12L7.25 21.2Q6.975 21.475 6.613 21.625Q6.25 21.775 5.85 21.775Q5.475 21.775 5.1 21.625Q4.725 21.475 4.425 21.2Z"/>
    </Icon>
  );
});

IconMaterialPlumbingRoundedFilled.displayName = 'AmauiIconMaterialPlumbingRoundedFilled';

export default IconMaterialPlumbingRoundedFilled;
