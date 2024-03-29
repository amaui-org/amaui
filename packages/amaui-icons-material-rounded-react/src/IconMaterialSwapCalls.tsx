import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwapCalls = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapCalls'

      short_name='SwapCalls'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 19q-1.65 0-2.825-1.175Q11 16.65 11 15V8q0-.825-.587-1.412Q9.825 6 9 6q-.825 0-1.412.588Q7 7.175 7 8v7.15l.9-.9q.275-.275.688-.275.412 0 .712.3t.288.725q-.013.425-.313.725L6.7 18.3q-.15.15-.325.212-.175.063-.375.063t-.375-.063Q5.45 18.45 5.3 18.3l-2.6-2.6q-.3-.3-.3-.712 0-.413.3-.713t.713-.3q.412 0 .712.3L5 15.15V8q0-1.65 1.175-2.825Q7.35 4 9 4q1.65 0 2.825 1.175Q13 6.35 13 8v7q0 .825.588 1.413Q14.175 17 15 17t1.413-.587Q17 15.825 17 15V7.85l-.9.9q-.275.275-.687.275-.413 0-.713-.3T14.413 8q.012-.425.312-.725L17.3 4.7q.15-.15.325-.213.175-.062.375-.062t.375.062q.175.063.325.213l2.6 2.6q.3.3.3.712 0 .413-.3.713t-.713.3q-.412 0-.712-.3L19 7.85V15q0 1.65-1.175 2.825Q16.65 19 15 19Z"/>
    </Icon>
  );
});

IconMaterialSwapCalls.displayName = 'AmauiIconMaterialSwapCalls';

export default IconMaterialSwapCalls;
