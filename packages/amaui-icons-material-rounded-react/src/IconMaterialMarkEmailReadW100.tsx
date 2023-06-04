import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkEmailReadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkEmailReadW100'

      short_name='MarkEmailRead'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.35 20.75q-.15 0-.275-.05-.125-.05-.25-.175L12.25 17.95q-.1-.1-.113-.238-.012-.137.113-.262t.25-.125q.125 0 .25.125l2.6 2.6 5.45-5.45q.1-.1.238-.112.137-.013.262.112t.125.25q0 .125-.125.25l-5.425 5.425q-.125.125-.25.175-.125.05-.275.05ZM4.4 6l7.6 5 7.6-5Zm.4 12.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v5.1l-.35.35-.35.35V6.55l-7.575 5.025q-.1.075-.2.1-.1.025-.225.025t-.225-.025q-.1-.025-.2-.1L4 6.55V17.2q0 .35.225.575Q4.45 18 4.8 18h4.675l.7.7Zm7.2-6.075ZM12 11Zm0 .75Z"/>
    </Icon>
  );
});

IconMaterialMarkEmailReadW100.displayName = 'AmauiIconMaterialMarkEmailReadW100';

export default IconMaterialMarkEmailReadW100;
