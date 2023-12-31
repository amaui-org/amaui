import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkdownW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkdownW100'

      short_name='Markdown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m626-430-54-53q-4-4-10-4.5t-10 4.5q-4 4-3.5 10t4.5 10l66 66q9 9 21 9t21-9l67-67q4-4 4-9t-4-10q-4-5-10-4.5t-10 4.5l-54 53v-140q0-6-4-10t-10-4q-6 0-10 4t-4 10v140ZM192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm-32 0v-480 480Zm104-316h72v106q0 6 4 10t10 4q6 0 10-4t4-10v-106h72v166q0 6 4 10t10 4q6 0 10-4t4-10v-170q0-11-6.5-17.5T440-584H260q-11 0-17.5 6.5T236-560v170q0 6 4 10t10 4q6 0 10-4t4-10v-166Z"/>
    </Icon>
  );
});

IconMaterialMarkdownW100.displayName = 'AmauiIconMaterialMarkdownW100';

export default IconMaterialMarkdownW100;
