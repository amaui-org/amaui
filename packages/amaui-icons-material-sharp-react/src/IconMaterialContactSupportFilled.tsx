import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContactSupportFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactSupportFilled'

      short_name='ContactSupport'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 22-.25-3h-.25q-3.55 0-6.025-2.475Q3 14.05 3 10.5q0-3.55 2.475-6.025Q7.95 2 11.5 2q1.775 0 3.312.662 1.538.663 2.701 1.825 1.162 1.163 1.824 2.7Q20 8.725 20 10.5q0 3.8-2.275 6.812Q15.45 20.325 12 22Zm-.525-6.025q.425 0 .725-.3t.3-.725q0-.425-.3-.725t-.725-.3q-.425 0-.725.3t-.3.725q0 .425.3.725t.725.3ZM10.75 12.8h1.5q0-.75.15-1.05.15-.3.95-1.1.45-.45.75-.975.3-.525.3-1.125 0-1.275-.862-1.913Q12.675 6 11.5 6q-1.1 0-1.85.612Q8.9 7.225 8.6 8.1l1.4.55q.125-.425.475-.838.35-.412 1.025-.412.675 0 1.013.375.337.375.337.825 0 .425-.25.762-.25.338-.6.688-.875.75-1.062 1.187-.188.438-.188 1.563Z"/>
    </Icon>
  );
});

IconMaterialContactSupportFilled.displayName = 'AmauiIconMaterialContactSupportFilled';

export default IconMaterialContactSupportFilled;
