import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatLineSpacingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatLineSpacingW100'

      short_name='FormatLineSpacing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.875 6.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0 6q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0 6q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm-7.525.225L3.025 16.25q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l2 2V6.25l-2 2q-.1.1-.237.113-.138.012-.263-.113T2.9 8q0-.125.125-.25L5.35 5.425q.225-.225.525-.225.3 0 .525.225L8.725 7.75q.1.1.113.237.012.138-.113.263t-.25.125q-.125 0-.25-.125l-2-2v11.5l2-2q.1-.1.238-.113.137-.012.262.113t.125.25q0 .125-.125.25L6.4 18.575q-.225.225-.525.225-.3 0-.525-.225Z"/>
    </Icon>
  );
});

IconMaterialFormatLineSpacingW100.displayName = 'AmauiIconMaterialFormatLineSpacingW100';

export default IconMaterialFormatLineSpacingW100;
