import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowLeftW100'

      short_name='ArrowLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12.075 14.175-1.65-1.65q-.125-.125-.175-.25-.05-.125-.05-.275 0-.15.05-.275.05-.125.175-.25l1.65-1.65q.35-.35.813-.163.462.188.462.688v3.3q0 .5-.462.687-.463.188-.813-.162Z"/>
    </Icon>
  );
});

IconMaterialArrowLeftW100.displayName = 'AmauiIconMaterialArrowLeftW100';

export default IconMaterialArrowLeftW100;
