import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCreditCardClockFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreditCardClockFilled'

      short_name='CreditCardClock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M740-288v-92q0-8-6-14t-14-6q-8 0-14 6t-6 14v91q0 8 3 15.5t9 13.5l61 61q6 6 14 6t14-6q6-6 6-14t-6-14l-61-61ZM721-80q-84 0-142.5-58T520-280q0-84 58.5-142T721-480q83 0 141 58.5T920-280q0 83-58 141.5T721-80Zm-561-80q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v153q0 17-11.5 28.5T840-527q-17 0-28.5-11.5T800-567v-73H160v160h300q17 0 25 16t-3 31q-22 33-34 72t-12 81q0 19 2.5 37.5T446-207q5 17-5.5 32T413-160H160Z"/>
    </Icon>
  );
});

IconMaterialCreditCardClockFilled.displayName = 'AmauiIconMaterialCreditCardClockFilled';

export default IconMaterialCreditCardClockFilled;
