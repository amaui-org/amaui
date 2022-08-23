import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLooks4RoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks4RoundedW100'
      short_name='Looks4'

      {...props}
    >
      <path d="M14 16.35Q14.15 16.35 14.25 16.25Q14.35 16.15 14.35 16V7.975Q14.35 7.85 14.25 7.75Q14.15 7.65 14 7.65Q13.85 7.65 13.75 7.75Q13.65 7.85 13.65 8V11.65H10.35V7.975Q10.35 7.85 10.25 7.75Q10.15 7.65 10 7.65Q9.85 7.65 9.75 7.75Q9.65 7.85 9.65 8V12Q9.65 12.15 9.75 12.25Q9.85 12.35 10 12.35H13.65V16.025Q13.65 16.15 13.75 16.25Q13.85 16.35 14 16.35ZM5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7ZM5.8 19H18.2Q18.55 19 18.775 18.775Q19 18.55 19 18.2V5.8Q19 5.45 18.775 5.225Q18.55 5 18.2 5H5.8Q5.45 5 5.225 5.225Q5 5.45 5 5.8V18.2Q5 18.55 5.225 18.775Q5.45 19 5.8 19ZM5 5Q5 5 5 5.225Q5 5.45 5 5.8V18.2Q5 18.55 5 18.775Q5 19 5 19Q5 19 5 18.775Q5 18.55 5 18.2V5.8Q5 5.45 5 5.225Q5 5 5 5Z"/>
    </Icon>
  );
});

IconMaterialLooks4RoundedW100.displayName = 'AmauiIconMaterialLooks4RoundedW100';

export default IconMaterialLooks4RoundedW100;
