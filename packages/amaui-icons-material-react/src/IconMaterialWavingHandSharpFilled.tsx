import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWavingHandSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WavingHandSharpFilled'
      short_name='WavingHand'

      {...props}
    >
      <path d="M17 23V21.5Q18.875 21.5 20.188 20.188Q21.5 18.875 21.5 17H23Q23 19.5 21.25 21.25Q19.5 23 17 23ZM1 7Q1 4.5 2.75 2.75Q4.5 1 7 1V2.5Q5.125 2.5 3.812 3.812Q2.5 5.125 2.5 7ZM3.4 20.6Q2.2 19.4 1.6 17.875Q1 16.35 1 14.762Q1 13.175 1.6 11.65Q2.2 10.125 3.4 8.925L8.9 3.425L10.675 5.2L5.725 10.15Q6.725 10.95 6.95 12.287Q7.175 13.625 6.075 14.75L6.775 15.45Q7.8 14.5 7.938 12.925Q8.075 11.35 7.1 10.175L15.6 1.675L17.375 3.45L11.025 9.8L11.725 10.5L19.5 2.725L21.275 4.5L13.5 12.275L14.2 12.975L20.9 6.275L22.675 8.05L15.25 15.475L15.95 16.175L21.275 10.85L23.05 12.625L15.075 20.6Q13.875 21.8 12.35 22.4Q10.825 23 9.238 23Q7.65 23 6.125 22.4Q4.6 21.8 3.4 20.6Z"/>
    </Icon>
  );
});

IconMaterialWavingHandSharpFilled.displayName = 'AmauiIconMaterialWavingHandSharpFilled';

export default IconMaterialWavingHandSharpFilled;
