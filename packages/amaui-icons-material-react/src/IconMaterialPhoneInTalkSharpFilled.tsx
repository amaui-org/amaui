import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhoneInTalkSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneInTalkSharpFilled'
      short_name='PhoneInTalk'

      {...props}
    >
      <path d="M19 11.95Q19 9.025 16.962 6.987Q14.925 4.95 12 4.95V2.95Q13.875 2.95 15.513 3.662Q17.15 4.375 18.363 5.588Q19.575 6.8 20.288 8.438Q21 10.075 21 11.95ZM15 11.95Q15 10.7 14.125 9.825Q13.25 8.95 12 8.95V6.95Q14.075 6.95 15.538 8.412Q17 9.875 17 11.95ZM19.95 21Q16.725 21 13.663 19.575Q10.6 18.15 8.238 15.775Q5.875 13.4 4.438 10.337Q3 7.275 3 4.05Q3 3.8 3 3.525Q3 3.25 3.05 3H8.9L9.825 8.025L6.975 10.9Q8.025 12.7 9.613 14.275Q11.2 15.85 13.1 17L16 14.1L21 15.1V20.95Q20.75 20.975 20.475 20.988Q20.2 21 19.95 21Z"/>
    </Icon>
  );
});

IconMaterialPhoneInTalkSharpFilled.displayName = 'AmauiIconMaterialPhoneInTalkSharpFilled';

export default IconMaterialPhoneInTalkSharpFilled;
