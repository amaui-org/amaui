import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSanitizerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SanitizerW100'

      short_name='Sanitizer'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.4 8.45q-.425 0-.725-.3t-.3-.725q0-.275.275-.763.275-.487.75-1.062.475.575.75 1.062.275.488.275.763 0 .425-.3.725t-.725.3Zm2.125 5.6q-.675 0-1.15-.475-.475-.475-.475-1.15 0-.575.488-1.413.487-.837 1.137-1.637.65.8 1.138 1.637.487.838.487 1.413 0 .675-.475 1.15-.475.475-1.15.475ZM10.1 16.9h.7v-2h2v-.7h-2v-2h-.7v2h-2v.7h2ZM7.35 20q-.65 0-1.075-.425-.425-.425-.425-1.075V12q0-1.8 1.212-3.113Q8.275 7.575 10.1 7.4V4.7H8.4V4H13q.5 0 .925.125.425.125.825.325l-.525.525q-.275-.125-.587-.2Q13.325 4.7 13 4.7h-2.2v2.7q1.825.175 3.038 1.487Q15.05 10.2 15.05 12v6.5q0 .65-.425 1.075Q14.2 20 13.55 20Zm0-.7h6.2q.3 0 .55-.25.25-.25.25-.55V12q0-1.625-1.137-2.762Q12.075 8.1 10.45 8.1T7.688 9.238Q6.55 10.375 6.55 12v6.5q0 .3.25.55.25.25.55.25Zm0 0H6.55 14.35 13.55Z"/>
    </Icon>
  );
});

IconMaterialSanitizerW100.displayName = 'AmauiIconMaterialSanitizerW100';

export default IconMaterialSanitizerW100;
