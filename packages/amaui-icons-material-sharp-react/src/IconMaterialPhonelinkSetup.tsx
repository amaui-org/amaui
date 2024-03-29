import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhonelinkSetup = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkSetup'

      short_name='PhonelinkSetup'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 21h10v-1H7ZM7 4h10V3H7ZM5 23V1h14v6h-2V6H7v12h10v-1h2v6Zm12-7-.15-1.25q-.2-.075-.35-.163-.15-.087-.3-.237l-1.15.5-1-1.75 1-.75q-.05-.2-.05-.375t.05-.375l-1-.75 1.05-1.7 1.1.45q.15-.125.3-.2.15-.075.35-.15L17 8h2l.15 1.25q.2.075.35.15.15.075.3.2l1.1-.45 1.05 1.7-1 .75q.05.2.05.375t-.05.375l1 .75-1 1.75-1.15-.5q-.15.15-.3.237-.15.088-.35.163L19 16Zm1-2.5q.65 0 1.075-.425.425-.425.425-1.075 0-.65-.425-1.075Q18.65 10.5 18 10.5q-.65 0-1.075.425Q16.5 11.35 16.5 12q0 .65.425 1.075.425.425 1.075.425ZM7 4V3v1Zm0 17v-1 1Z"/>
    </Icon>
  );
});

IconMaterialPhonelinkSetup.displayName = 'AmauiIconMaterialPhonelinkSetup';

export default IconMaterialPhonelinkSetup;
