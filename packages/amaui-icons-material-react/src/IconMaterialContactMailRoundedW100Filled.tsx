import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialContactMailRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactMailRoundedW100Filled'
      short_name='ContactMail'

      {...props}
    >
      <path d="M2.8 19.2Q2.15 19.2 1.725 18.775Q1.3 18.35 1.3 17.7V6.3Q1.3 5.65 1.725 5.225Q2.15 4.8 2.8 4.8H21.2Q21.85 4.8 22.275 5.225Q22.7 5.65 22.7 6.3V17.7Q22.7 18.35 22.275 18.775Q21.85 19.2 21.2 19.2ZM9 14.3Q9.975 14.3 10.663 13.612Q11.35 12.925 11.35 11.95Q11.35 10.975 10.663 10.287Q9.975 9.6 9 9.6Q8.025 9.6 7.338 10.287Q6.65 10.975 6.65 11.95Q6.65 12.925 7.338 13.612Q8.025 14.3 9 14.3ZM15 11.25H20Q20.325 11.25 20.538 11.037Q20.75 10.825 20.75 10.5V7.5Q20.75 7.175 20.538 6.963Q20.325 6.75 20 6.75H15Q14.675 6.75 14.463 6.963Q14.25 7.175 14.25 7.5V10.5Q14.25 10.825 14.463 11.037Q14.675 11.25 15 11.25ZM17.5 10.2 15.05 8.45V7.6L17.5 9.3L19.95 7.6V8.45ZM3.55 18.5H14.45Q13.4 17.3 12 16.55Q10.6 15.8 9 15.8Q7.4 15.8 6 16.55Q4.6 17.3 3.55 18.5Z"/>
    </Icon>
  );
});

IconMaterialContactMailRoundedW100Filled.displayName = 'AmauiIconMaterialContactMailRoundedW100Filled';

export default IconMaterialContactMailRoundedW100Filled;
