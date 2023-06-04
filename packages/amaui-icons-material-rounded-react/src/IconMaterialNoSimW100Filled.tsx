import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoSimW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoSimW100Filled'

      short_name='NoSim'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.725 16.2 8.175 5.7l2.075-2.075q.15-.15.363-.238.212-.087.437-.087h6.175q.65 0 1.075.425.425.425.425 1.075Zm1.425 5.3L17 18.35l.5-.5 1.2 1.2.15.15q-.125.65-.562 1.075-.438.425-1.088.425H6.8q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2V9.025q0-.225.075-.425.075-.2.25-.375L6.25 7.6 2.7 4.05q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125L20.65 21q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialNoSimW100Filled.displayName = 'AmauiIconMaterialNoSimW100Filled';

export default IconMaterialNoSimW100Filled;
