import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTaskFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TaskFilled'

      short_name='Task'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 22q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h7.175q.4 0 .763.15.362.15.637.425l4.85 4.85q.275.275.425.637.15.363.15.763V20q0 .825-.587 1.413Q18.825 22 18 22Zm7-14q0 .425.288.712Q13.575 9 14 9h4l-5-5Zm-2.075 7.125-1.4-1.4q-.15-.15-.325-.225-.175-.075-.362-.075-.188 0-.375.075-.188.075-.338.225-.3.3-.3.713 0 .412.3.712l2.125 2.15q.15.15.325.212.175.063.375.063t.375-.063q.175-.062.325-.212l4.225-4.225q.3-.3.3-.725t-.3-.725q-.3-.3-.725-.3t-.725.3Z"/>
    </Icon>
  );
});

IconMaterialTaskFilled.displayName = 'AmauiIconMaterialTaskFilled';

export default IconMaterialTaskFilled;
