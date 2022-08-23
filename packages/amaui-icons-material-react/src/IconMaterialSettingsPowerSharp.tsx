import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSettingsPowerSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsPowerSharp'
      short_name='SettingsPower'

      {...props}
    >
      <path d="M11 12V2H13V12ZM12 19Q8.65 19 6.325 16.675Q4 14.35 4 11Q4 9.025 4.912 7.3Q5.825 5.575 7.45 4.45L8.9 5.9Q7.55 6.7 6.775 8.062Q6 9.425 6 11Q6 13.5 7.75 15.25Q9.5 17 12 17Q14.5 17 16.25 15.25Q18 13.5 18 11Q18 9.425 17.225 8.062Q16.45 6.7 15.1 5.9L16.55 4.45Q18.175 5.575 19.087 7.3Q20 9.025 20 11Q20 14.35 17.675 16.675Q15.35 19 12 19ZM8 24Q7.575 24 7.287 23.712Q7 23.425 7 23Q7 22.575 7.287 22.288Q7.575 22 8 22Q8.425 22 8.713 22.288Q9 22.575 9 23Q9 23.425 8.713 23.712Q8.425 24 8 24ZM12 24Q11.575 24 11.288 23.712Q11 23.425 11 23Q11 22.575 11.288 22.288Q11.575 22 12 22Q12.425 22 12.713 22.288Q13 22.575 13 23Q13 23.425 12.713 23.712Q12.425 24 12 24ZM16 24Q15.575 24 15.288 23.712Q15 23.425 15 23Q15 22.575 15.288 22.288Q15.575 22 16 22Q16.425 22 16.712 22.288Q17 22.575 17 23Q17 23.425 16.712 23.712Q16.425 24 16 24Z"/>
    </Icon>
  );
});

IconMaterialSettingsPowerSharp.displayName = 'AmauiIconMaterialSettingsPowerSharp';

export default IconMaterialSettingsPowerSharp;
