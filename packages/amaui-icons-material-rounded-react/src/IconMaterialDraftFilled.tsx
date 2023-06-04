import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDraftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DraftFilled'

      short_name='Draft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 22q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h7.175q.4 0 .763.15.362.15.637.425l4.85 4.85q.275.275.425.637.15.363.15.763V20q0 .825-.587 1.413Q18.825 22 18 22Zm7-14q0 .425.288.712Q13.575 9 14 9h4l-5-5Z"/>
    </Icon>
  );
});

IconMaterialDraftFilled.displayName = 'AmauiIconMaterialDraftFilled';

export default IconMaterialDraftFilled;
