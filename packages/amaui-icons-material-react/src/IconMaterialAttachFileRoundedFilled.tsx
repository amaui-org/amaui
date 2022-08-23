import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAttachFileRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttachFileRoundedFilled'
      short_name='AttachFile'

      {...props}
    >
      <path d="M11.5 22Q9.2 22 7.6 20.4Q6 18.8 6 16.5V6Q6 4.35 7.175 3.175Q8.35 2 10 2Q11.65 2 12.825 3.175Q14 4.35 14 6V15.5Q14 16.55 13.275 17.275Q12.55 18 11.5 18Q10.45 18 9.725 17.275Q9 16.55 9 15.5V6.75Q9 6.425 9.213 6.213Q9.425 6 9.75 6Q10.075 6 10.288 6.213Q10.5 6.425 10.5 6.75V15.5Q10.5 15.925 10.788 16.212Q11.075 16.5 11.5 16.5Q11.925 16.5 12.213 16.212Q12.5 15.925 12.5 15.5V6Q12.5 4.95 11.775 4.225Q11.05 3.5 10 3.5Q8.95 3.5 8.225 4.225Q7.5 4.95 7.5 6V16.5Q7.5 18.15 8.675 19.325Q9.85 20.5 11.5 20.5Q13.15 20.5 14.325 19.325Q15.5 18.15 15.5 16.5V6.75Q15.5 6.425 15.713 6.213Q15.925 6 16.25 6Q16.575 6 16.788 6.213Q17 6.425 17 6.75V16.5Q17 18.8 15.4 20.4Q13.8 22 11.5 22Z"/>
    </Icon>
  );
});

IconMaterialAttachFileRoundedFilled.displayName = 'AmauiIconMaterialAttachFileRoundedFilled';

export default IconMaterialAttachFileRoundedFilled;
