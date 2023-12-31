import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkdownCopyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkdownCopyW100'

      short_name='MarkdownCopy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M366-292q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h296q26 0 43 17t17 43v416q0 26-17 43t-43 17H366Zm0-28h296q12 0 22-10t10-22v-416q0-12-10-22t-22-10H366q-12 0-22 10t-10 22v416q0 12 10 22t22 10ZM258-184q-26 0-43-17t-17-43v-430q0-6 4-10t10-4q6 0 10 4t4 10v430q0 12 10 22t22 10h310q6 0 10 4t4 10q0 6-4 10t-10 4H258Zm170-452h72v106q0 6 4 10t10 4q6 0 10-4t4-10v-106h72v166q0 6 4 10t10 4q6 0 10-4t4-10v-166q0-12-8-20t-20-8H428q-12 0-20 8t-8 20v166q0 6 4 10t10 4q6 0 10-4t4-10v-166Zm-94 316v-480 480Z"/>
    </Icon>
  );
});

IconMaterialMarkdownCopyW100.displayName = 'AmauiIconMaterialMarkdownCopyW100';

export default IconMaterialMarkdownCopyW100;
