import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThunderstormSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThunderstormSharp'
      short_name='Thunderstorm'

      {...props}
    >
      <path d="M11.55 24 13.9 21.325 11.9 20.325 14.8 17H17.45L15.1 19.675L17.1 20.675L14.2 24ZM5.55 24 7.9 21.325 5.9 20.325 8.8 17H11.45L9.1 19.675L11.1 20.675L8.2 24ZM7.5 16Q5.225 16 3.613 14.387Q2 12.775 2 10.5Q2 8.425 3.375 6.875Q4.75 5.325 6.775 5.05Q7.575 3.625 8.963 2.812Q10.35 2 12 2Q14.25 2 15.912 3.438Q17.575 4.875 17.925 7.025Q19.65 7.175 20.825 8.45Q22 9.725 22 11.5Q22 13.375 20.688 14.688Q19.375 16 17.5 16ZM7.5 14H17.5Q18.55 14 19.275 13.275Q20 12.55 20 11.5Q20 10.45 19.275 9.725Q18.55 9 17.5 9H16V8Q16 6.35 14.825 5.175Q13.65 4 12 4Q10.8 4 9.812 4.65Q8.825 5.3 8.325 6.4L8.075 7H7.45Q6.025 7.05 5.013 8.062Q4 9.075 4 10.5Q4 11.95 5.025 12.975Q6.05 14 7.5 14ZM12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9Q12 9 12 9Z"/>
    </Icon>
  );
});

IconMaterialThunderstormSharp.displayName = 'AmauiIconMaterialThunderstormSharp';

export default IconMaterialThunderstormSharp;
