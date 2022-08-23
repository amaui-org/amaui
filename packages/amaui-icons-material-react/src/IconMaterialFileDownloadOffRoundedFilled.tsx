import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFileDownloadOffRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileDownloadOffRoundedFilled'
      short_name='FileDownloadOff'

      {...props}
    >
      <path d="M19.075 21.9 17.15 20Q17.15 20 17.15 20Q17.15 20 17.15 20H6Q5.175 20 4.588 19.413Q4 18.825 4 18V16Q4 15.575 4.287 15.287Q4.575 15 5 15Q5.425 15 5.713 15.287Q6 15.575 6 16V18Q6 18 6 18Q6 18 6 18H15.15L12.575 15.425Q12.425 15.5 12.288 15.537Q12.15 15.575 12 15.575Q11.75 15.575 11.588 15.5Q11.425 15.425 11.3 15.3L7.7 11.7Q7.425 11.425 7.413 11.062Q7.4 10.7 7.6 10.45Q7.6 10.45 7.6 10.45Q7.6 10.45 7.6 10.45L2.075 4.925Q1.8 4.65 1.8 4.225Q1.8 3.8 2.1 3.5Q2.375 3.225 2.8 3.225Q3.225 3.225 3.525 3.5L20.5 20.5Q20.775 20.775 20.775 21.2Q20.775 21.625 20.5 21.9Q20.2 22.2 19.775 22.2Q19.35 22.2 19.075 21.9ZM20 17.15 18.225 15.375Q18.35 15.225 18.538 15.113Q18.725 15 19 15Q19.425 15 19.712 15.287Q20 15.575 20 16ZM15.425 12.575 14 11.15 14.875 10.275Q15.15 10 15.588 10.012Q16.025 10.025 16.3 10.3Q16.575 10.575 16.575 11Q16.575 11.425 16.3 11.7ZM13 10.15 11 8.15V5Q11 4.575 11.288 4.287Q11.575 4 12 4Q12.425 4 12.713 4.287Q13 4.575 13 5Z"/>
    </Icon>
  );
});

IconMaterialFileDownloadOffRoundedFilled.displayName = 'AmauiIconMaterialFileDownloadOffRoundedFilled';

export default IconMaterialFileDownloadOffRoundedFilled;
