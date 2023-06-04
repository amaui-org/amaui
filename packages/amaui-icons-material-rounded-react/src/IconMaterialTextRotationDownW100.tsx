import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextRotationDownW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotationDownW100'

      short_name='TextRotationDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.75 19.75q-.15 0-.275-.05-.125-.05-.25-.175L3.45 17.75q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125L5.4 18.7V4.95q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V18.7l1.45-1.45q.1-.1.238-.113.137-.012.262.113t.125.25q0 .125-.125.25l-1.775 1.775q-.125.125-.25.175-.125.05-.275.05Zm4.95-3.825q-.2.075-.35-.025-.15-.1-.15-.325 0-.1.05-.175.05-.075.15-.125l2.65-.975V9.6l-2.65-.975q-.1-.05-.15-.125-.05-.075-.05-.175 0-.225.15-.313.15-.087.35-.012l9.275 3.525q.125.05.225.2.1.15.1.3t-.1.275q-.1.125-.225.175Zm3-1.875 5.5-2v-.1l-5.5-2.1Z"/>
    </Icon>
  );
});

IconMaterialTextRotationDownW100.displayName = 'AmauiIconMaterialTextRotationDownW100';

export default IconMaterialTextRotationDownW100;
