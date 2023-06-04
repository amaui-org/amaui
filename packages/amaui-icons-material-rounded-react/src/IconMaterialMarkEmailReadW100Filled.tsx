import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkEmailReadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkEmailReadW100Filled'

      short_name='MarkEmailRead'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.35 20.75q-.15 0-.275-.05-.125-.05-.25-.175L12.25 17.95q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125l2.6 2.6 5.45-5.45q.125-.125.25-.125t.25.125q.125.125.125.25t-.125.25l-5.425 5.425q-.125.125-.25.175-.125.05-.275.05Zm-3.775-9.175q.2.125.425.125.225 0 .425-.125L19.7 6.75q.125-.075.15-.225.025-.15-.075-.275-.075-.125-.2-.138-.125-.012-.25.063L12 11 4.675 6.175q-.125-.075-.263-.063-.137.013-.212.138-.1.125-.062.275.037.15.162.225ZM4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v5.175q-.05.025-.087.05-.038.025-.088.075l-5.175 5.125-2.35-2.35q-.2-.2-.5-.2t-.5.2L9.675 17.2q-.2.2-.2.5t.2.5l.5.5Z"/>
    </Icon>
  );
});

IconMaterialMarkEmailReadW100Filled.displayName = 'AmauiIconMaterialMarkEmailReadW100Filled';

export default IconMaterialMarkEmailReadW100Filled;
