import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTimer3Alt1RoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Timer3Alt1RoundedFilled'
      short_name='Timer3Alt1'

      {...props}
    >
      <path d="M8.95 17.225V15.4H13.175V13.65H11.075V11.85H13.175V10.575H8.95V8.775H13.175Q14.05 8.775 14.675 9.3Q15.3 9.825 15.3 10.575V11.375Q15.3 11.95 14.838 12.35Q14.375 12.75 13.725 12.75Q14.375 12.75 14.838 13.137Q15.3 13.525 15.3 14.1V15.4Q15.3 16.15 14.675 16.688Q14.05 17.225 13.175 17.225ZM9 3V1H15V3ZM12 22Q10.15 22 8.512 21.288Q6.875 20.575 5.65 19.35Q4.425 18.125 3.712 16.488Q3 14.85 3 13Q3 11.15 3.712 9.512Q4.425 7.875 5.65 6.65Q6.875 5.425 8.512 4.713Q10.15 4 12 4Q13.55 4 14.975 4.5Q16.4 5 17.65 5.95L19.05 4.55L20.45 5.95L19.05 7.35Q20 8.6 20.5 10.025Q21 11.45 21 13Q21 14.85 20.288 16.488Q19.575 18.125 18.35 19.35Q17.125 20.575 15.488 21.288Q13.85 22 12 22ZM12 20Q14.9 20 16.95 17.95Q19 15.9 19 13Q19 10.1 16.95 8.05Q14.9 6 12 6Q9.1 6 7.05 8.05Q5 10.1 5 13Q5 15.9 7.05 17.95Q9.1 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialTimer3Alt1RoundedFilled.displayName = 'AmauiIconMaterialTimer3Alt1RoundedFilled';

export default IconMaterialTimer3Alt1RoundedFilled;
