import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSheetsRtlW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SheetsRtlW100'

      short_name='SheetsRtl'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6.75 20.075-2.3-2.3q-.225-.225-.225-.525 0-.3.225-.525l2.3-2.3q.1-.1.25-.113.15-.012.25.113.1.1.1.237 0 .138-.1.238l-1.975 2H19q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H5.275l1.975 2q.1.1.113.225.012.125-.113.25-.1.1-.25.1t-.25-.1Zm-.325-7.625q-.475 0-.8-.325-.325-.325-.325-.8v-7.15q0-.475.325-.8.325-.325.8-.325h11.15q.475 0 .8.325.325.325.325.8v7.15q0 .475-.325.8-.325.325-.8.325ZM6 7.4h5.65V3.75H6.6q-.25 0-.425.175T6 4.35Zm6.35 0H18V4.35q0-.25-.175-.425T17.4 3.75h-5.05Zm-.7 4.35V8.1H6v3.05q0 .25.175.425t.425.175Zm.7 0h5.05q.25 0 .425-.175T18 11.15V8.1h-5.65Z"/>
    </Icon>
  );
});

IconMaterialSheetsRtlW100.displayName = 'AmauiIconMaterialSheetsRtlW100';

export default IconMaterialSheetsRtlW100;
