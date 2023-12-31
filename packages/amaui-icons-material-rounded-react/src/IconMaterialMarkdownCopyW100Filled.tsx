import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkdownCopyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkdownCopyW100Filled'

      short_name='MarkdownCopy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M366-292q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h296q26 0 43 17t17 43v416q0 26-17 43t-43 17H366ZM257.607-184Q232-184 215-201t-17-43v-430q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v430q0 12 10 22t22 10h310q5.95 0 9.975 4.035 4.025 4.035 4.025 10T577.975-188q-4.025 4-9.975 4H257.607ZM428-636h72v106q0 6.067 3.953 10.033 3.954 3.967 10 3.967Q520-516 524-519.967q4-3.966 4-10.033v-106h72v166q0 6.067 3.953 10.033 3.954 3.967 10 3.967Q620-456 624-459.967q4-3.966 4-10.033v-166q0-11.9-8.05-19.95Q611.9-664 600-664H428q-11.9 0-19.95 8.05Q400-647.9 400-636v166q0 6.067 3.953 10.033 3.954 3.967 10 3.967Q420-456 424-459.967q4-3.966 4-10.033v-166Z"/>
    </Icon>
  );
});

IconMaterialMarkdownCopyW100Filled.displayName = 'AmauiIconMaterialMarkdownCopyW100Filled';

export default IconMaterialMarkdownCopyW100Filled;
