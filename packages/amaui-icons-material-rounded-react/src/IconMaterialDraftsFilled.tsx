import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDraftsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DraftsFilled'

      short_name='Drafts'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21q-.825 0-1.412-.587Q2 19.825 2 19V8.15q0-.525.25-1t.7-.75l8.025-4.8q.25-.15.5-.213.25-.062.525-.062t.525.062q.25.063.5.213l8.025 4.8q.45.275.7.75.25.475.25 1V19q0 .825-.587 1.413Q20.825 21 20 21Zm8-8.525q.125 0 .25-.025t.25-.1L19.8 8l-7.3-4.35q-.125-.075-.25-.1-.125-.025-.25-.025t-.25.025q-.125.025-.25.1L4.2 8l7.3 4.35q.125.075.25.1.125.025.25.025Z"/>
    </Icon>
  );
});

IconMaterialDraftsFilled.displayName = 'AmauiIconMaterialDraftsFilled';

export default IconMaterialDraftsFilled;
