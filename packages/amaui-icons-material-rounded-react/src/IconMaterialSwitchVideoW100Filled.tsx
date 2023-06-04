import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwitchVideoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchVideoW100Filled'

      short_name='SwitchVideo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.9 14.375q.1.1.225.1t.25-.125q.125-.125.125-.25t-.125-.25l-1.5-1.5h7.5l-1.525 1.525q-.1.1-.1.225t.125.25q.125.125.25.125t.25-.125l1.825-1.825q.125-.125.175-.25.05-.125.05-.275 0-.15-.05-.275-.05-.125-.175-.25l-1.85-1.85q-.1-.1-.225-.1t-.25.125q-.125.125-.125.25t.125.25l1.5 1.5h-7.5L8.4 10.125q.1-.1.1-.225t-.125-.25q-.125-.125-.25-.125t-.25.125L6.05 11.475q-.125.125-.175.25-.05.125-.05.275 0 .15.05.275.05.125.175.25ZM5.425 18.7q-.65 0-1.075-.425-.425-.425-.425-1.075V6.8q0-.65.425-1.075.425-.425 1.075-.425h10.4q.65 0 1.075.425.425.425.425 1.075v4.7L19.4 9.425q.2-.2.438-.088.237.113.237.388v4.55q0 .275-.237.387-.238.113-.438-.087L17.325 12.5v4.7q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialSwitchVideoW100Filled.displayName = 'AmauiIconMaterialSwitchVideoW100Filled';

export default IconMaterialSwitchVideoW100Filled;
