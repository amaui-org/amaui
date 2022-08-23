import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWorkRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkRoundedW100'
      short_name='Work'

      {...props}
    >
      <path d="M4.8 19.7Q4.15 19.7 3.725 19.275Q3.3 18.85 3.3 18.2V8.8Q3.3 8.15 3.725 7.725Q4.15 7.3 4.8 7.3H9.3V6.1Q9.3 5.45 9.725 5.025Q10.15 4.6 10.8 4.6H13.2Q13.85 4.6 14.275 5.025Q14.7 5.45 14.7 6.1V7.3H19.2Q19.85 7.3 20.275 7.725Q20.7 8.15 20.7 8.8V18.2Q20.7 18.85 20.275 19.275Q19.85 19.7 19.2 19.7ZM10 7.3H14V6.1Q14 5.8 13.75 5.55Q13.5 5.3 13.2 5.3H10.8Q10.5 5.3 10.25 5.55Q10 5.8 10 6.1ZM4.8 19H19.2Q19.5 19 19.75 18.75Q20 18.5 20 18.2V8.8Q20 8.5 19.75 8.25Q19.5 8 19.2 8H4.8Q4.5 8 4.25 8.25Q4 8.5 4 8.8V18.2Q4 18.5 4.25 18.75Q4.5 19 4.8 19ZM4 19Q4 19 4 18.775Q4 18.55 4 18.2V8.8Q4 8.45 4 8.225Q4 8 4 8Q4 8 4 8.225Q4 8.45 4 8.8V18.2Q4 18.55 4 18.775Q4 19 4 19Z"/>
    </Icon>
  );
});

IconMaterialWorkRoundedW100.displayName = 'AmauiIconMaterialWorkRoundedW100';

export default IconMaterialWorkRoundedW100;
