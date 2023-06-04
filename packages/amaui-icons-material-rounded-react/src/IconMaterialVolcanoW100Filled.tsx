import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVolcanoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolcanoW100Filled'

      short_name='Volcano'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m4.95 18.6 1.5-3.4q.2-.425.563-.663.362-.237.812-.237h2.05l1.625-4.05q.175-.425.55-.688.375-.262.85-.262h3q.5 0 .9.3t.525.8l2.4 8.4q.2.725-.237 1.312-.438.588-1.188.588h-12q-.8 0-1.25-.675-.45-.675-.1-1.425ZM14.15 5V3q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25Zm4.125 1.725q-.1.1-.25.1t-.25-.1q-.1-.1-.1-.25t.1-.25l1.45-1.425q.1-.1.238-.1.137 0 .237.1.1.1.1.237 0 .138-.1.238Zm-7.55 0L9.3 5.275q-.1-.1-.1-.238 0-.137.1-.237.1-.1.238-.1.137 0 .237.1l1.45 1.425q.1.1.1.25t-.1.25q-.1.1-.25.1t-.25-.1Z"/>
    </Icon>
  );
});

IconMaterialVolcanoW100Filled.displayName = 'AmauiIconMaterialVolcanoW100Filled';

export default IconMaterialVolcanoW100Filled;
