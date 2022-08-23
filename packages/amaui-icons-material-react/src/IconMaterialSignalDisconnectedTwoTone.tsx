import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSignalDisconnectedTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalDisconnectedTwoTone'
      short_name='SignalDisconnected'

      {...props}
    >
      <path d="M17.1 14.275 15.875 13.05Q16.425 12.4 16.712 11.612Q17 10.825 17 10Q17 9.1 16.625 8.175Q16.25 7.25 15.5 6.5L16.7 5.3Q17.675 6.275 18.188 7.5Q18.7 8.725 18.7 10Q18.7 11.15 18.3 12.237Q17.9 13.325 17.1 14.275ZM14.125 11.3 10.7 7.875Q10.975 7.7 11.312 7.6Q11.65 7.5 12 7.5Q13.05 7.5 13.775 8.225Q14.5 8.95 14.5 10Q14.5 10.35 14.4 10.675Q14.3 11 14.125 11.3ZM19.5 16.65 18.3 15.45Q19.325 14.275 19.812 12.862Q20.3 11.45 20.3 10Q20.3 8.425 19.7 6.862Q19.1 5.3 17.9 4.1L19.1 2.9Q20.525 4.4 21.263 6.225Q22 8.05 22 10Q22 11.825 21.4 13.512Q20.8 15.2 19.5 16.65ZM19.775 22.6 13 15.825V21H11V13.825L7 9.85Q7 9.9 7 9.925Q7 9.95 7 10Q7 10.9 7.375 11.825Q7.75 12.75 8.5 13.5L7.3 14.7Q6.325 13.725 5.812 12.5Q5.3 11.275 5.3 10Q5.3 9.575 5.35 9.175Q5.4 8.775 5.525 8.35L4.25 7.075Q3.975 7.8 3.838 8.537Q3.7 9.275 3.7 10Q3.7 11.575 4.3 13.137Q4.9 14.7 6.1 15.9L4.9 17.1Q3.475 15.6 2.737 13.775Q2 11.95 2 10Q2 8.9 2.237 7.837Q2.475 6.775 2.95 5.775L1.4 4.225L2.8 2.8L21.2 21.2Z"/>
    </Icon>
  );
});

IconMaterialSignalDisconnectedTwoTone.displayName = 'AmauiIconMaterialSignalDisconnectedTwoTone';

export default IconMaterialSignalDisconnectedTwoTone;
