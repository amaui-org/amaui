import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMatter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Matter'

      short_name='Matter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 10.5q-1.65 0-3.075-.613Q7.5 9.275 6.4 8.2l1.8-1.075q.6.5 1.3.825.7.325 1.5.45V3.1l1-.6 1 .6v5.3q.8-.125 1.5-.45t1.3-.825L17.6 8.2q-1.1 1.075-2.525 1.687Q13.65 10.5 12 10.5Zm-1.225 9.375-1.85-.975q.05-.225.063-.45Q9 18.225 9 18q0-.575-.1-1.137-.1-.563-.3-1.063l-4.575 2.75L3 18v-1.175L7.55 14.1q-.5-.575-1.15-1.025-.65-.45-1.4-.725v-2.1q2.6.675 4.3 2.812Q11 15.2 11 18q0 .5-.05.962-.05.463-.175.913Zm2.45 0q-.125-.45-.175-.913Q13 18.5 13 18q0-2.8 1.7-4.938 1.7-2.137 4.3-2.812v2.1q-.75.275-1.4.725-.65.45-1.15 1.025L21 16.825V18l-1.025.55L15.4 15.8q-.2.5-.3 1.063-.1.562-.1 1.137 0 .225.012.45.013.225.063.45Z"/>
    </Icon>
  );
});

IconMaterialMatter.displayName = 'AmauiIconMaterialMatter';

export default IconMaterialMatter;
