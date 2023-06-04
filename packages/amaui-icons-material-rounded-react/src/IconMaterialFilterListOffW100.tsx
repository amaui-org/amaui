import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterListOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterListOffW100'

      short_name='FilterListOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.175 6.35-.7-.7H20q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm5.5 5.5-.7-.7H17q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM13 17.35h-2q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm6.6 3.25-8.75-8.75H7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h3.15L3.375 4.4q-.1-.1-.1-.238 0-.137.125-.262t.25-.125q.125 0 .25.125l16.2 16.2q.1.1.113.237.012.138-.113.263t-.25.125q-.125 0-.25-.125ZM5.325 5.65v.7H4q-.15 0-.25-.1T3.65 6q0-.15.1-.25t.25-.1Z"/>
    </Icon>
  );
});

IconMaterialFilterListOffW100.displayName = 'AmauiIconMaterialFilterListOffW100';

export default IconMaterialFilterListOffW100;
