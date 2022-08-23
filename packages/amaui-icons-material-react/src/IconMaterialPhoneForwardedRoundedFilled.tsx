import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhoneForwardedRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneForwardedRoundedFilled'
      short_name='PhoneForwarded'

      {...props}
    >
      <path d="M17.3 9.375Q17 9.075 17 8.662Q17 8.25 17.3 7.95L18.2 7.05H14.05Q13.625 7.05 13.338 6.762Q13.05 6.475 13.05 6.05Q13.05 5.625 13.338 5.338Q13.625 5.05 14.05 5.05H18.2L17.3 4.15Q17 3.85 17.013 3.45Q17.025 3.05 17.3 2.75Q17.6 2.45 18.013 2.437Q18.425 2.425 18.725 2.725L21.35 5.35Q21.5 5.5 21.562 5.675Q21.625 5.85 21.625 6.05Q21.625 6.25 21.562 6.425Q21.5 6.6 21.35 6.75L18.7 9.4Q18.4 9.7 18 9.688Q17.6 9.675 17.3 9.375ZM19.95 21Q16.725 21 13.663 19.562Q10.6 18.125 8.238 15.762Q5.875 13.4 4.438 10.337Q3 7.275 3 4.05Q3 3.6 3.3 3.3Q3.6 3 4.05 3H8.1Q8.45 3 8.725 3.225Q9 3.45 9.05 3.8L9.7 7.3Q9.75 7.65 9.688 7.937Q9.625 8.225 9.4 8.45L7 10.9Q8.05 12.7 9.625 14.275Q11.2 15.85 13.1 17L15.45 14.65Q15.675 14.425 16.038 14.312Q16.4 14.2 16.75 14.25L20.2 14.95Q20.55 15.025 20.775 15.287Q21 15.55 21 15.9V19.95Q21 20.4 20.7 20.7Q20.4 21 19.95 21Z"/>
    </Icon>
  );
});

IconMaterialPhoneForwardedRoundedFilled.displayName = 'AmauiIconMaterialPhoneForwardedRoundedFilled';

export default IconMaterialPhoneForwardedRoundedFilled;
