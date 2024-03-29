import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRebaseEditFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RebaseEditFilled'

      short_name='RebaseEdit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 22q-1.25 0-2.125-.875T2 19q0-.975.562-1.738Q3.125 16.5 4 16.175v-8.35Q3.125 7.5 2.562 6.737 2 5.975 2 5q0-1.25.875-2.125T5 2q.975 0 1.738.562Q7.5 3.125 7.825 4h3.35L10.05 2.875q-.275-.275-.275-.688 0-.412.275-.712.3-.3.713-.3.412 0 .712.3L14.3 4.3q.3.3.3.7 0 .4-.3.7l-2.85 2.85q-.15.15-.325.225-.175.075-.362.062-.188-.012-.375-.087-.188-.075-.338-.225-.275-.3-.288-.7-.012-.4.288-.7L11.175 6h-3.35q-.225.65-.7 1.125T6 7.825v8.35q.875.325 1.438 1.087Q8 18.025 8 19q0 1.25-.875 2.125T5 22ZM19 2q1.25 0 2.125.875T22 5q0 1.25-.875 2.125T19 8q-1.25 0-2.125-.875T16 5q0-1.25.875-2.125T19 2Zm-3.6 10.4 2.1 2.1 2.125 2.125-4.8 4.8q-.275.275-.637.425-.363.15-.763.15H11q-.425 0-.712-.288Q10 21.425 10 21v-2.425q0-.4.163-.763.162-.362.437-.637Zm5.3 3.175L16.425 11.3l.75-.725q.6-.6 1.438-.6.837 0 1.412.6l1.4 1.425q.575.575.575 1.4t-.575 1.4Z"/>
    </Icon>
  );
});

IconMaterialRebaseEditFilled.displayName = 'AmauiIconMaterialRebaseEditFilled';

export default IconMaterialRebaseEditFilled;
